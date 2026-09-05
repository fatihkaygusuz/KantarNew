import photoStrip from '../../legacy/imports/image-1.png'
import styles from './GalleryStripSection.module.css'

export default function GalleryStripSection() {
  return (
    <section className={styles.section} aria-label="Kantar people and places">
      <img className={styles.image} src={photoStrip} alt="" />
    </section>
  )
}