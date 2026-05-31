import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/Button'
import logo from '@/assets/logo.svg'
import styles from './Header.module.css'

export const Header = () => {
  const navigate = useNavigate()

  const goToAddQuestion = () => navigate('/add-question')

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img className={styles.logoImage} src={logo} alt="React logo" />
        <span>React Cards</span>
      </Link>

      <div className={styles.actions}>
        <Button onClick={goToAddQuestion}>Add</Button>
        <Button>Log in</Button>
      </div>
    </header>
  )
}
