import React from 'react'
import styles from './button.module.css'

interface ButtonProps {
  text: string
}
export const Button = ({ text }: ButtonProps): JSX.Element => {
  return (
      <button data-testid="button" className={styles.button}>
          {text}
      </button>
  )
}
