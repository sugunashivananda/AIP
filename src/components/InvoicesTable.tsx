import React from 'react';
import styled from 'styled-components';
import Badge from './ui/Badge';
import { tableData } from '../data/mockData';

const TableWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const TableHeader = styled.th`
  padding: ${({ theme }) => theme.spacing.sm};
  text-align: left;
`;

const TableCell = styled.td`
  padding: ${({ theme }) => theme.spacing.sm};
`;

const getStatusColor = (status: string, theme: any) => {
  switch (status.toLowerCase()) {
    case 'paid':
      return theme.colors.success;
    case 'pending':
      return theme.colors.warning;
    case 'overdue':
      return theme.colors.error;
    default:
      return theme.colors.muted;
  }
};

const InvoicesTable: React.FC = () => {
  return (
    <TableWrapper aria-label="Invoices Table">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableHeader>Invoice ID</TableHeader>
            <TableHeader>Client</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {tableData.map(({ id, client, date, amount, status }) => (
            <TableRow key={id} tabIndex={0}>
              <TableCell>{id}</TableCell>
              <TableCell>{client}</TableCell>
              <TableCell>{new Date(date).toLocaleDateString()}</TableCell>
              <TableCell>${amount.toFixed(2)}</TableCell>
              <TableCell>
                <Badge $color={(theme) => getStatusColor(status, theme)}>{status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default InvoicesTable;
