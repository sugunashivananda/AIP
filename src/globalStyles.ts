import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  a:focus, button:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    text-align: left;
    padding: ${({ theme }) => theme.spacing.sm};
  }

  th {
    background-color: ${({ theme }) => theme.colors.neutralLight};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.white};
  }

  tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;