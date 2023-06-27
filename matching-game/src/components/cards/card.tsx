import React from 'react'
import styles from './card.module.css'

interface CardProps {
  emoji: string
  faceDown: boolean
  whichCard: number
  onClick: (index: number, emoji: string) => void
}

export const Card = ({ emoji, faceDown, whichCard, onClick }: CardProps): JSX.Element => {
  let cardText = emoji
  let cardClass = styles.cardUp
  if (faceDown) {
    cardClass = styles.cardDown
    cardText = ''
  }
  const handleClick = (): void => {
    if (faceDown) {
      onClick(whichCard, emoji)
    }
  }
  return (
      <div onClick={handleClick} data-testid="card" className={`${styles.card} ${cardClass}`}>
          {cardText}
      </div>
  )
}
