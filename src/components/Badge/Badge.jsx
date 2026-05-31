import clsx from 'clsx'
import styles from './Badge.module.css'

export const Badge = ({ variant, children }) => {
  return (
    <div
      className={clsx(
        styles.badge,
        variant && styles[variant],
      )}
    >
      {children}
    </div>
  )
}