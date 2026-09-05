import { ArrowLink } from '../../components/ArrowLink/ArrowLink'
import { Container } from '../../components/Container/Container'
import styles from './FeatureGridSection.module.css'

type Card = {
  eyebrow: string
  title: string
  description?: string
  link?: string
  tone: 'default' | 'brand' | 'inverse' | 'lavender'
  graphic: 'globe' | 'promise' | 'approach' | 'perspective' | 'spotlight' | 'careers'
}

const cards: Card[] = [
  { eyebrow: 'BY THE NUMBERS', title: '90+ markets.\n10k+ people.\n50+ years of insight.', tone: 'default', graphic: 'globe' },
  { eyebrow: 'OUR PROMISE', title: 'Designed to deliver real impact.', description: 'Our solutions are built to be practical, scalable and always focused on outcomes that matter.', tone: 'brand', graphic: 'promise' },
  { eyebrow: 'OUR APPROACH', title: 'Discover. Understand. Act.', tone: 'default', graphic: 'approach' },
  { eyebrow: 'GLOBAL PERSPECTIVE', title: 'One world. Different perspectives.', link: 'Explore our thinking', tone: 'inverse', graphic: 'perspective' },
  { eyebrow: 'INSIGHT SPOTLIGHT', title: 'The future is shaped by the choices we make now.', link: 'Read the report', tone: 'default', graphic: 'spotlight' },
  { eyebrow: 'CAREERS', title: 'Your perspective can change everything.', link: 'Explore opportunities', tone: 'lavender', graphic: 'careers' },
]

function Graphic({ type }: { type: Card['graphic'] }) {
  return <div className={`${styles.graphic} ${styles[type]}`} aria-hidden="true" />
}

export default function FeatureGridSection() {
  return (
    <section className={styles.section} aria-label="Kantar highlights">
      <Container variant="wide">
        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.eyebrow} className={`${styles.card} ${styles[card.tone]}`}>
              <div className={styles.cardContent}>
                <p className={styles.eyebrow}>{card.eyebrow}</p>
                <h2 className={styles.title}>{card.title}</h2>
                {card.description && <p className={styles.description}>{card.description}</p>}
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