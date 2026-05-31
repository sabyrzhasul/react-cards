import { memo } from 'react'
import { QuestionCard } from '@/components/QuestionCard'
import styles from './QuestionCardList.module.css'

export const QuestionCardList = memo(({ cards }) => {
  return (
    <ul className={styles.cardList}>
      {cards.map((card) => (
        <QuestionCard
          key={card.id}
          card={card}
        />
      ))}
    </ul>
  )
})
