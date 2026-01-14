import React from 'react';
import styled from 'styled-components';
import { sidebarMenu } from '../data/mockData';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  flex-direction: column;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const MenuLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  text-decoration: none;
  display: block;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: 4px;
  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.background};
    outline: none;
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer aria-label="Sidebar navigation">
      <nav>
        <MenuList>
          {sidebarMenu.map((item) => (
            <MenuItem key={item.id}>
              <MenuLink href={item.link}>{item.label}</MenuLink>
            </MenuItem>
          ))}
        </MenuList>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;
