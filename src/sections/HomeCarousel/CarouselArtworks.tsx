import { useEffect, useState } from 'react'
import insightPhoto from '../../assets/carousel/insight-spotlight.png'
import styles from './CarouselArtworks.module.css'

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
  return <div className={styles.slide01} aria-hidden="true"><div className={styles.buildings}><span /><span /><span /></div><div className={styles.date}><span>Nov</span><strong><Count target={23} /></strong><small>insights shaping smarter energy decisions</small></div><Dots className={styles.slide01Dots} /><span className={styles.slide01Bar} /></div>
}

export function Slide02Artwork() {
  return <div className={styles.slide02} aria-hidden="true"><div className={styles.stat}><strong><Count target={78} /></strong><b>%</b><span>say recommendations from people they trust influence their decisions.</span></div><div className={styles.photo}><img src={insightPhoto} alt="" /></div><div className={styles.splitBlocks}><span /><span /></div></div>
}

export function Slide03Artwork() {
  return <div className={styles.slide03} aria-hidden="true"><div className={styles.giant}><strong><Count target={85} /></strong><b>%</b></div><div className={styles.referrals}>of Students Joined<br /><span>through Referrals</span></div><Dots className={styles.slide03Dots} /><div className={styles.strip}><span /><span /><span /></div><span className={styles.purpleSquare} /></div>
}

export function Slide04Artwork() {
  return <div className={styles.slide04} aria-hidden="true"><div className={styles.iqMask}><span /><span /><span /><span /><span /></div><strong>IQ</strong></div>
}