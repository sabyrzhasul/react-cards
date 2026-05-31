import { Button } from '../Button'
import logo from '../../assets/logo.svg'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <p>
        <img
          className={styles.logo}
          src={logo}
          alt="React logo"
        />
        <span>React Cards</span>
      </p>

      <div className={styles.actions}>
        <Button>Add</Button>
        <Button>Log in</Button>
      </div>
    </header>
  )
}
