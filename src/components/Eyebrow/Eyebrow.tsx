import type { ReactNode } from 'react'
import styles from './Eyebrow.module.css'

type EyebrowProps = {
  children: ReactNode
  tone?: 'lavender' | 'blue' | 'orange'
}

export function Eyebrow({ children, tone = 'lavender' }: EyebrowProps) {
  return (
    <div className={`${styles.eyebrow} ${styles[tone]}`}>
      <span>{children}</span>
      <span className={styles.rule} aria-hidden="true" />
    </div>
  )
}
