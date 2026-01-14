import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin: 0;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title>Invoice Dashboard</Title>
    </HeaderWrapper>
  );
};

export default Header;
