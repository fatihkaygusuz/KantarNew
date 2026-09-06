import { SiteHeader } from '../components/SiteHeader/SiteHeader'
import ColourFieldSection from '../sections/ColourField/ColourFieldSection'
import FeatureGridSection from '../sections/FeatureGrid/FeatureGridSection'
import GalleryStripSection from '../sections/GalleryStrip/GalleryStripSection'
import HomeCarouselSection from '../sections/HomeCarousel/HomeCarouselSection'
import IntelligenceSection from '../sections/Intelligence/IntelligenceSection'
import KantarScaleSection from '../sections/KantarScale/KantarScaleSection'
import SignalIntelligenceSection from '../sections/SignalIntelligence/SignalIntelligenceSection'
import ValuePropositionSection from '../sections/ValueProposition/ValuePropositionSection'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <ValuePropositionSection />
        <FeatureGridSection />
        <IntelligenceSection />
        <GalleryStripSection />
        <HomeCarouselSection />
        <ColourFieldSection />
        <SignalIntelligenceSection />
        <KantarScaleSection />
      </main>
    </>
  )
}