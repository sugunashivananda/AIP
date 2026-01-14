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
    accent: '#FF5630',
    success: '#36B37E',
    warning: '#FFAB00',
    info: '#00B8D9',
    disabled: '#A5ADBA',
  },
  spacing: (factor: number) => `${factor * 8}px`,
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: '16px',
    fontWeightRegular: 400,
    fontWeightBold: 700,
    lineHeight: 1.5,
  },
};
