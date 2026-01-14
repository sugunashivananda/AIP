import React from 'react';
import styled from 'styled-components';

interface BadgeProps {
  $status: 'Paid' | 'Pending' | 'Overdue';
  children: React.ReactNode;
}

const statusColors = {
  Paid: 'green',
  Pending: 'orange',
  Overdue: 'red',
};

const BadgeContainer = styled.span<BadgeProps>`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: white;
  background-color: ${({ $status }) => statusColors[$status] || 'gray'};
`;

export const Badge: React.FC<BadgeProps> = ({ $status, children }) => {
  return <BadgeContainer $status={$status}>{children}</BadgeContainer>;
};
