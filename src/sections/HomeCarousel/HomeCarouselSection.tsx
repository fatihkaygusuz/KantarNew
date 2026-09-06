import { useState } from 'react'
import { Container } from '../../components/Container/Container'
import { Eyebrow } from '../../components/Eyebrow/Eyebrow'
import { ArrowLink } from '../../components/ArrowLink/ArrowLink'
import styles from './HomeCarouselSection.module.css'

type Slide = {
  eyebrow: string
  eyebrowTone: 'lavender' | 'blue'
  title: string
  accent?: string
  description: string
  cta: string
  category: string
  cardTitle: string
  tone: 'lavender' | 'blue' | 'green'
}

const slides: Slide[] = [
  { eyebrow: 'WHAT WE DELIVER', eyebrowTone: 'lavender', title: 'Modernising Energy Efficiency', accent: 'through Digitalisation', description: 'Energy efficiency is changing, with new digital technologies enabling greater control, optimisation and analytics. New policies and new business models will greatly enhance end-use and systems efficiency.', cta: 'Explore how', category: 'EVENT', cardTitle: 'Modernising Energy Efficiency through Digitalisation', tone: 'lavender' },
  { eyebrow: 'INSIGHT SPOTLIGHT', eyebrowTone: 'blue', title: 'Trust drives', accent: 'every choice.', description: 'Our latest research shows people are more selective, but also more influenced by the voices they trust.', cta: 'Explore how', category: 'ARTICLE', cardTitle: 'Billions of insights on how consumers think', tone: 'blue' },
  { eyebrow: 'WHAT WE DELIVER', eyebrowTone: 'lavender', title: 'Our biggest achievement?', accent: 'Earning your trust.', description: 'This year, the majority of our students came to us through heartfelt recommendations from family, friends, and alumni. Your belief in Gradvisors fuels our passion to deliver exceptional results.', cta: 'Explore how', category: 'PERSPECTIVES', cardTitle: 'Explore the KANTAR point of view', tone: 'green' },
  { eyebrow: 'INTELLIGENCE FOR BRAND GROWTH', eyebrowTone: 'blue', title: "Know what's changing", accent: "and what's to do next.", description: 'Sharper understanding. Smarter decisions. Stronger growth.', cta: 'Discover Our Solutions', category: 'SOLUTIONS', cardTitle: 'Positioning, Perception and Segmentation Strategy', tone: 'blue' },
]

function Artwork({ tone }: { tone: Slide['tone'] }) {
  return <div className={`${styles.artwork} ${styles[tone]}`} aria-hidden="true"><span /><span /><span /><span /></div>
}

export default function HomeCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = slides[activeIndex]
  const previous = () => setActiveIndex((activeIndex + slides.length - 1) % slides.length)
  const next = () => setActiveIndex((activeIndex + 1) % slides.length)

  return (
    <section className={styles.section} aria-label="Featured Kantar content">
      <Container variant="wide" className={styles.carousel}>
        <div className={styles.slide} key={slide.title}>
          <div className={styles.copy}>
            <Eyebrow tone={slide.eyebrowTone}>{slide.eyebrow}</Eyebrow>
            <h2 className={styles.title}>{slide.title} {slide.accent && <span>{slide.accent}</span>}</h2>
            <p className={styles.description}>{slide.description}</p>
            <ArrowLink tone={slide.tone === 'blue' ? 'blue' : 'lavender'}>{slide.cta}</ArrowLink>
            <div className={styles.controls} aria-label="Carousel controls">
              <button type="button" onClick={previous} aria-label="Previous slide">←</button>
              <span aria-hidden="true" />
              <button type="button" onClick={next} aria-label="Next slide">→</button>
            </div>
          </div>
          <Artwork tone={slide.tone} />
        </div>
      </Container>

      <Container variant="wide" className={styles.cardContainer}>
        <div className={styles.cards} role="tablist" aria-label="Featured content">
          {slides.map((item, index) => (
            <button key={item.category} type="button" role="tab" aria-selected={index === activeIndex} className={`${styles.card} ${index === activeIndex ? styles.active : ''}`} onClick={() => setActiveIndex(index)}>
              <span className={`${styles.category} ${styles[item.tone]}`}>{item.category}</span>
              <span className={styles.cardTitle}>{item.cardTitle}</span>
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}