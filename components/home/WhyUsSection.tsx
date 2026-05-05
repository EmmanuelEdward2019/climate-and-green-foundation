'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe, AlertTriangle, Heart, User, BarChart3, Target } from 'lucide-react'

const reasons = [
  {
    icon: Globe,
    title: 'African-rooted, globally networked.',
    body: 'Our work is in Nigeria and the Sahel. Our partnerships extend across borders to anyone serious about climate action.',
  },
  {
    icon: AlertTriangle,
    title: 'The pollution others overlook.',
    body: 'We are one of the few foundations engaging directly with the ecological damage of oil bunkering and illegal artisanal refining.',
  },
  {
    icon: Heart,
    title: 'Community-first.',
    body: 'No project begins without the buy-in of the people who will live with it for the next fifty years.',
  },
  {
    icon: User,
    title: 'Founder-led, mission-built.',
    body: 'Dr. Ike Anosike spent years on this work before the Foundation existed. The institution is new; the conviction is not.',
  },
  {
    icon: BarChart3,
    title: 'Transparent.',
    body: "We publish what worked, what didn't, and what it cost.",
  },
  {
    icon: Target,
    title: 'Ambitious but honest.',
    body: 'We promise only what we can deliver, and we deliver on our promises.',
  },
]

export default function WhyUsSection() {
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
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="section-tag mb-4">
            <span className="w-4 h-0.5 bg-lime-green" />
            Our Differentiation
          </span>
          <h2 className="heading-lg mt-4 green-line">Why us?</h2>
          <p className="body-md">
            Six reasons why Climate & Green World Foundation is the partner serious climate
            actors are looking for.
          </p>
        </div>

        {/* Six-point grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="group p-6 rounded-2xl border border-border-color hover:border-lime-green hover:shadow-md transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, border-color 0.3s ease, box-shadow 0.3s ease`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-forest-green/8 group-hover:bg-lime-green/10 flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={22} className="text-forest-green" />
                </div>
                <h3 className="font-garamond font-semibold text-lg text-text-primary mb-2">
                  {reason.title}
                </h3>
                <p className="font-garamond text-base text-text-secondary leading-relaxed">
                  {reason.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
