import React from 'react';
import styled from 'styled-components';
import { tableData } from '../data/mockData';
import Badge from './ui/Badge';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing(1)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

const Td = styled.td`
  padding: ${({ theme }) => theme.spacing(1)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const InvoicesTable: React.FC = () => {
  return (
    <main>
      <Table aria-label="Invoices Table">
        <thead>
          <tr>
            <Th>Invoice ID</Th>
            <Th>Client</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th>Amount</Th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ id, client, date, status, amount }) => (
            <tr key={id}>
              <Td>{id}</Td>
              <Td>{client}</Td>
              <Td>{date}</Td>
              <Td><Badge status={status}>{status}</Badge></Td>
              <Td>{amount}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  );
};

export default InvoicesTable;
