import { ArrowLink } from '../../components/ArrowLink/ArrowLink'
import { Container } from '../../components/Container/Container'
import styles from './FeatureGridSection.module.css'

type Card = {
  eyebrow: string
  title?: string
  description?: string
  link?: string
  tone: 'default' | 'brand' | 'inverse' | 'lavender'
  graphic: 'globe' | 'promise' | 'approach' | 'perspective' | 'spotlight' | 'careers'
  metrics?: Array<{ value: string; label: string; tone: 'blue' | 'lavender' | 'orange' }>
  approach?: Array<{ title: string; description: string; tone: 'blue' | 'lavender' | 'orange' }>
}

const cards: Card[] = [
  {
    eyebrow: 'BY THE NUMBERS',
    tone: 'default',
    graphic: 'globe',
    metrics: [
      { value: '90+', label: 'Markets', tone: 'blue' },
      { value: '10k+', label: 'People', tone: 'lavender' },
      { value: '50+', label: 'Years of insight', tone: 'orange' },
    ],
  },
  {
    eyebrow: 'OUR PROMISE',
    title: 'Designed to deliver real impact.',
    description: 'Our solutions are built to be practical, scalable and always focused on outcomes that matter.',
    tone: 'brand',
    graphic: 'promise',
  },
  {
    eyebrow: 'OUR APPROACH',
    tone: 'default',
    graphic: 'approach',
    approach: [
      { title: 'Discover', description: 'Uncover the truth in complexity.', tone: 'blue' },
      { title: 'Understand', description: 'Turn data into human insight.', tone: 'lavender' },
      { title: 'Act', description: 'Activate decisions that drive growth.', tone: 'orange' },
    ],
  },
  { eyebrow: 'GLOBAL PERSPECTIVE', title: 'One world. Different perspectives.', link: 'Explore our thinking', tone: 'inverse', graphic: 'perspective' },
  { eyebrow: 'INSIGHT SPOTLIGHT', title: 'The future is shaped by the choices we make now.', link: 'Read the report', tone: 'default', graphic: 'spotlight' },
  { eyebrow: 'CAREERS', title: 'Your perspective can change everything.', link: 'Explore opportunities', tone: 'lavender', graphic: 'careers' },
]

const accentClasses = {
  blue: styles.blueAccent,
  lavender: styles.lavenderAccent,
  orange: styles.orangeAccent,
} as const

function Graphic({ type }: { type: Card['graphic'] }) {
  return <div className={`${styles.graphic} ${styles[type]}`} aria-hidden="true" />
}

export default function FeatureGridSection() {
  return (
    <section className={styles.section} aria-label="Kantar highlights">
      <Container variant="wide">
        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.eyebrow} className={`${styles.card} ${styles[card.tone]}`} aria-label={card.eyebrow}>
              <div className={styles.cardContent}>
                <p className={styles.eyebrow}>{card.eyebrow}</p>
                {card.title && <h2 className={styles.title}>{card.title}</h2>}
                {card.description && <p className={styles.description}>{card.description}</p>}
                {card.metrics && (
                  <dl className={styles.metrics}>
                    {card.metrics.map((metric) => (
                      <div key={metric.label} className={styles.metric}>
                        <dt className={`${styles.metricValue} ${accentClasses[metric.tone]}`}>{metric.value}</dt>
                        <dd className={styles.metricLabel}>{metric.label}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {card.approach && (
                  <ul className={styles.approachList}>
                    {card.approach.map((item) => (
                      <li key={item.title} className={styles.approachItem}>
                        <span className={`${styles.approachMark} ${accentClasses[item.tone]}`} aria-hidden="true" />
                        <span>
                          <strong>{item.title}</strong>
                          <small>{item.description}</small>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {card.link && <ArrowLink tone={card.tone === 'inverse' ? 'blue' : 'lavender'}>{card.link}</ArrowLink>}
              </div>
              <Graphic type={card.graphic} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}