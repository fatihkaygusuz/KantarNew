import { useEffect, useState } from 'react'
import insightPhoto from '../../assets/carousel/slide-02/insight-spotlight.png'
import styles from './CarouselArtworks.module.css'

const maskPath = 'M1083 0L1083 817.69H0L1083 0Z'
const centerPanelPath = 'M460.961 416.677L613.472 486.677V834.921H460.961V416.677Z'

function Count({ target }: { target: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let frame = 0
    const tick = (time: number) => {
      const progress = Math.min((time - start) / 900, 1)
      setValue(Math.round((1 - (1 - progress) ** 3) * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target])

  return <>{value}</>
}

function Dots({ className }: { className: string }) {
  return <span className={`${styles.dots} ${className}`} aria-hidden="true" />
}

export function Slide01Artwork() {
  return (
    <div className={styles.slide01} aria-hidden="true">
      <div className={styles.buildings}><span /><span /><span /></div>
      <div className={styles.date}>
        <span>Nov</span>
        <strong><Count target={23} /></strong>
        <small>insights shaping smarter energy decisions</small>
      </div>
      <Dots className={styles.slide01Dots} />
      <span className={styles.slide01Bar} />
    </div>
  )
}

export function Slide02Artwork() {
  return (
    <div className={styles.slide02} aria-hidden="true">
      <div className={styles.stat}>
        <strong><Count target={78} /></strong>
        <b>%</b>
        <span>say recommendations from people they trust influence their decisions.</span>
      </div>
      <div className={styles.photo}><img src={insightPhoto} alt="" /></div>
      <article className={styles.articleCard}>
        <small>ARTICLE</small>
        <strong>The new rules of influence</strong>
        <span>Why relevance, authenticity and trust matter more than ever.</span>
      </article>
      <div className={styles.splitBlocks}><span /><span /><span /></div>
    </div>
  )
}

export function Slide03Artwork() {
  return (
    <div className={styles.slide03} aria-hidden="true">
      <div className={styles.giant}><strong><Count target={85} /></strong><b>%</b></div>
      <div className={styles.referrals}>of influence decisions are shaped by<br /><span>trusted voices</span></div>
      <Dots className={styles.slide03Dots} />
      <div className={styles.strip}><span /><span /><span /></div>
      <span className={styles.purpleSquare} />
      <span className={styles.greenBar} />
      <span className={styles.blueBar} />
    </div>
  )
}

export function Slide04Artwork() {
  return (
    <div className={styles.slide04} aria-hidden="true">
      <svg className={styles.maskSvg} viewBox="0 0 1083 818" preserveAspectRatio="xMidYMid meet">
        <defs>
          <mask id="slide04Mask"><path d={maskPath} fill="white" /></mask>
          <linearGradient id="slide04Tall" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="var(--kds-blue-400)" stopOpacity="0.8" />
            <stop offset="0.49" stopColor="var(--kds-lavender-600)" stopOpacity="0.8" />
            <stop offset="1" stopColor="var(--kds-orange-400)" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="slide04Soft" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="var(--kds-blue-400)" stopOpacity="0.4" />
            <stop offset="1" stopColor="var(--kds-lavender-600)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <g mask="url(#slide04Mask)">
          <rect x="850" y="0" width="233" height="835" fill="url(#slide04Tall)" />
          <rect x="697" y="655" width="153" height="180" fill="url(#slide04Soft)" />
          <path d={centerPanelPath} fill="url(#slide04Soft)" />
          <rect x="0" y="468" width="461" height="367" fill="var(--kds-brand-tint-blue-20)" />
          <rect x="613" y="589" width="84" height="246" fill="url(#slide04Soft)" />
        </g>
      </svg>
      <strong>IQ</strong>
    </div>
  )
}