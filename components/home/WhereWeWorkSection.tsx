'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

/* Load the Leaflet map only on the client — it uses window APIs */
const MapLeaflet = dynamic(() => import('@/components/ui/MapLeaflet'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[420px] rounded-2xl bg-neutral-bg border border-border-color flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-forest-green border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="font-comfortaa text-sm text-text-secondary">Loading map…</p>
      </div>
    </div>
  ),
})

export default function WhereWeWorkSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Real interactive map */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            {/* Map container with shadow/border frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border-color" style={{ height: '460px' }}>
              <MapLeaflet />
            </div>

            {/* Legend floating below */}
            <div className="flex items-center justify-center gap-6 mt-4 px-4 py-3 bg-white rounded-xl border border-border-color shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-forest-green border-2 border-white shadow-sm" />
                <span className="font-comfortaa text-xs font-semibold text-text-secondary">Nigeria — active sites</span>
              </div>
              <div className="w-px h-4 bg-border-color" />
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-lime-green border-2 border-white shadow-sm" />
                <span className="font-comfortaa text-xs font-semibold text-text-secondary">Sahel region</span>
              </div>
              <div className="w-px h-4 bg-border-color" />
              <span className="font-comfortaa text-xs text-text-secondary italic">Click markers for details</span>
            </div>
          </div>

          {/* Right: Text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              Where We Work
            </span>
            <h2 className="heading-lg mt-4 mb-6 green-line">
              On the ground where it counts.
            </h2>

            <p className="body-md mb-6">
              Our programs operate across two of Africa's most ecologically pressured regions:
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex gap-4 p-5 rounded-xl border border-border-color bg-white hover:border-forest-green transition-colors duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center">
                  <MapPin size={18} className="text-forest-green" />
                </div>
                <div>
                  <h4 className="font-garamond font-semibold text-lg text-text-primary mb-1">Nigeria</h4>
                  <p className="font-garamond text-base text-text-secondary leading-relaxed">
                    Where decades of oil extraction, illegal refining, urban expansion, and
                    deforestation have left landscapes in urgent need of repair.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl border border-border-color bg-white hover:border-lime-green transition-colors duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-green/10 flex items-center justify-center">
                  <MapPin size={18} className="text-lime-green" />
                </div>
                <div>
                  <h4 className="font-garamond font-semibold text-lg text-text-primary mb-1">The Sahel</h4>
                  <p className="font-garamond text-base text-text-secondary leading-relaxed">
                    Where desertification, climate-driven drought, and shifting agricultural
                    patterns are hollowing out the land that millions depend on.
                  </p>
                </div>
              </div>
            </div>

            <p className="font-garamond text-base text-text-secondary italic mb-8 leading-relaxed">
              We choose project sites based on three things: the scale of the need, the strength
              of local leadership, and our ability to deliver measurable change.
            </p>

            <Link
              href="/programs"
              className="inline-flex items-center gap-2 font-comfortaa font-semibold text-sm text-forest-green hover:text-lime-green transition-colors duration-200 group"
            >
              See all our programs
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
