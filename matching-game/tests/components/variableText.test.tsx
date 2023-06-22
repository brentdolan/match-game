import React from 'react'
import { render, screen } from '@testing-library/react'
import { VariableText } from '@/components/variable-text/variable-text'

describe('Variable Text', () => {
  it('Renders the correct text', () => {
    render(<VariableText text="Testing" />)
    expect(screen.getByTestId('variable-text')).toHaveTextContent('Testing')
  })
})
