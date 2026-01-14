import React from 'react';
import styled from 'styled-components';
import { sidebarMenu } from '../data/mockData';

const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.white};
  width: 250px;
  padding: ${({ theme }) => theme.spacing.lg};
  border-right: 1px solid ${({ theme }) => theme.colors.neutralLight};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const MenuItem = styled.li``;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.neutral};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.sm} 0;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer aria-label="Sidebar navigation">
      <MenuList>
        {sidebarMenu.map((item) => (
          <MenuItem key={item.id}>
            <MenuButton type="button" aria-label={item.label}>
              {item.label}
            </MenuButton>
          </MenuItem>
        ))}
      </MenuList>
    </SidebarContainer>
  );
};

export default Sidebar;
