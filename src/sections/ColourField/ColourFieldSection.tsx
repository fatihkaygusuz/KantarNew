import colourField from '../../assets/images/colour-field.png'
import styles from './ColourFieldSection.module.css'

export default function ColourFieldSection() {
  return (
    <section className={styles.section} aria-label="Kantar colour field">
      <img className={styles.image} src={colourField} alt="" />
    </section>
  )
}