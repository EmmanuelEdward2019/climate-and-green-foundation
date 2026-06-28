'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BUNKERING_IMAGES } from '@/lib/media'

export default function WhoWeAreSection() {
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              Who We Are
            </span>
            <h2 className="heading-lg mb-6 green-line">
              A foundation born of one truth: Africa's ecosystems will not save themselves.
            </h2>
            <div className="space-y-4 body-md">
              <p>
                Climate change is not a distant forecast for the communities we work with. It is
                the shrinking harvest in the Sahel. It is the river in the Niger Delta that runs
                black instead of clear. It is the heat building in classrooms, where children are
                trying to learn about a future their landscape may not support.
              </p>
              <p>
                The Climate & Green World Foundation exists to confront that reality — practically,
                locally, and patiently. We plant trees. We restore degraded land. We make the case
                to farmers, communities, and government partners that bush burning, charcoal
                production, oil bunkering, and illegal artisanal refining are not survival
                strategies but slow-acting wounds.
              </p>
              <p>
                We are new. Our founder spent years working as a lone voice on these issues before
                formalizing the foundation in 2025. The vision is bigger than the numbers. The
                numbers are growing every season.
              </p>
            </div>
            <Link
              href="/about/story"
              className="inline-flex items-center gap-2 mt-8 font-comfortaa font-semibold text-sm text-forest-green hover:text-lime-green transition-colors duration-200 group"
            >
              Read our story
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right: Image + accent */}
          <div
            className="relative overflow-hidden sm:overflow-visible"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={BUNKERING_IMAGES[4].src}
                alt="Environmental restoration field work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Quote card overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <p className="font-garamond italic text-base text-text-primary mb-2">
                  "The institution is new; the conviction is not."
                </p>
                <p className="font-comfortaa font-semibold text-xs text-forest-green">
                  — Dr. Ike Anosike, Founder
                </p>
              </div>
            </div>

            {/* Green accent block */}
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-lime-green/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-5 -left-5 w-36 h-36 bg-forest-green/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
