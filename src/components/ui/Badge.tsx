import React from 'react';
import styled from 'styled-components';

interface BadgeProps {
  $color?: string;
  children: React.ReactNode;
}

const StyledBadge = styled.span<BadgeProps>`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: white;
  background-color: ${({ $color, theme }) => $color || theme.colors.primary};
  border-radius: 12px;
  user-select: none;
`;

const Badge: React.FC<BadgeProps> = ({ $color, children }) => {
  return <StyledBadge $color={$color}>{children}</StyledBadge>;
};

export default Badge;
