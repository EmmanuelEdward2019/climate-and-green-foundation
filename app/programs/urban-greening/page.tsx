import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Urban Greening',
  description: 'Bringing nature back into African cities, tree by tree.',
}

const activities = [
  'Street and roadside tree-planting in partnership with municipal authorities',
  'School and community-grounds greening projects',
  'Urban nursery development and management',
  'Public-space restoration with local government',
  'Green infrastructure planning and advocacy',
  'Maintenance and survival tracking of urban plantings',
]

export default function UrbanGreeningPage() {
  return (
    <>
      <PageHero
        tag="Program 02"
        headline="A cooler, greener city is built tree by tree."
        subheadline="Many of Africa's fastest-growing cities are losing green cover at exactly the moment they need it most."
        image="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1920&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Urban Greening
              </span>
              <h2 className="heading-lg mt-4 mb-6 green-line">What it is.</h2>
              <div className="space-y-4 body-md mb-10">
                <p>
                  Lagos is adding a million people every year. Abuja is growing. Kano is growing.
                  And as they grow, they are losing the trees, parks, and green corridors that keep
                  cities livable — that cool streets, clean air, absorb rain, and give people somewhere
                  to breathe.
                </p>
                <p>
                  Urban greening is climate action. A well-planted boulevard reduces the urban heat
                  island effect. A school with tree cover improves learning outcomes in the hottest
                  months. A community park is not an amenity; it is infrastructure.
                </p>
                <p>
                  We work with municipal governments, schools, and community associations to plant
                  and protect urban trees, restore public green spaces, and build the case — with
                  mayors, council members, and ministries — that nature belongs in the city.
                </p>
              </div>

              <h3 className="heading-sm mb-5">Key activities.</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {activities.map((activity) => (
                  <div key={activity} className="flex items-start gap-3 p-4 rounded-xl border border-border-color">
                    <CheckCircle size={16} className="text-lime-green flex-shrink-0 mt-0.5" />
                    <span className="font-garamond text-base text-text-secondary">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-forest-green rounded-2xl p-6 text-white">
                <p className="font-comfortaa text-xs text-lime-green uppercase tracking-widest mb-3">Program Status</p>
                <p className="font-garamond font-semibold text-lg text-white mb-2">In development.</p>
                <p className="font-garamond text-sm text-white/70 leading-relaxed">
                  Urban greening partnerships are being scoped for the 2025–2026 season. Municipal
                  engagements are underway.
                </p>
              </div>

              <div className="bg-lime-green/10 rounded-2xl p-6 border border-lime-green/20">
                <h4 className="font-garamond font-semibold text-lg text-text-primary mb-3">
                  Is your city a fit?
                </h4>
                <p className="font-garamond text-sm text-text-secondary mb-4">
                  Municipal and corporate partners interested in urban greening initiatives — we want to hear from you.
                </p>
                <Link href="/contact" className="btn-primary w-full text-center flex items-center justify-center gap-2 text-sm">
                  Get in touch <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
