import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing(2)};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserName = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Invoice Dashboard</Title>
      <UserProfile>
        <Avatar src="https://i.pravatar.cc/40" alt="User avatar" />
        <UserName>John Doe</UserName>
      </UserProfile>
    </HeaderContainer>
  );
};
