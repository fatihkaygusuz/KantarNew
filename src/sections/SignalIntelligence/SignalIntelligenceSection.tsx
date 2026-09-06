import { Container } from '../../components/Container/Container'
import styles from './SignalIntelligenceSection.module.css'

function SignalCollage() {
  return (
    <div className={styles.signalCollage} aria-hidden="true">
      <span className={styles.signalPanel} />
      <span className={styles.signalGradient} />
      <span className={styles.signalBlue} />
      <span className={styles.signalOrange} />
      <span className={styles.signalLavender} />
    </div>
  )
}

function DecisionCollage() {
  return (
    <div className={styles.decisionCollage} aria-hidden="true">
      <span className={styles.decisionPanel} />
      <span className={styles.decisionBlue} />
      <span className={styles.decisionLavender} />
      <span className={styles.decisionGradient} />
      <span className={styles.decisionOrange} />
    </div>
  )
}

export default function SignalIntelligenceSection() {
  return (
    <section className={styles.section} aria-labelledby="signal-intelligence-heading">
      <Container variant="wide" className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.primaryColumn}>
            <div>
              <p className={styles.eyebrow}>SIGNAL INTELLIGENCE</p>
              <SignalCollage />
            </div>

            <h2 id="signal-intelligence-heading" className={styles.title}>
              <span>See <strong>the signals.</strong></span>
              <span>Shape what</span>
              <span>happens <strong>next.</strong></span>
            </h2>

            <p className={styles.description}>
              We connect changing behaviour, market movement and brand meaning so teams can act earlier and with more confidence.
            </p>
          </div>

          <div className={styles.secondaryColumn}>
            <p className={styles.supportingCopy}>
              Intelligence becomes more useful when it is clear, connected and close enough to action. Our approach turns fragmented signals into decisions that move brands forward.
            </p>
            <DecisionCollage />
          </div>
        </div>
      </Container>
    </section>
  )
}