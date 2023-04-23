import { render } from '@testing-library/react';
import { CssVarsProvider } from '@mui/joy';

import type { ReactNode } from 'react';

import Home from '../../src/pages/index';

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

it('renders homepage unchanged', () => {
  const { container } = render(<Home />, { wrapper });
  expect(container).toMatchSnapshot();
});
