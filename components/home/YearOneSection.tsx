'use client'

import { useEffect, useRef, useState } from 'react'
import { TreePine, Layers, Users, MapPin } from 'lucide-react'
import { focus } from '@/lib/imageFocus'

const metrics = [
  {
    icon: TreePine,
    label: 'Trees Planted',
    current: 600,
    description: 'Native species in active restoration sites',
    image: '/images/tree-planting-welcome.png',
    imageAlt: 'Trees being planted in a field',
  },
  {
    icon: MapPin,
    label: 'Communities Engaged',
    current: null,
    description: 'Communities co-designing our programs',
    image: '/images/environment-week-group-1.png',
    imageAlt: 'Community engagement in Nigeria',
  },
  {
    icon: Layers,
    label: 'Awareness Campaign',
    current: 5,
    description: 'Community awareness and sensitisation drives',
    image: '/images/environment-week-group-2.png',
    imageAlt: 'Community awareness campaign',
  },
  {
    icon: Users,
    label: 'People Employed',
    current: 10,
    description: 'Field staff, community organizers & volunteers',
    image: '/images/environmental-preservation-1.png',
    imageAlt: 'Community members working together',
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
          style={{ objectPosition: focus(metric.image) }}
          loading="lazy"
        />
        {/* Gradient overlay - darker at bottom for content readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 via-forest-green/30 to-transparent" />

        {/* Icon pinned to image */}
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Icon size={20} className="text-white" />
          </div>
        </div>
        {/* Big number overlaid at bottom of image */}
        <div className="absolute bottom-3 left-4">
          <span className="font-garamond font-bold text-4xl text-white drop-shadow-md leading-none">
            {metric.current !== null ? metric.current.toLocaleString() : '-'}
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
          <p className="body-md max-w-2xl mx-auto mt-4">
            Honest numbers. Every tree we report is a tree in the ground.
          </p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  )
}
