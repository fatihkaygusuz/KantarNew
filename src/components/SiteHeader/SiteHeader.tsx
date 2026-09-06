import { useEffect, useState } from 'react'
import logo from '../../assets/images/kantar-logo.svg'
import { Container } from '../Container/Container'
import styles from './SiteHeader.module.css'

const navigation = [
  { label: 'What we do', expandable: true },
  { label: 'Solutions', expandable: true },
  { label: 'Industries', expandable: true },
  { label: 'Perspectives', expandable: true },
  { label: 'About Kantar', expandable: true },
  { label: 'Careers', expandable: false },
]

function Logo() {
  return (
    <a className={styles.logo} href="#top" aria-label="Kantar home">
      <img src={logo} alt="Kantar" />
    </a>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 8)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container variant="wide" className={styles.container}>
        <Logo />
        <nav className={styles.navigation} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} className={styles.navLink} href={`#${item.label.toLowerCase()}`}>
              {item.label}
              {item.expandable && <span className={styles.chevron} aria-hidden="true" />}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <a className={styles.signIn} href="#sign-in">Sign in</a>
          <span className={styles.divider} aria-hidden="true" />
          <a className={styles.contact} href="#contact">Contact us</a>
        </div>
      </Container>
    </header>
  )
}