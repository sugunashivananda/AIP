import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#7C5DFA',
    primaryLight: '#9277FF',
    neutral: '#888EB0',
    neutralLight: '#DFE3FA',
    background: '#F8F8FB',
    white: '#FFFFFF',
    black: '#0C0E16',
    error: '#EC5757',
    success: '#33D69F',
    warning: '#FF8F00'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  typography: {
    fontFamily: "'Spartan', sans-serif",
    fontSize: {
      sm: '12px',
      md: '15px',
      lg: '18px',
      xl: '24px'
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  borderRadius: '8px'
};