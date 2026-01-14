import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutralLight};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral};
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Invoice App. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
