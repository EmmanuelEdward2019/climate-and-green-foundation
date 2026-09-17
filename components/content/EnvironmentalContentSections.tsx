'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Megaphone, Sprout, Gavel } from 'lucide-react'
import { BUNKERING_IMAGES, FIREWOOD_CHARCOAL_IMAGES } from '@/lib/media'

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
      {/* We fight against: bunkering, charcoal production and deforestation */}
      <section className="section-padding bg-gradient-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid" aria-hidden="true" />
        <div className="container-max relative z-10">
          <div className="max-w-3xl mb-12" style={fade(0)}>
            <h2 className="font-garamond font-bold text-white leading-tight heading-lg mb-6">
              WE FIGHT AGAINST: Bunkering, Charcoal production and Deforestation
            </h2>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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

          {/* Firewood and charcoal, alongside the bunkering evidence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={fade(220)}>
            {[BUNKERING_IMAGES[0], ...FIREWOOD_CHARCOAL_IMAGES].map((image) => (
              <div key={image.src} className="media-image-frame dark">
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

      {/* The Environmental Consequences */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4" style={fade(0)}>
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Implications
              </span>
              <h2 className="heading-lg green-line">
                THE ENVIRONMENTAL CONSEQUENCES.
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
          {/* Heading sits above the three boxes so they read as one block */}
          <div className="max-w-3xl mb-12" style={fade(0)}>
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              Our Response
            </span>
            <h2 className="heading-lg green-line">
              Climate and Green World is responding through
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={fade(120)}>
            <div className="solution-card">
              <Megaphone size={24} className="text-lime-green mb-4" />
              <h3 className="font-garamond font-semibold text-xl text-text-primary mb-2">
                Awareness
              </h3>
              <p className="font-garamond text-text-secondary">
                We create awareness through various media like newspaper, radio and social media.
                Involvement of chiefs and community leader. Enlightenment of youths and various
                groups and organisation.
              </p>
            </div>
            <div className="solution-card">
              <Sprout size={24} className="text-lime-green mb-4" />
              <h3 className="font-garamond font-semibold text-xl text-text-primary mb-2">
                Alternative Livelihood and Restoration
              </h3>
              <p className="font-garamond text-text-secondary">
                Promoting clean energy, sustainable farming, and leading tree planting campaigns
                to restore what has been lost.
              </p>
            </div>
            <div className="solution-card">
              <Gavel size={24} className="text-lime-green mb-4" />
              <h3 className="font-garamond font-semibold text-xl text-text-primary mb-2">
                Advocacy
              </h3>
              <p className="font-garamond text-text-secondary">
                Pushing for attitudinal change towards the environment. Advocating for various
                government actions and commitment towards the environment.
              </p>
            </div>
          </div>

          {variant === 'home' && (
            <div className="mt-12 flex flex-col sm:flex-row gap-4" style={fade(200)}>
              <Link href="/what-we-do" className="btn-primary">
                See what we do
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
