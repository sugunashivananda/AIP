import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/Home';

describe('Home Page', () => {
  test('renders welcome message', () => {
    render(<Home />);
    const heading = screen.getByText(/Welcome to the Home Page/i);
    expect(heading).toBeInTheDocument();
  });
});
