import React from 'react';
import styled from 'styled-components';
import { tableData } from '../data/mockData';
import Badge from './ui/Badge';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.neutralLight};
`;

const Th = styled.th`
  padding: ${({ theme }) => theme.spacing.sm};
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutralLight};
`;

const StatusTd = styled(Td)<{ $status: string }>`
  text-align: center;
`;

const InvoicesTable: React.FC = () => {
  return (
    <main>
      <Table aria-label="Invoices Table">
        <Thead>
          <tr>
            <Th>Invoice ID</Th>
            <Th>Client</Th>
            <Th>Due Date</Th>
            <Th>Total</Th>
            <Th>Status</Th>
          </tr>
        </Thead>
        <tbody>
          {tableData.map(({ id, client, dueDate, total, status }) => (
            <tr key={id}>
              <Td>{id}</Td>
              <Td>{client}</Td>
              <Td>{dueDate}</Td>
              <Td>{total}</Td>
              <StatusTd $status={status}>
                <Badge status={status}>{status}</Badge>
              </StatusTd>
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  );
};

export default InvoicesTable;
