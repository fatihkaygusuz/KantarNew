import { Container } from '../../components/Container/Container'
import { Eyebrow } from '../../components/Eyebrow/Eyebrow'
import portrait from '../../assets/images/intelligence-portrait.png'
import styles from './IntelligenceSection.module.css'

type Service = {
  title: string
  description: string
  tone: 'signal' | 'decision' | 'strategic'
  icon: 'signal' | 'bars' | 'chart'
}

const services: Service[] = [
  {
    title: 'Signal Intelligence',
    description: 'Keep a pulse on consumers and markets in real time.',
    tone: 'signal',
    icon: 'signal',
  },
  {
    title: 'Decision Intelligence',
    description: 'Power optimal marketing choices with predictable ROI.',
    tone: 'decision',
    icon: 'bars',
  },
  {
    title: 'Strategic Intelligence',
    description: 'Drive growth strategies that connect brand actions to value.',
    tone: 'strategic',
    icon: 'chart',
  },
]

function ServiceIcon({ type }: { type: Service['icon'] }) {
  if (type === 'signal') {
    return (
      <svg aria-hidden="true" viewBox="0 0 52 52">
        <circle cx="26" cy="26" r="4" fill="currentColor" />
        <path d="M18 18a11.3 11.3 0 0 0 0 16M34 18a11.3 11.3 0 0 1 0 16M12 12a19.8 19.8 0 0 0 0 28M40 12a19.8 19.8 0 0 1 0 28" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.6" />
      </svg>
    )
  }

  if (type === 'bars') {
    return (
      <svg aria-hidden="true" viewBox="0 0 52 52">
        <path d="M15 36V25M26 36V14M37 36V21" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.6" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 52 52">
      <path d="M13 11v29h29" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
      <path d="m18 31 8-7 6 3 8-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" />
    </svg>
  )
}

function Artwork() {
  return (
    <div className={styles.artwork} aria-hidden="true">
      <div className={styles.blueTop} />
      <div className={styles.orangeBar} />
      <img className={styles.portrait} src={portrait} alt="" />
      <div className={styles.blueBottom} />
      <div className={styles.gradientBar} />
      <div className={styles.dots} />
    </div>
  )
}

export default function IntelligenceSection() {
  return (
    <section className={styles.section} aria-labelledby="intelligence-heading">
      <Container variant="wide" className={styles.heroContainer}>
        <div className={styles.hero}>
          <div className={styles.copy}>
            <Eyebrow>OUR INTELLIGENCE</Eyebrow>

            <h2 id="intelligence-heading" className={styles.title}>
              <span>Three kinds of intelligence.</span>
              <span className={styles.titleAccent}>One advantage.</span>
            </h2>

            <p className={styles.description}>
              Integrated intelligence that turns insight into impact.
            </p>
          </div>

          <Artwork />
        </div>
      </Container>

      <div className={styles.servicesSurface}>
        <Container variant="wide">
          <div className={styles.services}>
            {services.map((service) => (
              <article key={service.title} className={`${styles.service} ${styles[service.tone]}`}>
                <div className={styles.iconBlock}>
                  <ServiceIcon type={service.icon} />
                </div>

                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <span className={styles.serviceRule} aria-hidden="true" />
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <span className={styles.serviceArrow} aria-hidden="true">→</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
