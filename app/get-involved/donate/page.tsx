import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import DonationForm from '@/components/donation/DonationForm'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support Climate & Green World Foundation. Every contribution funds the work directly.',
}

const giftLevels = [
  {
    amount: 5000,
    label: '₦5,000',
    impact: 'Plants and protects native saplings for three years',
    recommended: false,
  },
  {
    amount: 15000,
    label: '₦15,000',
    impact: 'Funds one community sensitization session',
    recommended: false,
  },
  {
    amount: 50000,
    label: '₦50,000',
    impact: 'Trains one young climate ambassador for a year',
    recommended: true,
  },
  {
    amount: 500000,
    label: '₦500,000',
    impact: 'Supports one hectare of restored land from planting to maturity',
    recommended: false,
  },
]

export default function DonatePage() {
  return (
    <>
      <PageHero
        tag="Donate"
        headline="Small gift. Real ground."
        subheadline="Every contribution funds the work directly — the planting, the protection, the sensitization, the team that makes it real."
        image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-max max-w-4xl">
          <DonationForm giftLevels={giftLevels} />

          {/* Transparency note */}
          <div className="mt-7 p-5 rounded-xl bg-forest-green/5 border border-forest-green/20">
            <p className="font-garamond text-base text-text-secondary leading-relaxed">
              <strong className="font-semibold text-text-primary">Where your money goes.</strong>{' '}
              A minimum of [XX%] of every donation goes directly to on-the-ground program delivery.
              The remainder covers the essentials of running a transparent organization —
              monitoring, reporting, and the staff who make the field work possible. We publish
              full financial reports annually.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
