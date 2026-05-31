import { useEffect, useState } from 'react'
import { QuestionCardList } from '@/components/QuestionCardList'
import { SearchInput } from '@/components/SearchInput'
import { Loader } from '@/components/Loader'
import { useFetch } from '@/hooks/useFetch'
import { API_URL } from '@/constants'
import styles from './HomePage.module.css'

export const HomePage = () => {
  const [questions, setQuestions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const { isLoading, error, fetchData } = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`)
    const questions = await response.json()

    setQuestions(questions)
    return questions
  })

  useEffect(() => {
    fetchData('react')
  }, [])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <div className={styles.controlsContainer}>
        <SearchInput
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {isLoading && <Loader />}
      {error && <div>Error: {error}</div>}
      <QuestionCardList cards={questions} />
    </>
  )
}
