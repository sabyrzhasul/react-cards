import { useState } from 'react'
import { artificialDelay } from '@/helpers/artificialDelay'

export const useFetch = (requestFn) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async (arg) => {
    try {
      setIsLoading(true)
      setError('')
      await artificialDelay()
      return await requestFn(arg)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, fetchData }
}
