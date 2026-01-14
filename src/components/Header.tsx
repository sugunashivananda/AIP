import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutralLight};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Invoice App</Title>
      <Nav aria-label="Primary">
        <NavButton type="button">Dashboard</NavButton>
        <NavButton type="button">Invoices</NavButton>
        <NavButton type="button">Settings</NavButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
