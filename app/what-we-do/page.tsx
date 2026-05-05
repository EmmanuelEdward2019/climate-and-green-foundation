import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { ArrowRight, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What We Do',
  description: "Our approach to ecological restoration — five principles that shape every project.",
}

const principles = [
  {
    num: '01',
    title: 'Community before planting.',
    body: 'We do not break ground on a project until the community that will live with it has co-designed it, agreed to it, and taken ownership of it. Top-down projects fail; we have seen it, and we will not repeat it.',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&q=75',
  },
  {
    num: '02',
    title: 'The right tree in the right place.',
    body: 'Monoculture plantations are not forests. We plant native species in native configurations, guided by local ecology and traditional knowledge.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=75',
  },
  {
    num: '03',
    title: 'Restoration is bigger than reforestation.',
    body: 'Forests are only one kind of landscape. We also restore farmland, urban green spaces, and the ecosystems being eroded by petroleum pollution and unsafe land-use practices.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=75',
  },
  {
    num: '04',
    title: 'The conversation matters as much as the planting.',
    body: 'Bush burning, charcoal production, and oil bunkering are not abstractions — they are decisions made by real people under real economic pressure. Sensitization — done with respect, not lecture — is core to our work.',
    image: 'https://images.unsplash.com/photo-1578836537282-3171d77f8632?w=500&q=75',
  },
  {
    num: '05',
    title: 'Measured in decades, not seasons.',
    body: 'Our minimum project horizon is ten years. Anything shorter is landscaping.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=75',
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
        headline="Tree-planting is the easy part. Everything around it is the work."
        subheadline="Anyone can plant a tree. Making sure it is still alive in ten years — that is the work."
        image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="space-y-5 body-md">
            <p>
              Anyone can plant a tree. Making sure that tree is still alive in ten years, that the
              soil it sits in is healthier than it was, that the community around it benefits, and
              that the activities killing the surrounding ecosystem are being addressed in parallel —
              that is the work.
            </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

          <div className="bg-forest-green rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-garamond font-semibold text-xl text-white mb-2">
                Year-One Impact Report
              </h3>
              <p className="font-garamond text-white/75 text-base">
                Our first annual report will be published at the close of foundation year 2025.
              </p>
            </div>
            <button className="btn-secondary flex-shrink-0 flex items-center gap-2 opacity-60 cursor-not-allowed" disabled>
              <Download size={16} />
              Coming Soon
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
