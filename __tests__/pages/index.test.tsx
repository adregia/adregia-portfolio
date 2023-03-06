import { render, screen } from '@testing-library/react'
import Home from '../../src/pages'
import '@testing-library/jest-dom'

describe('Page: Home', () => {
  it('displays "hello, world"', () => {
    render(<Home />)

    const blurb = screen.getByText('Hello, world!')

    expect(blurb).toBeInTheDocument()
  })
})