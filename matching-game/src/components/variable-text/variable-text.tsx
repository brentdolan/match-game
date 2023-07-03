import React from 'react'
import styles from './variable-text.module.css'

interface VariableTextProps {
  text: string
  attempts: number
}
export const VariableText = ({ text, attempts }: VariableTextProps): JSX.Element => {
  return (
      <div data-testid="variable-text" className={styles.variable}>
          {text} {attempts}
      </div>
  )
}
