import React from 'react';
import styled, { css } from 'styled-components';

interface BadgeProps {
  $status: 'positive' | 'warning' | 'error' | 'neutral';
  children: React.ReactNode;
}

const statusStyles = {
  positive: css`
    background-color: ${({ theme }) => theme.colors.success};
    color: white;
  `,
  warning: css`
    background-color: ${({ theme }) => theme.colors.warning};
    color: black;
  `,
  error: css`
    background-color: ${({ theme }) => theme.colors.error};
    color: white;
  `,
  neutral: css`
    background-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
};

const StyledBadge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0 ${({ theme }) => theme.spacing(1)};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  border-radius: 12px;
  line-height: 1.5;
  ${({ $status }) => statusStyles[$status] || statusStyles.neutral}
`;

const Badge: React.FC<Omit<BadgeProps, '$status'> & { status: BadgeProps['$status'] }> = ({ status, children }) => {
  return <StyledBadge $status={status}>{children}</StyledBadge>;
};

export default Badge;
