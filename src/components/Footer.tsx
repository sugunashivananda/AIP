import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Your Company. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
