import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Thumbnail } from '@/components/Thumbnail';

describe('Component: Thumbnail', () => {
  it('should render the Thumbnail component', () => {
    const { getByTestId } = render(<Thumbnail />);

    const thumbnail = getByTestId('thumbnail');

    expect(thumbnail).toBeInTheDocument();
  });

  it('should render the Modal component when the Thumbnail is clicked', () => {
    const { getByTestId, getByRole } = render(<Thumbnail />);

    // Open Modal
    const thumbnail = getByTestId('thumbnail');
    fireEvent.click(thumbnail);

    // Find Modal Close Button
    const closeButton = getByRole('button');
    fireEvent.click(closeButton);

    // Expect that modal is closed
    expect(closeButton).not.toBeInTheDocument();
  });
});
