import React from 'react'
import styles from './button.module.css'

interface ButtonProps {
  text: string
  onClick: () => void
}
export const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
  return (
      <button onClick={onClick} data-testid="button" className={styles.button}>
          {text}
      </button>
  )
}
