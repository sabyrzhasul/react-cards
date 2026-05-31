import { useState, useEffect, useMemo } from 'react'
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    fetchData('react')
  }, [])

  const filteredCards = useMemo(() => questions.filter(({ question }) => {
    return question.toLowerCase().includes(searchTerm.trim().toLowerCase())
  }), [questions, searchTerm])

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
      {filteredCards.length === 0 && !isLoading && (
        <div className={styles.emptyMessage}>No questions found</div>
      )}

      <QuestionCardList cards={filteredCards} />
    </>
  )
}
