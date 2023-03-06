import { render, screen } from '@testing-library/react'
import Home from '../../src/pages'
import '@testing-library/jest-dom'

describe('Page: Home', () => {
  it('displays initials', () => {
    render(<Home />)

    const blurb = screen.getByText('AD')

    expect(blurb).toBeInTheDocument()
  })
})