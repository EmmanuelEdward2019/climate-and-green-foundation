import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import EnvironmentalContentSections from '@/components/content/EnvironmentalContentSections'
import { ArrowRight } from 'lucide-react'
import { focus } from '@/lib/imageFocus'

export const metadata: Metadata = {
  title: 'What We Do',
  description: "Our approach to ecological restoration - five principles that shape every project.",
}

const principles = [
  {
    num: '01',
    title: 'Community before planning.',
    body: "We ensure that every project has the blessings of the community it's designed for, before implementation. They have to cosign with it, agree on modalities and take ownership of it.",
    image: '/images/environment-week-group-1.png',
  },
  {
    num: '02',
    title: 'The right tree in the right place.',
    body: 'We plant native and economic species as guided by local ecology and traditional knowledge.',
    image: '/images/tree-planting-welcome.png',
  },
  {
    num: '03',
    title: 'From Restoration to Reforestation.',
    body: 'We restore degraded farmland, urban green spaces and the ecosystems eroded by pollution and unwholesome land practices.',
    image: '/images/environment-week-group-2.png',
  },
  {
    num: '04',
    title: 'Bush Burning.',
    body: 'Sensitization done with diplomacy and conviction for maximum effects is core to our work.',
    image: '/images/environmental-preservation-2.png',
  },
  {
    num: '05',
    title: 'Measured impact.',
    body: "It's one of our core values. To seasonally measure progress and impact of the work we have done. The result is our satisfaction.",
    image: '/images/Bunkering 3-1.webp',
  },
]

const indicators = [
  { title: 'Tree & Biomass Growth', desc: 'Survival rates, canopy development, above-ground biomass', icon: '🌳' },
  { title: 'Carbon Impact', desc: 'Tonnes of CO₂eq drawn down or avoided, against baselines', icon: '💨' },
  { title: 'Biodiversity Return', desc: 'Species presence surveys, wildlife monitoring, habitat quality', icon: '🦋' },
  { title: 'Soil & Water Health', desc: 'Soil organic carbon, water table recovery, erosion reduction', icon: '🌊' },
  { title: 'Community Outcomes', desc: 'Household incomes, sensitization reach, women in leadership', icon: '👥' },
  { title: 'Program Integrity', desc: 'Cost per surviving tree, per hectare, funds to community', icon: '📊' },
]

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        tag="What We Do"
        headline={
          <>
            We Engage.
            <br />
            We Restore.
            <br />
            We Regrow.
            <br />
            We Monitor.
            <br />
            We Measure.
          </>
        }
        image="/images/tree-planting-welcome.png"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="space-y-5 body-md">
            <p>
              Climate & Green World Foundation runs four interlocking programs across Nigeria and
              the Sahel. Each one is designed to keep delivering benefit long after our direct
              involvement ends.
            </p>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 mt-8 btn-primary"
          >
            See our programs <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Bunkering, charcoal production and deforestation - moved from the homepage */}
      <EnvironmentalContentSections variant="full" />

      {/* Our Approach */}
      <section id="approach" className="section-padding bg-neutral-bg">
        <div className="container-max">
          <div className="mb-14">
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              Our Approach
            </span>
            <h2 className="heading-lg mt-4">Five principles that shape every project.</h2>
          </div>

          {/* Alternating image + text layout for principles */}
          <div className="space-y-6">
            {principles.map((p, i) => (
              <div
                key={p.num}
                className={`flex flex-col sm:flex-row gap-0 rounded-2xl border border-border-color overflow-hidden hover:border-lime-green hover:shadow-md transition-all duration-300 ${
                  i % 2 === 1 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Image side */}
                <div className="relative w-full sm:w-48 flex-shrink-0 overflow-hidden" style={{ minHeight: '140px' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover absolute inset-0"
                    style={{ objectPosition: focus(p.image) }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-forest-green/60 to-transparent" />
                  <span className="absolute top-4 left-4 font-garamond font-bold text-4xl text-white/30">
                    {p.num}
                  </span>
                </div>
                {/* Text side */}
                <div className="flex-1 p-6 bg-white flex flex-col justify-center">
                  <h3 className="font-garamond font-bold text-xl text-text-primary mb-2">
                    {p.title}
                  </h3>
                  <p className="font-garamond text-base text-text-secondary leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact measurement */}
      <section id="impact" className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-14">
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              Impact Measurement
            </span>
            <h2 className="heading-lg mt-4 mb-4">What gets measured gets managed.</h2>
            <p className="body-md max-w-2xl">
              We track every project against a common set of indicators and report on them
              annually. Our framework is built on FAO methodology, IPCC guidance, and AFR100
              reporting protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {indicators.map((ind) => (
              <div
                key={ind.title}
                className="p-6 rounded-2xl border border-border-color hover:border-forest-green hover:shadow-sm transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{ind.icon}</span>
                <h3 className="font-garamond font-semibold text-lg text-text-primary mb-2">
                  {ind.title}
                </h3>
                <p className="font-garamond text-sm text-text-secondary leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
