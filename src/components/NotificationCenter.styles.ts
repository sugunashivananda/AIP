import styled from 'styled-components';

export const NotificationCenterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  width: 360px;
  max-height: 480px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.textPrimary};
  overflow: hidden;
`;

export const NotificationHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    cursor: pointer;
    padding: ${({ theme }) => theme.space.xsmall};
    border-radius: ${({ theme }) => theme.radii.small};
    transition: background-color 0.2s ease;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.primaryLight};
      outline: none;
    }
  }
`;

export const NotificationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${({ theme }) => theme.space.small};
  overflow-y: auto;
  flex-grow: 1;

  li + li {
    margin-top: ${({ theme }) => theme.space.small};
  }
`;

export const NotificationFooter = styled.footer`
  padding: ${({ theme }) => theme.space.medium};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  display: flex;
  justify-content: flex-end;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    cursor: pointer;
    padding: ${({ theme }) => theme.space.xsmall};
    border-radius: ${({ theme }) => theme.radii.small};
    transition: background-color 0.2s ease;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.primaryLight};
      outline: none;
    }
  }
`;

export const NotificationEmptyState = styled.div`
  padding: ${({ theme }) => theme.space.large};
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
