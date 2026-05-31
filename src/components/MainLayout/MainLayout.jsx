import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import styles from './MainLayout.module.css'

export const MainLayout = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.mainLayout}>
      <Header />
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <footer className={styles.footer}>
          <p>
            React Question Cards Application | {currentYear} <br />
            by <a href="https://github.com/sabyrzhasul" target="_blank">Zhaslanuly Sabyrzhan</a>
          </p>
        </footer>
      </div>
    </div>
  )
}
