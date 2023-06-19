import React from 'react'
import styles from './card.module.css'

interface CardProps {
  emoji: string
  faceDown: boolean
}
export const Card = ({ emoji, faceDown }: CardProps): JSX.Element => {
  let cardText = emoji
  let cardClass = styles.cardUp
  if (faceDown) {
    cardClass = styles.cardDown
    cardText = ''
  }
  return (
      <div data-testid="card" className={`${styles.card} ${cardClass}`}>
          {cardText}
      </div>
  )
}
