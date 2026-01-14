import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Invoice Dashboard. All rights reserved.
    </FooterContainer>
  );
};
