import React from 'react'
import styles from './variable-text.module.css'

interface VariableTextProps {
  text: string
}
export const VariableText = ({ text }: VariableTextProps): JSX.Element => {
  return (
      <div data-testid="variable-text" className={styles.variable}>
          {text}
      </div>
  )
}
