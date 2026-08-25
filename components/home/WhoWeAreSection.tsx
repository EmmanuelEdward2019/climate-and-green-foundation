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
              A foundation dedicated to turning climate awareness into climate action.
            </h2>
            <div className="space-y-4 body-md">
              <p>
                Climate Change is no longer a distant forecast. It&apos;s the shrinking harvest in
                the sahel, the polluted rivers in the Niger Delta, the burning heat in various
                houses and classrooms where our children are learning about a future their
                ecosystem may not support.
              </p>
              <p>Climate and Green world foundation exists to address these realities.</p>
              <p>
                We plant trees, We restore degraded lands and engage with communities, artisanal
                and farmers on the negative impacts of bush burning, charcoal production, crude and
                illegal refining of petroleum called (Oil bunkering) on our environment.
              </p>
              <p>
                Our founder spent years working as a lone voice in the wilderness on these issues,
                before Formalizing the foundation in 2026.
              </p>
              <p>
                Indeed, the vision is getting bigger, the numbers are growing larger and the
                enthusiasm is so palpable.
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
                  - Dr. Ike Anosike, Founder
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
