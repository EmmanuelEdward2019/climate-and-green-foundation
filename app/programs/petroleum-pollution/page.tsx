import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import EnvironmentalContentSections from '@/components/content/EnvironmentalContentSections'
import { CheckCircle } from 'lucide-react'
import { BUNKERING_IMAGES } from '@/lib/media'

export const metadata: Metadata = {
  title: 'Petroleum Pollution & Ecological Defense',
  description: 'Confronting the ecological damage of oil bunkering and illegal artisanal refining in Nigeria.',
}

const activities = [
  'Community sensitization on the ecological consequences of oil bunkering and illegal refining',
  'Engagement with farmers on the consequences of bush burning and charcoal production',
  'Partnerships with government and regulatory stakeholders on enforcement and rehabilitation',
  'Restoration work in petroleum-affected sites',
  'Research and documentation of pollution\'s ecological footprint',
]

export default function PetroleumPollutionPage() {
  return (
    <>
      <PageHero
        tag="Program 03"
        headline="The damage no one else is talking about."
        subheadline="This is the work that sets Climate & Green World Foundation apart."
        image={BUNKERING_IMAGES[0].src}
      />

      <section className="section-padding bg-white border-b border-section-divider">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Petroleum Pollution & Ecological Defense
              </span>
              <h2 className="heading-lg mt-4 mb-6 green-line">What it is.</h2>
              <div className="space-y-4 body-md mb-8">
                <p>
                  Across Nigeria, and especially in the Niger Delta, oil bunkering and illegal
                  artisanal refining are quietly poisoning soils, rivers, mangroves, and air at a
                  scale most environmental conversations refuse to confront. Add bush burning and
                  unregulated charcoal production, and you have a set of practices that is undoing
                  forest restoration faster than any planting program can keep up with.
                </p>
                <p>
                  We engage directly with this reality. Our work in this program is not extractive
                  enforcement — we are not police. We are educators, partners, and advocates. We
                  sit with farmers and community members. We explain what bush burning does to
                  topsoil, what charcoal kilns do to forest cover, and what illegal refining does
                  to water and lung health. We work with government and security stakeholders on
                  the policy side. And we offer concrete alternatives wherever we can.
                </p>
              </div>

              <h3 className="heading-sm mb-5">Key activities.</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                <p className="font-comfortaa text-xs text-lime-green uppercase tracking-widest mb-3">Our approach</p>
                <div className="space-y-3">
                  {[
                    'Education, not enforcement',
                    'Respect for economic reality',
                    'Concrete alternatives',
                    'Government partnership',
                    'Community co-design',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-green flex-shrink-0" />
                      <span className="font-garamond text-sm text-white/85">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-lime-green/10 rounded-2xl p-6 border border-lime-green/20">
                <h4 className="font-garamond font-semibold text-lg text-text-primary mb-3">
                  Government & Institutional Partners
                </h4>
                <p className="font-garamond text-sm text-text-secondary mb-4">
                  This program requires institutional partners. If your agency works in the Niger Delta or Sahel, we want to talk.
                </p>
                <Link href="/get-involved/government" className="btn-primary w-full text-center text-sm">
                  Start a conversation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnvironmentalContentSections variant="full" />
    </>
  )
}
