'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
        <div
          className="max-w-4xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
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
              We are climate advocates, committed to a greener healthier world through education
              and action.
            </p>
            <p>
              Climate change is no longer a distant forecast. It&apos;s the shrinking harvest in
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

          {/* Sign off */}
          <p className="font-comfortaa font-semibold text-sm text-forest-green mt-8">
            - Dr. Ike Anosike, Founder
          </p>

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
      </div>
    </section>
  )
}
