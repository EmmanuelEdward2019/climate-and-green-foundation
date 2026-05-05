import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tree Planting & Landscape Restoration',
  description: 'Our flagship program restoring degraded land across Nigeria and the Sahel.',
}

const activities = [
  'Native species planting across degraded farmland and forest',
  'Community nursery development and management',
  'Soil preparation and organic matter restoration',
  'Long-term protection and monitoring of planted sites',
  'Support for community-managed green corridors',
  'Seedling survival tracking and gap-replanting',
]

export default function TreePlantingPage() {
  return (
    <>
      <PageHero
        tag="Program 01"
        headline="Bringing degraded land back to life."
        subheadline="Our flagship work. Reforestation that sticks, not the photo-op kind."
        image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Tree Planting & Landscape Restoration
              </span>
              <h2 className="heading-lg mt-4 mb-6 green-line">What it is.</h2>
              <div className="space-y-4 body-md mb-10">
                <p>
                  Across Nigeria and the Sahel, decades of deforestation, overgrazing, charcoal
                  production, and erosion have stripped landscapes that once supported abundant
                  life. Topsoil that took centuries to form is gone in a season of unsustainable
                  farming. Forests that once held water and cooled the land are now bare ground.
                </p>
                <p>
                  Our restoration work is not simply about planting trees. It is about bringing
                  back functional ecosystems — places where soil builds, water infiltrates, species
                  return, and communities have the green infrastructure they need to adapt to a
                  changing climate.
                </p>
                <p>
                  We plant native species in native configurations, guided by local ecology and
                  traditional knowledge. We work with community nurseries. We protect what we plant.
                  And we track every site until the restoration is self-sustaining.
                </p>
              </div>

              {/* Activities */}
              <h3 className="heading-sm mb-5">Key activities.</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {activities.map((activity) => (
                  <div key={activity} className="flex items-start gap-3 p-4 rounded-xl border border-border-color">
                    <CheckCircle size={16} className="text-lime-green flex-shrink-0 mt-0.5" />
                    <span className="font-garamond text-base text-text-secondary">{activity}</span>
                  </div>
                ))}
              </div>

              {/* Where it operates */}
              <div className="p-6 rounded-2xl bg-neutral-bg border border-border-color mb-8">
                <h3 className="font-garamond font-semibold text-lg text-text-primary mb-2">
                  Where we operate.
                </h3>
                <p className="font-garamond text-base text-text-secondary leading-relaxed">
                  Nigeria and the Sahel. Specific project site names to be confirmed. Our initial
                  site covers one hectare of degraded land currently under active restoration.
                </p>
              </div>
            </div>

            {/* Sidebar stats */}
            <div className="space-y-5">
              <div className="bg-forest-green rounded-2xl p-6 text-white">
                <p className="font-comfortaa text-xs text-lime-green uppercase tracking-widest mb-4">
                  Year One Progress
                </p>
                <div className="space-y-4">
                  {[
                    { value: '600', label: 'Trees planted' },
                    { value: '1', label: 'Hectare under restoration' },
                    { value: '10', label: 'Team members' },
                  ].map((stat) => (
                    <div key={stat.label} className="border-b border-white/15 pb-4 last:border-0 last:pb-0">
                      <p className="font-garamond font-semibold text-3xl text-lime-green">{stat.value}</p>
                      <p className="font-comfortaa text-xs text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-bg rounded-2xl p-6 border border-border-color">
                <p className="font-comfortaa text-xs text-forest-green uppercase tracking-widest mb-4">
                  2030 Goal
                </p>
                <div className="space-y-4">
                  {[
                    { value: '1M+', label: 'Trees in the ground' },
                    { value: '5,000', label: 'Hectares under management' },
                  ].map((stat) => (
                    <div key={stat.label} className="border-b border-border-color pb-4 last:border-0 last:pb-0">
                      <p className="font-garamond font-semibold text-3xl text-forest-green">{stat.value}</p>
                      <p className="font-comfortaa text-xs text-text-secondary">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-lime-green/10 rounded-2xl p-6 border border-lime-green/20">
                <h4 className="font-garamond font-semibold text-lg text-text-primary mb-3">
                  Partner with this program.
                </h4>
                <p className="font-garamond text-sm text-text-secondary mb-4">
                  Support this work through a corporate or institutional partnership with measurable outcomes.
                </p>
                <Link href="/get-involved/corporate" className="btn-primary w-full text-center flex items-center justify-center gap-2 text-sm">
                  Get involved <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
