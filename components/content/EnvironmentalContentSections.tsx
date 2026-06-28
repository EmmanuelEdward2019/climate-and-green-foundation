'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  TreePine,
  Droplets,
  Wind,
  Users,
  Leaf,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { BUNKERING_IMAGES } from '@/lib/media'
import AudioReportPlayer from '@/components/ui/AudioReportPlayer'
import FieldVideoGrid from '@/components/ui/FieldVideoGrid'

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
      {/* Introduction */}
      <section className="section-padding bg-neutral-bg pattern-dots">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5" style={fade(0)}>
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Introduction
              </span>
              <h2 className="heading-lg green-line mb-6">
                Charcoal, communities, and the cost to our environment.
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

      {/* Habitat loss + first bunkering image */}
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

      {/* Implications */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4" style={fade(0)}>
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Implications
              </span>
              <h2 className="heading-lg green-line">
                IMPLICATIONS OF LOCAL BUNKERING.
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

      {/* Our Response */}
      <section className="section-padding bg-neutral-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div style={fade(0)}>
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Our Response
              </span>
              <h2 className="heading-lg green-line mb-6">Climate &amp; Green&apos;s approach</h2>
              <p className="body-md text-text-primary mb-6">
                One may ask how Climate &amp; Green wishes to tackle these problems:
              </p>
              <ol className="response-list">
                <li>
                  <span className="response-number">1</span>
                  <span>
                    working with the chiefs and communities in areas of sensitisation
                  </span>
                </li>
                <li>
                  <span className="response-number">2</span>
                  <span>
                    Reclaiming the land through tree planting. That&apos;s what Climate &amp; Green
                    stands for.
                  </span>
                </li>
              </ol>
              {variant === 'home' && (
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link href="/programs/petroleum-pollution" className="btn-primary">
                    Our Petroleum Defense Program
                  </Link>
                  <Link href="/get-involved/corporate" className="btn-outline">
                    Partner With Us
                  </Link>
                </div>
              )}
            </div>
            <div className="space-y-6" style={fade(120)}>
              <div className="solution-card">
                <Users size={24} className="text-lime-green mb-4" />
                <h3 className="font-garamond font-semibold text-xl text-text-primary mb-2">
                  Community Sensitisation
                </h3>
                <p className="font-garamond text-text-secondary">
                  Working with chiefs and communities to address the root causes of environmental
                  harm.
                </p>
              </div>
              <div className="solution-card">
                <Leaf size={24} className="text-lime-green mb-4" />
                <h3 className="font-garamond font-semibold text-xl text-text-primary mb-2">
                  Land Reclamation
                </h3>
                <p className="font-garamond text-text-secondary">
                  Reclaiming degraded land through tree planting — the core mission of Climate
                  &amp; Green.
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
              Video documentation from our field work — shared with partners, donors, and
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
          {variant === 'home' && (
            <div className="text-center mt-8" style={fade(180)}>
              <Link
                href="/what-we-do/research"
                className="inline-flex items-center gap-2 font-comfortaa font-semibold text-sm text-forest-green hover:text-lime-green transition-colors group"
              >
                View all research &amp; publications
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
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
