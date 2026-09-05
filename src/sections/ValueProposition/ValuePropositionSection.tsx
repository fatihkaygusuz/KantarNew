import { Container } from '../../components/Container/Container'
import styles from './ValuePropositionSection.module.css'
import orbitVideo from '../../assets/media/dual-orbit.mp4'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}

export default function ValuePropositionSection() {
  return (
    <section className={styles.section} aria-labelledby="value-proposition-heading">
      <Container variant="wide" className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.artwork} aria-hidden="true">
            <video className={styles.video} autoPlay loop muted playsInline>
              <source src={orbitVideo} type="video/mp4" />
            </video>
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>INTELLIGENCE FOR BRAND GROWTH</p>
            <h1 id="value-proposition-heading" className={styles.title}>
              Understand what&apos;s changing. Do what drives growth.
            </h1>
            <p className={styles.description}>
              Intelligence that connects people, markets and decisions to drive brand growth.
            </p>

            <nav className={styles.actions} aria-label="Explore Kantar">
              <a className={styles.primaryAction} href="#intelligence">
                <span>Explore Kantar</span>
                <ArrowIcon />
              </a>
              <a className={styles.secondaryAction} href="#solutions">Discover our solutions</a>
            </nav>

            <p className={styles.trustLine}>
              <span className={styles.trustMark} aria-hidden="true" />
              Trusted by the world&apos;s leading brands to understand people, markets and growth.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}