import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0052CC',
    secondary: '#172B4D',
    background: '#F4F5F7',
    surface: '#FFFFFF',
    textPrimary: '#172B4D',
    textSecondary: '#6B778C',
    border: '#DFE1E6',
    success: '#36B37E',
    warning: '#FFAB00',
    error: '#FF5630',
  },
  spacing: (factor: number) => `${factor * 8}px`,
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: '16px',
    fontWeightRegular: 400,
    fontWeightBold: 700,
    lineHeight: 1.5,
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};