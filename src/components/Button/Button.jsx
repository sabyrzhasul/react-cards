import clsx from 'clsx'
import styles from './Button.module.css'

export const Button = ({ children, isActive, isDisabled, onClick }) => {
  return (
    <button
      className={clsx(styles.button, isActive && 'is-active')}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
