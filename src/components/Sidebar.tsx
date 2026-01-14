import React from 'react';
import styled from 'styled-components';
import { sidebarMenu } from '../data/mockData';

const SidebarWrapper = styled.nav`
  width: 240px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  flex-direction: column;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const Icon = styled.span`
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper aria-label="Main Navigation">
      <MenuList>
        {sidebarMenu.map(({ id, label, icon, link }) => (
          <MenuItem key={id} tabIndex={0} role="link" aria-label={label} onClick={() => window.location.href = link} onKeyPress={(e) => { if (e.key === 'Enter') window.location.href = link; }}>
            <Icon aria-hidden="true">{icon}</Icon>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </SidebarWrapper>
  );
};

export default Sidebar;
