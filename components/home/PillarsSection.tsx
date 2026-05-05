'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sprout, Users, Thermometer } from 'lucide-react'

const pillars = [
  {
    id: 'land',
    icon: Sprout,
    tag: 'LAND',
    headline: 'Restoring what was lost. Defending what remains.',
    body: `Across Nigeria and the Sahel, decades of deforestation, oil pollution, illegal refining, and overgrazing have hollowed out landscapes that once supported abundant life. We work with communities, government agencies, and global partners to bring them back through tree-planting, urban greening, soil regeneration, and active defense against ongoing damage.`,
    cta: 'Explore our land work',
    href: '/programs/tree-planting',
    color: 'from-forest-green/5 to-lime-green/5',
    iconBg: 'bg-forest-green',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
  },
  {
    id: 'people',
    icon: Users,
    tag: 'PEOPLE',
    headline: 'Communities at the center.',
    body: `Environmental work that ignores people fails. We invest in the women, men, farmers, and young people who live on the land through climate education, awareness sensitization, and dialogue that take local livelihoods seriously — even when the conversation is difficult.`,
    cta: 'Explore our community work',
    href: '/programs/climate-education',
    color: 'from-lime-green/5 to-forest-green/5',
    iconBg: 'bg-lime-green',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80',
  },
  {
    id: 'climate',
    icon: Thermometer,
    tag: 'CLIMATE',
    headline: 'Action that cools the planet and holds the line.',
    body: `Every tree we plant, every hectare we restore, every farmer we move away from forest-burning practices is climate action that can be measured. We report what we do, what works, and what does not — because climate work without honesty is just marketing.`,
    cta: 'Explore our climate work',
    href: '/what-we-do',
    color: 'from-forest-green/5 to-lime-green/5',
    iconBg: 'bg-forest-green',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
  },
]

export default function PillarsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding bg-neutral-bg" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">
            <span className="w-4 h-0.5 bg-lime-green" />
            Our Framework
            <span className="w-4 h-0.5 bg-lime-green" />
          </span>
          <h2 className="heading-lg mt-4">Three pillars. One mission.</h2>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.id}
                className="pillar-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.6s ease ${i * 150}ms, transform 0.6s ease ${i * 150}ms`,
                }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.tag}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Tag */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 ${pillar.iconBg} text-white font-comfortaa font-bold text-xs uppercase tracking-widest rounded-full`}
                    >
                      <Icon size={12} />
                      {pillar.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="heading-sm mb-3">{pillar.headline}</h3>
                  <p className="font-garamond text-base text-text-secondary mb-5 leading-relaxed">
                    {pillar.body}
                  </p>
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 font-comfortaa font-semibold text-sm text-forest-green hover:text-lime-green transition-colors duration-200 group/link"
                  >
                    {pillar.cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
