'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=85',
    tag: 'Program 01',
    title: 'Tree Planting & Landscape Restoration',
    body: 'Six hundred trees in the ground. One hectare under active restoration. Reforestation that sticks.',
    href: '/programs/tree-planting',
    cta: 'Explore program',
  },
  {
    image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1600&q=85',
    tag: 'Program 02',
    title: 'Urban Greening',
    body: "Africa's cities are losing green cover at the moment they need it most. We are fixing that, tree by tree.",
    href: '/programs/urban-greening',
    cta: 'Explore program',
  },
  {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85',
    tag: 'Program 03',
    title: 'Petroleum Pollution & Ecological Defense',
    body: 'The damage no one else is talking about. We engage directly with oil bunkering and illegal refining.',
    href: '/programs/petroleum-pollution',
    cta: 'Explore program',
  },
  {
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=85',
    tag: 'Program 04',
    title: 'Climate Education & Community Awareness',
    body: 'A generation that will not look away. Climate literacy in schools, sensitization in communities.',
    href: '/programs/climate-education',
    cta: 'Explore program',
  },
]

export default function ProgramsCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next, paused])

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(380px, 55vh, 600px)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-end pb-16 px-8 sm:px-16 lg:px-24">
            <div className="max-w-xl">
              <span className="inline-block px-3 py-1 bg-lime-green text-white font-comfortaa font-bold text-xs uppercase tracking-widest rounded-full mb-4">
                {slide.tag}
              </span>
              <h2 className="font-garamond font-bold text-white mb-3 leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
                {slide.title}
              </h2>
              <p className="font-garamond text-white/80 text-base leading-relaxed mb-5 max-w-md">
                {slide.body}
              </p>
              <Link
                href={slide.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-forest-green font-comfortaa font-bold text-sm rounded-xl hover:bg-lime-green hover:text-white transition-all duration-200"
              >
                {slide.cta} →
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/25 rounded-full flex items-center justify-center transition-all duration-200"
        aria-label="Previous"
      >
        <ChevronLeft size={20} className="text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/25 rounded-full flex items-center justify-center transition-all duration-200"
        aria-label="Next"
      >
        <ChevronRight size={20} className="text-white" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-7 h-2.5 bg-lime-green' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
        <div
          key={current}
          className="h-full bg-lime-green"
          style={{
            animation: paused ? 'none' : 'progress-bar 5s linear forwards',
          }}
        />
      </div>
      <style>{`
        @keyframes progress-bar {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </div>
  )
}
