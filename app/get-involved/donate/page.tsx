import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support Climate & Green World Foundation. Every contribution funds the work directly.',
}

const giftLevels = [
  {
    amount: '₦5,000 / $5',
    impact: 'Plants and protects native saplings for three years',
    recommended: false,
  },
  {
    amount: '₦15,000 / $15',
    impact: 'Funds one community sensitization session',
    recommended: false,
  },
  {
    amount: '₦50,000 / $50',
    impact: 'Trains one young climate ambassador for a year',
    recommended: true,
  },
  {
    amount: '₦500,000 / $500',
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

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          {/* Gift levels */}
          <div className="mb-14">
            <h2 className="heading-lg mb-8 text-center">Choose your impact.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {giftLevels.map((level) => (
                <button
                  key={level.amount}
                  className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-200 hover:shadow-md group ${
                    level.recommended
                      ? 'border-lime-green bg-lime-green/5'
                      : 'border-border-color hover:border-forest-green'
                  }`}
                >
                  {level.recommended && (
                    <span className="absolute top-3 right-3 bg-lime-green text-white font-comfortaa font-semibold text-xs px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                  <p className="font-garamond font-semibold text-2xl text-text-primary mb-1">
                    {level.amount}
                  </p>
                  <p className="font-garamond text-base text-text-secondary">{level.impact}</p>
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="p-6 rounded-2xl border border-border-color">
              <p className="font-garamond font-semibold text-lg text-text-primary mb-3">
                Custom amount
              </p>
              <div className="flex gap-3">
                <div className="flex-1">
                  <input
                    type="number"
                    className="input-field"
                    placeholder="Enter amount in ₦ or $"
                    min="1"
                  />
                </div>
                <button className="btn-primary flex-shrink-0">Set amount</button>
              </div>
              <p className="font-garamond text-sm text-text-secondary mt-2 italic">
                Whatever you can give, we will put to work.
              </p>
            </div>
          </div>

          {/* Giving options */}
          <div className="mb-14">
            <h2 className="heading-md mb-6">Ways to give.</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'One-time donation', desc: 'Give once' },
                { label: 'Monthly giving', desc: 'Sustain the work' },
                { label: 'Tribute gift', desc: 'In honour or in memory' },
                { label: 'Corporate matching', desc: 'Double your impact' },
              ].map((option) => (
                <div
                  key={option.label}
                  className="p-4 rounded-xl border border-border-color hover:border-forest-green hover:shadow-sm transition-all duration-200 cursor-pointer text-center"
                >
                  <p className="font-garamond font-semibold text-base text-text-primary mb-1">
                    {option.label}
                  </p>
                  <p className="font-comfortaa text-xs text-text-secondary">{option.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment placeholder */}
          <div className="bg-neutral-bg rounded-2xl border border-dashed border-forest-green/30 p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-forest-green/10 flex items-center justify-center mx-auto mb-5">
              <Heart size={28} className="text-forest-green" />
            </div>
            <h3 className="font-garamond font-semibold text-2xl text-text-primary mb-3">
              Payment processing coming soon.
            </h3>
            <p className="font-garamond text-base text-text-secondary max-w-md mx-auto mb-6">
              We are finalizing our donation processor (Flutterwave, Paystack, or Stripe). In the
              meantime, please reach out directly.
            </p>
            <a
              href="mailto:hello@climategreenworld.org?subject=Donation Enquiry"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Heart size={16} />
              Contact us to donate
            </a>
          </div>

          {/* Transparency note */}
          <div className="mt-10 p-6 rounded-xl bg-forest-green/5 border border-forest-green/20">
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
