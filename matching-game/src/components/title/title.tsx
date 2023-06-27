import React from 'react'
import styles from './title.module.css'

interface TitleProps {
  text: string
}
export const Title = ({ text }: TitleProps): JSX.Element => {
  return (
      <span data-testid="title" className={styles.title}>
          {text}
      </span>
  )
}
