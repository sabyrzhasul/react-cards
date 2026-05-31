import { useEffect, useState } from 'react'
import { QuestionCardList } from '@/components/QuestionCardList'
import { API_URL } from '@/constants'
import { Loader } from '@/components/Loader'
import { useFetch } from '@/hooks/useFetch'

export const HomePage = () => {
  const [questions, setQuestions] = useState([])

  const { isLoading, error, fetchData } = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`)
    const questions = await response.json()

    setQuestions(questions)
    return questions
  })

  useEffect(() => {
    fetchData('react')
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>Error: {error}</div>}
      <QuestionCardList cards={questions} />
    </>
  )
}
