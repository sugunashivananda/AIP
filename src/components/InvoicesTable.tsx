import React from 'react';
import styled from 'styled-components';
import { tableData } from '../data/mockData';
import { Badge } from './ui/Badge';

const TableContainer = styled.section`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.surface};
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: ${({ theme }) => theme.colors.background};
  }

  th, td {
    padding: ${({ theme }) => theme.spacing(2)};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  th {
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.surface};
  }
`;

export const InvoicesTable: React.FC = () => {
  return (
    <TableContainer aria-labelledby="invoices-heading">
      <h2 id="invoices-heading" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
        Invoices
      </h2>
      <StyledTable>
        <thead>
          <tr>
            <th scope="col">Invoice #</th>
            <th scope="col">Client</th>
            <th scope="col">Date</th>
            <th scope="col">Due Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ id, invoiceNumber, clientName, date, dueDate, amount, status }) => (
            <tr key={id} tabIndex={0}>
              <td>{invoiceNumber}</td>
              <td>{clientName}</td>
              <td>{date}</td>
              <td>{dueDate}</td>
              <td>{amount}</td>
              <td><Badge $status={status}>{status}</Badge></td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};
