import type { Metadata } from 'next'
import Link from 'next/link'
import ProgramsCarousel from '@/components/ui/ProgramsCarousel'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Programs',
  description: 'Four interlocking programs addressing the climate challenge across Nigeria and the Sahel.',
}

const programs = [
  {
    num: '01',
    tag: 'Flagship Program',
    title: 'Tree Planting & Landscape Restoration',
    tagline: 'Bringing degraded land back to life.',
    body: 'We plant native species, restore degraded farmland and forest, support community nurseries, and protect what we plant for the long term. Reforestation that sticks, not the photo-op kind.',
    stats: [
      { value: '600', label: 'Trees planted' },
      { value: '1 ha', label: 'Under restoration' },
    ],
    href: '/programs/tree-planting',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    color: 'border-forest-green',
  },
  {
    num: '02',
    tag: 'Urban Program',
    title: 'Urban Greening',
    tagline: 'A cooler, greener city is built tree by tree.',
    body: "Many of Africa's fastest-growing cities are losing green cover at exactly the moment they need it most. We work with municipal partners, schools, and community associations to plant and protect urban trees and restore public green spaces.",
    stats: [],
    href: '/programs/urban-greening',
    image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80',
    color: 'border-lime-green',
  },
  {
    num: '03',
    tag: 'Signature Program',
    title: 'Petroleum Pollution & Ecological Defense',
    tagline: 'The damage no one else is talking about.',
    body: 'Across Nigeria, oil bunkering and illegal artisanal refining are quietly poisoning soils, rivers, and mangroves. We engage directly — educating communities, partnering with government, and restoring petroleum-affected sites.',
    stats: [],
    href: '/programs/petroleum-pollution',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    color: 'border-forest-green',
  },
  {
    num: '04',
    tag: 'Education Program',
    title: 'Climate Education & Community Awareness',
    tagline: 'A generation that will not look away.',
    body: 'Climate literacy in schools, sensitization campaigns in communities, and advocacy with policy-makers. The landscapes we restore today will be inherited by the children sitting in classrooms right now.',
    stats: [],
    href: '/programs/climate-education',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
    color: 'border-lime-green',
  },
]

export default function ProgramsPage() {
  return (
    <>
      {/* Full-bleed rotating carousel replaces static PageHero */}
      <ProgramsCarousel />

      {/* Intro band */}
      <div className="bg-forest-green py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-comfortaa font-bold text-xs uppercase tracking-widest text-lime-green block mb-1">Our Programs</span>
            <h1 className="font-garamond font-bold text-white text-2xl md:text-3xl">Four programs. One ecology.</h1>
          </div>
          <p className="font-garamond text-white/75 text-base max-w-md leading-relaxed">
            Locally led, rigorously measured, designed to outlast us.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-8">
            {programs.map((program, i) => (
              <div
                key={program.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border ${program.color} border-l-4 shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                {/* Image - alternates sides */}
                <div className={`relative h-64 lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="font-garamond font-semibold text-5xl text-white/20">
                      {program.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-10 bg-white ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-lime-green/10 text-forest-green rounded-full font-comfortaa font-semibold text-xs mb-4">
                    {program.tag}
                  </span>
                  <h2 className="heading-md mb-2">{program.title}</h2>
                  <p className="font-garamond italic text-lg text-forest-green mb-4">{program.tagline}</p>
                  <p className="font-garamond text-base text-text-secondary leading-relaxed mb-6">
                    {program.body}
                  </p>

                  {program.stats.length > 0 && (
                    <div className="flex gap-6 mb-6 pt-4 border-t border-border-color">
                      {program.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="font-garamond font-semibold text-2xl text-forest-green">{stat.value}</p>
                          <p className="font-comfortaa text-xs text-text-secondary">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-2 font-comfortaa font-semibold text-sm text-forest-green hover:text-lime-green transition-colors duration-200 group"
                  >
                    Learn more about this program
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
