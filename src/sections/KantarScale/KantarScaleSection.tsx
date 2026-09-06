import { Container } from '../../components/Container/Container'
import styles from './KantarScaleSection.module.css'

const metrics = [
  { value: '8k', label: 'brands tracked', description: 'Helping organisations understand how brands are performing and why.', tone: 'lavender' },
  { value: '2bn+', label: 'consumer signals', description: 'Connecting attitudes, behaviour, culture and market activity.', tone: 'blue' },
  { value: '22k', label: 'people', description: 'Researchers, strategists, technologists, consultants and specialists working across the world.', tone: 'pink' },
  { value: '65m', label: 'interactions analysed', description: 'Turning individual experiences into patterns that organisations can act on.', tone: 'lavender' },
] as const

export default function KantarScaleSection() {
  return (
    <section className={styles.section} aria-labelledby="kantar-scale-heading">
      <Container variant="wide" className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>OUR SCALE</p>
            <h2 id="kantar-scale-heading" className={styles.title}>Intelligence gets stronger...</h2>
          </div>
          <p className={styles.introduction}>
            Every decision is grounded in something bigger: more consumers, more categories, more markets and decades of accumulated evidence.
          </p>
        </header>

        <div className={styles.spectrum} aria-hidden="true">
          <span className={styles.blueSegment} />
          <span className={styles.lavenderSegment} />
          <span className={styles.pinkSegment} />
          <span className={styles.orangeSegment} />
        </div>

        <dl className={styles.metrics}>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <dt className={`${styles.value} ${styles[metric.tone]}`}>{metric.value}</dt>
              <dd className={styles.metricDetails}>
                <strong>{metric.label}</strong>
                <span>{metric.description}</span>
              </dd>
            </div>
          ))}
        </dl>

        <a className={styles.cta} href="#impact">
          <span>See how Kantar creates impact</span>
          <span aria-hidden="true">↗</span>
        </a>
      </Container>
    </section>
  )
}