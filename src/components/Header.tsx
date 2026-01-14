import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: ${({ theme }) => theme.spacing(3)};
    margin: 0;
    padding: 0;
  }
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    text-decoration: none;
    &:hover, &:focus {
      color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
  }
`;

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  transition: background-color 0.3s ease;
  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Application</Logo>
      <Nav aria-label="Primary navigation">
        <ul>
          <li><a href="#link1">Link 1</a></li>
          <li><a href="#link2">Link 2</a></li>
        </ul>
      </Nav>
      <ActionButton type="button">Action</ActionButton>
    </HeaderContainer>
  );
};

export default Header;
