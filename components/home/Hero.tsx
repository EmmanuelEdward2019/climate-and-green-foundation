'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image via CSS for performance */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80')`,
        }}
      />

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Main headline */}
        <h1
          className={`font-garamond font-bold text-white leading-tight mb-6 transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          Rooted in Africa.
          <br />
          <span className="text-lime-green">Growing a Greener World.</span>
        </h1>

        {/* Sub-headline */}
        <p
          className={`font-garamond text-white/85 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.375rem)' }}
        >
          We restore degraded landscapes, defend ecosystems from pollution, and equip
          communities to thrive in a changing climate — starting in Nigeria and the Sahel,
          and growing outward.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link href="/get-involved/corporate" className="btn-primary text-sm px-8 py-4">
            Partner With Us
          </Link>
          <Link href="/get-involved/donate" className="btn-secondary text-sm px-8 py-4">
            Donate
          </Link>
        </div>

        {/* Stats teaser */}
        <div
          className={`mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '600', label: 'Trees Planted' },
            { value: '1 ha', label: 'Under Restoration' },
            { value: '10', label: 'People Employed' },
            { value: '2025', label: 'Founded' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4"
            >
              <p className="font-garamond font-semibold text-2xl text-lime-green">{stat.value}</p>
              <p className="font-comfortaa text-xs text-white/70 mt-1">{stat.label}</p>
            </div>
          ))}
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
