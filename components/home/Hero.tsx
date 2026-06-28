'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Globe2 } from 'lucide-react'
import { BUNKERING_IMAGES } from '@/lib/media'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — field evidence image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('${BUNKERING_IMAGES[2].src}')`,
        }}
      />

      {/* Refined overlay */}
      <div className="hero-overlay-refined absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Globe2 size={14} className="text-lime-green" />
              <span className="font-comfortaa text-xs text-white/90 uppercase tracking-widest">
                International Environmental Foundation
              </span>
            </div>

            <h1
              className={`font-garamond font-bold text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)' }}
            >
              Rooted in Africa.
              <br />
              <span className="text-lime-green">Growing a Greener World.</span>
            </h1>

            <p
              className={`font-garamond text-white/85 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-700 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)' }}
            >
              We restore degraded landscapes, defend ecosystems from pollution, and equip
              communities to thrive in a changing climate — starting in Nigeria and the Sahel,
              and growing outward.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link href="/get-involved/corporate" className="btn-primary text-sm px-8 py-4 w-full sm:w-auto">
                Partner With Us
              </Link>
              <Link href="/get-involved/donate" className="btn-secondary text-sm px-8 py-4 w-full sm:w-auto">
                Donate
              </Link>
            </div>
          </div>

          {/* Stats panel */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '600', label: 'Trees Planted' },
                { value: '1 ha', label: 'Under Restoration' },
                { value: '10', label: 'People Employed' },
                { value: '2025', label: 'Founded' },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat-card">
                  <p className="font-garamond font-semibold text-2xl md:text-3xl text-lime-green">
                    {stat.value}
                  </p>
                  <p className="font-comfortaa text-xs text-white/70 mt-1 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-indicator">
        <p className="font-comfortaa text-xs text-white/60 uppercase tracking-widest">Scroll</p>
        <ChevronDown size={20} className="text-white/60" />
      </div>
    </section>
  )
}
