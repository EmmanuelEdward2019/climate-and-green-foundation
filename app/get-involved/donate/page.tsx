import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import DonationForm from '@/components/donation/DonationForm'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support Climate & Green World Foundation. Every contribution funds the work directly.',
}

export default function DonatePage() {
  return (
    <>
      <PageHero
        tag="Donate"
        headline="Why Donate?"
        subheadline="By donating you equip us with tools and resources to plant trees,protect our environment, raise climate awareness in communities, restore degraded ecosystems, and empower communities to take action for a healthier, greener and more resilient future"
        image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-max max-w-4xl">
          <DonationForm />

          {/* Ethical commitment */}
          <div className="mt-7 p-5 rounded-xl bg-forest-green/5 border border-forest-green/20">
            <p className="font-garamond text-base text-text-secondary leading-relaxed">
              <strong className="font-semibold text-text-primary">Ethical Commitment:</strong>{' '}
              Climate and Green world foundation is committed to transparency, integrity and
              ethical fundraising. We adhere to ethical standards and international best practices
              to ensure that donations are properly utilised.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
