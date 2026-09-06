import { Container } from '../../components/Container/Container'
import styles from './GlobalReachSection.module.css'

function NetworkArtwork() {
  return (
    <div className={styles.artwork} aria-hidden="true">
      <span className={styles.map} />
      <span className={styles.orangeBar} />
      <span className={styles.blueBlock} />
      <span className={styles.lavenderBlock} />
      <span className={styles.dots} />
    </div>
  )
}

export default function GlobalReachSection() {
  return (
    <section className={styles.section} aria-labelledby="global-reach-heading">
      <Container variant="wide" className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>GLOBAL REACH</p>
            <h2 id="global-reach-heading" className={styles.title}>Making the whole world our network</h2>
          </div>
          <NetworkArtwork />
        </div>
      </Container>
    </section>
  )
}