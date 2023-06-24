import React, { type MouseEventHandler } from 'react'
import styles from './card.module.css'

interface CardProps {
  emoji: string
  faceDown: boolean
  whichCard: number
  onClick: (id: number) => void
}

export const Card = ({ emoji, faceDown, whichCard, onClick }: CardProps): JSX.Element => {
  let cardText = emoji
  let cardClass = styles.cardUp
  if (faceDown) {
    cardClass = styles.cardDown
    cardText = ''
  }
  const handleClick = (): void => {
    onClick(whichCard)
  }
  return (
      <div onClick={handleClick} data-testid="card" className={`${styles.card} ${cardClass}`}>
          {cardText}
      </div>
  )
}
