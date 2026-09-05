import styles from './ArrowLink.module.css'

type ArrowLinkProps = {
  children: string
  href?: string
  tone?: 'lavender' | 'blue' | 'orange'
}

export function ArrowLink({ children, href = '#', tone = 'lavender' }: ArrowLinkProps) {
  return (
    <a className={`${styles.link} ${styles[tone]}`} href={href}>
      <span>{children}</span>
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </a>
  )
}
