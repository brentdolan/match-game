import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/button/button'

describe('Button', () => {
  it('Renders the correct text', () => {
    render(<Button text="Testing" onClick={() => {}}/>)
    expect(screen.getByTestId('button')).toHaveTextContent('Testing')
  })
  it('on click it calls the onClick function', () => {
    const onClick = jest.fn()
    render(<Button text={'text'} onClick={onClick}/>)
    screen.getByTestId('button').click()
    expect(onClick).toBeCalled()
  })
})
