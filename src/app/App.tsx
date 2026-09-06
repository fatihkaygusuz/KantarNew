import HomePage from './HomePage'
import LegacyHome from '../legacy/LegacyHome'

export default function App() {
  return new URLSearchParams(window.location.search).get('clean') === '1'
    ? <HomePage />
    : <LegacyHome />
}
