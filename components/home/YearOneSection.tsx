'use client'

import { useEffect, useRef, useState } from 'react'
import { TreePine, Layers, Users, MapPin } from 'lucide-react'

const metrics = [
  {
    icon: TreePine,
    label: 'Trees Planted',
    current: 600,
    goal: '1,000,000',
    description: 'Native species in active restoration sites',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=75',
    imageAlt: 'Trees being planted in a field',
  },
  {
    icon: Layers,
    label: 'Hectares Under Restoration',
    current: 1,
    goal: '5,000',
    description: 'Under active management and monitoring',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=75',
    imageAlt: 'Landscape restoration site',
  },
  {
    icon: Users,
    label: 'People Employed',
    current: 10,
    goal: '250',
    description: 'Ecologists, field staff & community organizers',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=75',
    imageAlt: 'Community members working together',
  },
  {
    icon: MapPin,
    label: 'Communities Engaged',
    current: null,
    goal: '100',
    description: 'Communities co-designing our programs',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=75',
    imageAlt: 'Community engagement in Nigeria',
  },
]

function MetricCard({
  metric,
  index,
  visible,
}: {
  metric: (typeof metrics)[0]
  index: number
  visible: boolean
}) {
  const Icon = metric.icon

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-border-color shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms, box-shadow 0.3s ease`,
      }}
    >
      {/* Image header */}
      <div className="relative h-40 overflow-hidden flex-shrink-0">
        <img
          src={metric.image}
          alt={metric.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay — darker at bottom for content readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 via-forest-green/30 to-transparent" />

        {/* Icon + Year One badge pinned to image */}
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Icon size={20} className="text-white" />
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-green text-white rounded-full font-comfortaa font-bold text-[11px] uppercase tracking-wide shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            Year One
          </span>
        </div>

        {/* Big number overlaid at bottom of image */}
        <div className="absolute bottom-3 left-4">
          <span className="font-garamond font-bold text-4xl text-white drop-shadow-md leading-none">
            {metric.current !== null ? metric.current.toLocaleString() : '—'}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-comfortaa font-bold text-sm text-text-primary mb-1 leading-snug">
          {metric.label}
        </h3>
        <p className="font-garamond text-sm text-text-secondary mb-4 leading-snug flex-1">
          {metric.description}
        </p>

        {/* Progress toward goal */}
        <div className="pt-4 border-t border-border-color">
          <div className="flex items-center justify-between mb-2">
            <span className="font-comfortaa text-xs text-text-secondary">2030 Goal</span>
            <span className="font-garamond font-bold text-sm text-forest-green">
              {metric.goal}
            </span>
          </div>
          <div className="w-full h-1.5 bg-neutral-bg rounded-full overflow-hidden">
            <div
              className="h-full bg-lime-green rounded-full"
              style={{
                width: visible
                  ? metric.current !== null
                    ? `${Math.max(Math.min((metric.current / parseInt(metric.goal.replace(/,/g, ''))) * 100, 100), 0.5)}%`
                    : '0.5%'
                  : '0%',
                minWidth: visible ? '5px' : '0',
                transition: `width 1.2s ease ${index * 150 + 400}ms`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function YearOneSection() {
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
    <section className="section-padding bg-neutral-bg" ref={ref}>
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="section-tag">
            <span className="w-4 h-0.5 bg-lime-green" />
            Our Numbers
            <span className="w-4 h-0.5 bg-lime-green" />
          </span>
          <h2 className="heading-lg mt-4 mb-4">
            Foundation year progress.
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            Honest numbers. Every tree we report is a tree in the ground. Every person is on
            our payroll. This is where we start.
          </p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} visible={visible} />
          ))}
        </div>

        {/* Caption */}
        <div className="text-center">
          <p className="font-garamond text-base text-text-secondary max-w-2xl mx-auto italic">
            We are in our foundation year. These are the numbers we have actually delivered —
            and the curve our partners are helping us climb.
          </p>
        </div>
      </div>
    </section>
  )
}
