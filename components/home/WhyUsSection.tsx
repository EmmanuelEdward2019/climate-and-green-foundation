'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe, AlertTriangle, Heart, User, Target } from 'lucide-react'

const reasons = [
  {
    icon: Globe,
    title: 'Rooted in Africa.',
    body: 'We work in Nigeria and the Sahel. Our partnership extends across borders to groups and individuals desirous of climate change action.',
  },
  {
    icon: AlertTriangle,
    title: 'We tackle what others ignore.',
    body: 'We engage directly with oil bunkering, illegal refinning, and the felling of trees for firewood issues too critical to be ignored.',
  },
  {
    icon: Heart,
    title: 'Community-first.',
    body: 'No project begins without the people who should be the direct beneficiaries.',
  },
  {
    icon: User,
    title: 'Founder-led, mission-built.',
    body: 'Dr. Ike Anosike spent years on this work before the Foundation existed. The institution is new; the conviction is not.',
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
          <h2 className="heading-lg mt-4 green-line">Why Us?</h2>
          <p className="body-md">
            Five Reasons Climate Actors Should Choose Climate &amp; Green World Foundation.
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
