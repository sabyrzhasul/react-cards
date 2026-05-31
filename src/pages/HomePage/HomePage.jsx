import { useEffect, useState } from 'react'
import { QuestionCardList } from '@/components/QuestionCardList'
import { API_URL } from '@/constants'

export const HomePage = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch(`${API_URL}/react`)
        const data = await response.json()
        setQuestions(data)
      } catch (error) {
        console.error(error)
      }
    }

    getQuestions()
  }, [])

  return <QuestionCardList cards={questions} />
}
