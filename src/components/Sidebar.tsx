import React from 'react';
import styled from 'styled-components';
import { sidebarMenu } from '../data/mockData';

const SidebarContainer = styled.nav`
  width: 240px;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing(3)} 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  height: 100vh;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin: 0;
`;

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.surface};
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  & > span {
    margin-right: ${({ theme }) => theme.spacing(2)};
    font-size: 1.25rem;
  }
`;

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer aria-label="Main navigation">
      <MenuList>
        {sidebarMenu.map(({ id, label, icon, href }) => (
          <MenuItem key={id}>
            <MenuLink href={href} tabIndex={0}>
              <span aria-hidden="true">{icon}</span>
              {label}
            </MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </SidebarContainer>
  );
};
