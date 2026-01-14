import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      &copy; {new Date().getFullYear()} Invoice Dashboard. All rights reserved.
    </FooterWrapper>
  );
};

export default Footer;
