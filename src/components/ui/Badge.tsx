import React from 'react';
import styled, { css } from 'styled-components';

interface BadgeProps {
  status: string;
  children: React.ReactNode;
}

const statusStyles = {
  paid: css`
    background-color: #33d69f;
    color: white;
  `,
  pending: css`
    background-color: #ff8f00;
    color: white;
  `,
  draft: css`
    background-color: #888eb0;
    color: white;
  `
};

const BadgeContainer = styled.span<{ $status: string }>`
  display: inline-block;
  padding: 0.25em 0.75em;
  border-radius: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-transform: capitalize;
  ${({ $status }) => statusStyles[$status.toLowerCase()] || statusStyles.draft}
`;

const Badge: React.FC<BadgeProps> = ({ status, children }) => {
  return <BadgeContainer $status={status}>{children}</BadgeContainer>;
};

export default Badge;
