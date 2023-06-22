import React from 'react'
import '@testing-library/jest-dom'
import { Home } from '@/pages'
import { render, screen } from '@testing-library/react'

describe('Landing Page', () => {
  it('Renders the page with a title', () => {
    render(<Home />)
    expect(screen.getByTestId('title')).toBeVisible()
  })
})
