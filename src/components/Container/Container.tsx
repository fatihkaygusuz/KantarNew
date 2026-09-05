import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Container.module.css'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  variant?: 'content' | 'wide' | 'reading'
}

export function Container({ children, variant = 'content', className = '', ...props }: ContainerProps) {
  return (
    <div className={`${styles.container} ${styles[variant]} ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
