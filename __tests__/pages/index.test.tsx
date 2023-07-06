import { render, screen } from '@testing-library/react';
import { CssVarsProvider } from '@mui/joy';

import type { ReactNode } from 'react';

import Home from '../../src/pages/index';
import '@testing-library/jest-dom';

// `CssVarsProvider` invokes this method, so we need to mock it.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const wrapper = ({ children }: { children: ReactNode }) => {
  return <CssVarsProvider>{children}</CssVarsProvider>;
};

describe('Page: Home', () => {
  it('displays initials', () => {
    render(<Home />, { wrapper });

    const blurb = screen.getByText('AD');

    expect(blurb).toBeInTheDocument();
  });
});
