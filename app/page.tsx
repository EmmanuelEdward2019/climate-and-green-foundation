import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import YearOneSection from '@/components/home/YearOneSection'
import WhoWeAreSection from '@/components/home/WhoWeAreSection'
import EnvironmentalContentSections from '@/components/content/EnvironmentalContentSections'
import PillarsSection from '@/components/home/PillarsSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import FieldGallerySection from '@/components/home/FieldGallerySection'
import WhereWeWorkSection from '@/components/home/WhereWeWorkSection'
import FromTheFieldSection from '@/components/home/FromTheFieldSection'
import PartnersSection from '@/components/home/PartnersSection'
import FinalCTASection from '@/components/home/FinalCTASection'

export const metadata: Metadata = {
  title: 'Rooted in Africa. Growing a Greener World.',
  description:
    'Climate & Green World Foundation restores degraded landscapes, defends ecosystems from pollution, and equips communities to thrive in a changing climate - in Nigeria and the Sahel.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Who we are sits immediately after the introductory header, then Our Numbers */}
      <WhoWeAreSection />
      {/* What we do: bunkering, charcoal production and deforestation */}
      <EnvironmentalContentSections variant="home" />
      <YearOneSection />
      <PillarsSection />
      <WhyUsSection />
      <FieldGallerySection />
      <WhereWeWorkSection />
      <FromTheFieldSection />
      <PartnersSection />
      <FinalCTASection />
    </>
  )
}
