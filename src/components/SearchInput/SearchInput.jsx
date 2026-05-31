import { useId } from 'react'
import { SearchIcon } from '@/assets/icons'
import styles from './SearchInput.module.css'

export const SearchInput = ({ value, onChange }) => {
  const inputId = useId()

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={inputId}>
        <SearchIcon className={styles.searchIcon} />
      </label>
      <input
        type="text"
        id={inputId}
        className={styles.input}
        placeholder="search..."
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
