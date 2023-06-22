import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/button/button'

describe('Button', () => {
  it('Renders the correct text', () => {
    render(<Button text="Testing" />)
    expect(screen.getByTestId('button')).toHaveTextContent('Testing')
  })
})
