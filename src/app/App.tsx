import LegacyHome from '../legacy/LegacyHome'

/**
 * Migration shell.
 *
 * The homepage still renders legacy sections while they are migrated one-by-one.
 * New/rewritten sections live outside /legacy and consume generated KDS tokens.
 *
 * Current clean migration: IntelligenceSection.
 */
export default function App() {
  return <LegacyHome />
}
