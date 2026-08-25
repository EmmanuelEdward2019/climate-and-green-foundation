'use client'

import { useEffect, useRef, useState } from 'react'
import {
  TreePine,
  Droplets,
  Wind,
  Users,
  Leaf,
  Megaphone,
  type LucideIcon,
} from 'lucide-react'
import { BUNKERING_IMAGES } from '@/lib/media'
import AudioReportPlayer from '@/components/ui/AudioReportPlayer'
import FieldVideoGrid from '@/components/ui/FieldVideoGrid'

/* Environmental preservation images */
const PRESERVATION_IMAGES = [
  { src: '/images/environmental-preservation-1.png', alt: 'Environmental preservation', label: 'Environmental Preservation' },
  { src: '/images/environmental-preservation-2.png', alt: 'Environmental preservation', label: 'Environmental Preservation' },
  { src: '/images/environmental-preservation-3.png', alt: 'Environmental preservation', label: 'Environmental Preservation' },
  { src: '/images/environmental-preservation-4.png', alt: 'Environmental preservation', label: 'Environmental Preservation' },
]

interface EnvironmentalContentSectionsProps {
  variant?: 'home' | 'full'
}

export default function EnvironmentalContentSections({
  variant = 'home',
}: EnvironmentalContentSectionsProps) {
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
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const fade = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  })

  return (
    <div ref={ref} className="environmental-content">
      {/* WE FIGHT AGAINST heading - merged bunkering, charcoal, deforestation */}
      <section className="section-padding bg-neutral-bg pattern-dots">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5" style={fade(0)}>
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                What We Fight Against
              </span>
              <h2 className="heading-lg green-line mb-6">
                WE FIGHT AGAINST: Bunkering, Charcoal Production and Deforestation
              </h2>
              <div className="trust-badge-row mb-6">
                <span className="trust-badge">Field Evidence</span>
                <span className="trust-badge">Nigeria & Niger Delta</span>
                <span className="trust-badge">Restoration Focus</span>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-5" style={fade(100)}>
              <p className="body-md text-text-primary">
                For many rural communities, charcoal is one of the few cash incomes available. It
                provides cheap fuel for most low income families in cities and villages so, demands
                stays high.
              </p>
              <p className="body-md text-text-primary">
                To that extent, the environmental effects are huge.
              </p>
              <div className="impact-cards-grid">
                <ImpactCard
                  icon={TreePine}
                  text="1) Deforestation. Most charcoal comes from cutting down trees faster than they re-grow, this no doubt is a major driver of forest loss."
                />
                <ImpactCard
                  icon={Droplets}
                  text="(2) Soil Degradation; Cutting down trees leaves the soil exposed, as it erodes soil nuetranta faster, resulting to poor harvest."
                />
                <ImpactCard
                  icon={Wind}
                  text="(3) Air Pollution. Burning trees into charcoal releases lots of smoke, CO2 and methane, a major source of green house gases and air pollution."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habitat loss + bunkering and environmental preservation images */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5" style={fade(0)}>
              <p className="body-md text-text-primary">
                Trees cut and burnt not only constitutes desertification but loss of habitats for
                animals and plants. Again, there&apos;s the problem of Air Pollution. The{' '}
                smoke from charcoal kilns has carbon monoxide particulates, and has other inherent
                toxin.
              </p>
            </div>
            <div className="media-image-frame" style={fade(120)}>
              <img
                src={BUNKERING_IMAGES[0].src}
                alt={BUNKERING_IMAGES[0].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="media-image-caption">
                <span className="font-comfortaa text-xs uppercase tracking-widest text-lime-green">
                  {BUNKERING_IMAGES[0].label}
                </span>
              </div>
            </div>
          </div>

          {/* Environmental Preservation Images integrated with bunkering */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10" style={fade(160)}>
            {PRESERVATION_IMAGES.map((image, i) => (
              <div key={image.src} className="media-image-frame">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="media-image-caption">
                  <span className="font-comfortaa text-xs uppercase tracking-widest text-lime-green">
                    {image.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bunkering */}
      <section className="section-padding bg-gradient-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid" aria-hidden="true" />
        <div className="container-max relative z-10">
          <div className="max-w-3xl mb-12" style={fade(0)}>
            <span className="inline-flex items-center gap-2 font-comfortaa font-semibold text-xs uppercase tracking-widest text-lime-green mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              BUNKERING:
            </span>
            <div className="space-y-5 font-garamond text-lg md:text-xl text-white/90 leading-relaxed">
              <p>
                There&apos;s Marine Bunkering, which is stealing oil by ships. This is being dealt
                with by security companies like Tantita. We are concerned with &quot;Local
                Bunkering&quot; often referred to as illegal crude theft and its attendant Artisanal
                Refining.
              </p>
              <p>
                People tap into oil pipelines or Well heads, siphone crude oil, move it through
                creeks in boats or barges, sell the crude to those who refine it locally into
                diesel, kerosene and petrol in makeshift refineries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {[BUNKERING_IMAGES[1], BUNKERING_IMAGES[2]].map((image, i) => (
              <div key={image.src} className="media-image-frame dark" style={fade(80 + i * 60)}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="media-image-caption">
                  <span className="font-comfortaa text-xs uppercase tracking-widest text-lime-green">
                    {image.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 font-garamond text-base md:text-lg text-white/85 leading-relaxed" style={fade(100)}>
              <p>
                This is widespread in the Niger Delta and oil producing states due to poverty,
                unemployment, environmental damage, weak governance and conflict around oil wealth
                distribution.
              </p>
              <p>
                Operations often involve networks of local youths, transporters, traders, armed
                groups and sometimes corrupt officials or security personnel.
              </p>
              <p>
                The production process, which involves Bush or Kpofire refining of crude in makeshift
                ovens and drums, lacks safety standards and is very dangerous. Illegal refinery camps
                frequently cause explosions, oil spills, rivers, and health problems within the
                surrounding communities.
              </p>
            </div>
            <div className="space-y-5" style={fade(180)}>
              {[BUNKERING_IMAGES[3], BUNKERING_IMAGES[4]].map((image) => (
                <div key={image.src} className="media-image-frame dark">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-[16/10] object-cover"
                    loading="lazy"
                  />
                  <div className="media-image-caption">
                    <span className="font-comfortaa text-xs uppercase tracking-widest text-lime-green">
                      {image.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Environmental Consequences (renamed from IMPLICATIONS OF LOCAL BUNKERING) */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4" style={fade(0)}>
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Implications
              </span>
              <h2 className="heading-lg green-line">
                The Environmental Consequences.
              </h2>
            </div>
            <div className="lg:col-span-8" style={fade(100)}>
              <ul className="implications-list">
                <li>
                  *Deforestation: large numbers of trees are cut down for cooking crude, especially
                  mangroves in creek areas.
                </li>
                <li>
                  *Loss of biodiversity, birds, fish nurseries and wetland species lose habitat.
                </li>
                <li>
                  *Erosion: Mangroves that normally stabilise river banks and protect against
                  flooding are destroyed.
                </li>
                <li>
                  * Air Pollution, burning of crude and wood together, releases thick smoke and
                  soot
                </li>
                <li>
                  * Carbon emissions, both from the cooking of crude and the burning of wood,
                  increase greenhouse gases.
                </li>
                <li>
                  * Ecological Damage, spills and dumping of waste oil destroy vegetation,
                  farmland, and aquatic life
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Response - updated heading and approach */}
      <section className="section-padding bg-neutral-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div style={fade(0)}>
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Our Response
              </span>
              <h2 className="heading-lg green-line mb-6">Climate and Green World is responding through</h2>
              <ol className="response-list">
                <li>
                  <span className="response-number">1</span>
                  <span>
                    <strong>Awareness:</strong> Working with the chiefs and communities on the link between livelihood and long term survival.
                  </span>
                </li>
                <li>
                  <span className="response-number">2</span>
                  <span>
                    <strong>Alternative Livelihood and Restoration:</strong> Promoting clean energy, sustainable farming, and leading tree planting campaigns to restore what has been lost.
                  </span>
                </li>
                <li>
                  <span className="response-number">3</span>
                  <span>
                    <strong>Advocacy:</strong> Pushing for enforcement and government action.
                  </span>
                </li>
              </ol>
            </div>
            <div className="space-y-6" style={fade(120)}>
              <div className="solution-card">
                <Megaphone size={24} className="text-lime-green mb-4" />
                <h3 className="font-garamond font-semibold text-xl text-text-primary mb-2">
                  Awareness
                </h3>
                <p className="font-garamond text-text-secondary">
                  Working with the chiefs and communities on the link between livelihood and long term survival.
                </p>
              </div>
              <div className="solution-card">
                <Leaf size={24} className="text-lime-green mb-4" />
                <h3 className="font-garamond font-semibold text-xl text-text-primary mb-2">
                  Alternative Livelihood and Restoration
                </h3>
                <p className="font-garamond text-text-secondary">
                  Promoting clean energy, sustainable farming, and leading tree planting campaigns to restore what has been lost.
                </p>
              </div>
              <div className="solution-card">
                <Users size={24} className="text-lime-green mb-4" />
                <h3 className="font-garamond font-semibold text-xl text-text-primary mb-2">
                  Advocacy
                </h3>
                <p className="font-garamond text-text-secondary">
                  Pushing for enforcement and government action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Videos */}
      <section className="section-padding bg-[#0a2414]">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10" style={fade(0)}>
            <div>
              <span className="inline-flex items-center gap-2 font-comfortaa font-semibold text-xs uppercase tracking-widest text-lime-green mb-3">
                <span className="w-4 h-0.5 bg-lime-green" />
                Field Documentation
              </span>
              <h2 className="font-garamond font-bold text-white leading-tight heading-lg">
                On-the-ground evidence from affected communities.
              </h2>
            </div>
            <p className="font-garamond text-white/60 max-w-md">
              Video documentation from our field work - shared with partners, donors, and
              communities working toward restoration.
            </p>
          </div>
          <div style={fade(100)}>
            <FieldVideoGrid />
          </div>
        </div>
      </section>

      {/* Audio Report */}
      <section className="section-padding bg-white border-t border-section-divider">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10" style={fade(0)}>
            <span className="section-tag mb-4 justify-center">
              <span className="w-4 h-0.5 bg-lime-green" />
              Listen
            </span>
            <h2 className="heading-md">Climate &amp; Green World Report</h2>
          </div>
          <div style={fade(100)}>
            <AudioReportPlayer />
          </div>
        </div>
      </section>
    </div>
  )
}

function ImpactCard({
  icon: Icon,
  text,
}: {
  icon: LucideIcon
  text: string
}) {
  return (
    <div className="impact-card">
      <div className="flex items-start gap-4">
        <div className="impact-card-icon">
          <Icon size={22} className="text-forest-green" />
        </div>
        <p className="font-garamond text-lg text-text-primary leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
