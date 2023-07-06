import { render, screen, fireEvent } from '@testing-library/react';
import { CssVarsProvider } from '@mui/joy';

import type { ReactNode } from 'react';

import Project from '../../../src/pages/project/[name]';
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

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  asPath: '/project/fit-recruiters',
}));

const wrapper = ({ children }: { children: ReactNode }) => {
  return <CssVarsProvider>{children}</CssVarsProvider>;
};

describe('Page: Project', () => {
  it('displays initials', () => {
    render(<Project />, { wrapper });

    const blurb = screen.getByText('FitRecruiters (Personal Project)');

    expect(blurb).toBeInTheDocument();
  });

  it('opens image modal', () => {
    render(<Project />, { wrapper });

    const thumbnail = screen.getAllByTestId('thumbnail')[0];

    fireEvent.click(thumbnail);

    const modal = screen.getByTestId('modal');

    expect(modal).toBeInTheDocument();
  });
});
