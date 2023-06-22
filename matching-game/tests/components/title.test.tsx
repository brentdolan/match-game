import React from 'react'
import { render, screen } from '@testing-library/react'
import { Title } from '@/components/title/title'

describe('Title', () => {
  it('Renders the correct text', () => {
    render(<Title text="Testing" />)
    expect(screen.getByTestId('title')).toHaveTextContent('Testing')
  })
})
