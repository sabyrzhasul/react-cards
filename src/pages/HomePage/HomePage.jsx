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
  const [sortBy, setSortBy] = useState('')

  const { isLoading, error, fetchData } = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`)
    const questions = await response.json()

    setQuestions(questions)
    return questions
  })

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSortByChange = (event) => {
    setSortBy(event.target.value)
  }

  useEffect(() => {
    fetchData(`react?${sortBy}`)
  }, [sortBy])

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

        <select
          className={styles.select}
          value={sortBy}
          onChange={handleSortByChange}
        >
          <option value="">sort by</option>
          <hr />
          <option value="_sort=level">level ASC</option>
          <option value="_sort=-level">level DESC</option>
          <option value="_sort=completed">completed ASC</option>
          <option value="_sort=-completed">completed DESC</option>
        </select>
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
