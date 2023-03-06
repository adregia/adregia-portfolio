import { render, screen } from '@testing-library/react'
import Home from '../../src/pages'
import '@testing-library/jest-dom'

describe('Page: Home', () => {
  it('renders a blurb about editing', () => {
    render(<Home />)

    const blurb = screen.getByText('Get started by editing')

    expect(blurb).toBeInTheDocument()
  })
})