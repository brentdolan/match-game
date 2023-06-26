import React, { type JSX } from 'react'
import styles from './grid.module.css'
interface Props {
  children: JSX.Element[]
}
export const Grid = ({ children }: Props): JSX.Element => {
  return (
      <div className={styles.grid}>
          {children}
      </div>
  )
}
