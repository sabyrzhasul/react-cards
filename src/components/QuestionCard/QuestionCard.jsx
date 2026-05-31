import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import styles from './QuestionCard.module.css'

export const QuestionCard = memo(({ card }) => {
  const navigate = useNavigate()

  const goToQuestion = () => navigate(`/question/${card.id}`)

  const levelVariant = card.level === 1 ? 'primary' : card.level === 2 ? 'warning' : 'alert'
  const completedVariant = card.completed ? 'success' : 'primary'

  return (
    <li className={styles.card}>
      <div className={styles.cardLabels}>
        <Badge variant={levelVariant}>
          Level: {card.level}
        </Badge>
        <Badge variant={completedVariant}>
          {card.completed ? 'Completed' : 'Not Completed'}
        </Badge>
      </div>

      <h5 className={styles.cardTitle}>{card.question}</h5>

      <div className={styles.cardAnswers}>
        <label>short answer:</label>
        <p className={styles.cardAnswer}>
          {card.answer}
        </p>
      </div>

      <Button onClick={goToQuestion}>View</Button>
    </li>
  )
})
