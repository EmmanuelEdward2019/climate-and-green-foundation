import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { ArrowRight, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Progress',
  description: 'Honest Year-One numbers and where we are heading by 2027 and 2030.',
}

const yearOneNumbers = [
  { value: '600', label: 'Trees planted', note: 'Native species in active restoration' },
  { value: '1', label: 'Hectare under restoration', note: 'Under active management and monitoring' },
  { value: '10', label: 'People employed', note: 'Full-time team members across all programs' },
]

const goals2027 = [
  { label: 'Trees planted', value: '[X]' },
  { label: 'Hectares under restoration', value: '[X]' },
  { label: 'People employed', value: '[X]' },
  { label: 'Communities reached', value: '[X]' },
  { label: 'First annual independent impact audit', value: '✓' },
]

const goals2030 = [
  { label: 'Trees planted', value: '[X]' },
  { label: 'Hectares under restoration', value: '[X]' },
  { label: 'Countries with established presence', value: '[#]' },
  { label: 'Schools running our curriculum', value: '[X]' },
  { label: 'Founding member status in continental network', value: '✓' },
]

export default function ProgressPage() {
  return (
    <>
      <PageHero
        tag="Our Progress"
        headline="Where we are. Honestly."
        subheadline="We are not going to pretend the numbers are bigger than they are. Every tree we report is a tree in the ground."
        image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
      />

      {/* Year One */}
      <section id="year-one" className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-14">
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              Year One So Far
            </span>
            <h2 className="heading-lg mt-4 mb-4">Our starting line.</h2>
            <p className="body-md max-w-2xl">
              We are in our foundation year. This is where we are, as it stands, with no
              rounding up and no wishful thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {yearOneNumbers.map((item, i) => (
              <div
                key={item.label}
                className="relative p-8 rounded-2xl bg-forest-green text-white overflow-hidden"
              >
                {/* Number background */}
                <span className="absolute top-4 right-4 font-garamond font-semibold text-6xl text-white/5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-garamond font-semibold text-5xl text-lime-green mb-2">
                  {item.value}
                </p>
                <h3 className="font-garamond font-semibold text-xl text-white mb-2">
                  {item.label}
                </h3>
                <p className="font-garamond text-sm text-white/65">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="bg-neutral-bg rounded-2xl border border-border-color p-8 max-w-2xl">
            <p className="font-garamond italic text-lg text-text-secondary leading-relaxed">
              "This is our starting line. The plan is to multiply it. Every number here is real.
              Every projection is based on what we know, not what we hope."
            </p>
            <p className="font-comfortaa font-semibold text-sm text-forest-green mt-4">
              — Dr. Ike Anosike, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Parallax image divider */}
      <div
        className="relative h-56 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-forest-green/65" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <p className="font-garamond italic text-white text-xl md:text-2xl mb-2">
              "This is our starting line. The plan is to multiply it."
            </p>
            <span className="font-comfortaa text-xs text-lime-green uppercase tracking-widest">
              — Dr. Ike Anosike, Founder
            </span>
          </div>
        </div>
      </div>

      {/* Where We're Going */}
      <section id="goals" className="section-padding bg-neutral-bg">
        <div className="container-max">
          <div className="mb-14">
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              Where We're Going
            </span>
            <h2 className="heading-lg mt-4 mb-4">The curve we are climbing.</h2>
            <p className="body-md max-w-2xl">
              A foundation that does not say where it is heading is asking partners to fund a
              guess. Here is where we are heading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 2027 */}
            <div className="bg-white rounded-2xl border border-border-color overflow-hidden">
              <div className="bg-forest-green px-6 py-4 flex items-center gap-3">
                <Target size={18} className="text-lime-green" />
                <h3 className="font-garamond font-semibold text-xl text-white">By 2027</h3>
                <span className="font-comfortaa text-xs text-white/60 ml-auto">3-year goal</span>
              </div>
              <div className="p-6 space-y-4">
                {goals2027.map((goal) => (
                  <div key={goal.label} className="flex items-center justify-between py-2 border-b border-border-color last:border-0">
                    <span className="font-garamond text-base text-text-secondary">{goal.label}</span>
                    <span className="font-garamond font-semibold text-lg text-forest-green">
                      {goal.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2030 */}
            <div className="bg-white rounded-2xl border border-lime-green overflow-hidden">
              <div className="bg-lime-green px-6 py-4 flex items-center gap-3">
                <Target size={18} className="text-white" />
                <h3 className="font-garamond font-semibold text-xl text-white">By 2030</h3>
                <span className="font-comfortaa text-xs text-white/80 ml-auto">5-year goal</span>
              </div>
              <div className="p-6 space-y-4">
                {goals2030.map((goal) => (
                  <div key={goal.label} className="flex items-center justify-between py-2 border-b border-border-color last:border-0">
                    <span className="font-garamond text-base text-text-secondary">{goal.label}</span>
                    <span className="font-garamond font-semibold text-lg text-lime-green">
                      {goal.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="font-garamond text-base text-text-secondary italic mb-6">
              These targets are public on purpose. We expect to be held to them.
            </p>
            <Link href="/get-involved" className="btn-primary inline-flex items-center gap-2">
              Help us get there <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
