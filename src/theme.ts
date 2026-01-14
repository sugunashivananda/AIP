import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#4F46E5',
    primaryLight: '#6366F1',
    secondary: '#6B7280',
    background: '#F9FAFB',
    surface: '#FFFFFF',
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    accent: '#F59E0B',
    error: '#EF4444',
  },
  spacing: (factor: number) => `${factor * 8}px`,
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '16px',
    fontWeightRegular: 400,
    fontWeightBold: 700,
    lineHeight: 1.5,
  },
  borderRadius: '8px',
};
