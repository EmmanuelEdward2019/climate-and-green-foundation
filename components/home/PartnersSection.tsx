'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/*
  Logo data — swap `abbr` placeholders for real <img src="..."/> once logos are supplied.
  To add a real logo: set `logoUrl` to the image path and the img tag will render instead of text.
*/
const partners = [
  { name: 'Federal Ministry of Environment', abbr: 'FME', logoUrl: '/images/partner-fme.png' },
  { name: 'AFR100', abbr: 'AFR100', logoUrl: '/images/partner-afr100.webp' },
  { name: 'ECOWAS', abbr: 'ECOWAS', logoUrl: '/images/partner-ecowas.jpg' },
  { name: 'UN Environment Programme', abbr: 'UNEP', logoUrl: '/images/partner-unep.webp' },
  { name: 'Lagos State Government', abbr: 'LASG', logoUrl: '/images/partner-lasg.png' },
]

function PartnerSlide({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="flex-shrink-0 w-44 h-20 mx-4 bg-white rounded-xl border border-border-color flex items-center justify-center px-5 group hover:border-forest-green hover:shadow-md transition-all duration-300">
      {partner.logoUrl ? (
        <img
          src={partner.logoUrl}
          alt={partner.name}
          className="max-h-10 max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        />
      ) : (
        <span className="font-comfortaa font-bold text-sm text-text-secondary group-hover:text-forest-green transition-colors duration-200 text-center leading-tight">
          {partner.abbr}
        </span>
      )}
    </div>
  )
}

export default function PartnersSection() {
  /* Duplicate the list so the marquee loops seamlessly */
  const track = [...partners, ...partners, ...partners]

  return (
    <section className="section-padding bg-neutral-bg">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="section-tag">
            <span className="w-4 h-0.5 bg-lime-green" />
            Our Partners
            <span className="w-4 h-0.5 bg-lime-green" />
          </span>
          <h2 className="heading-lg mt-4 mb-4">In good company.</h2>
          <p className="body-md max-w-2xl mx-auto">
            We work alongside government agencies, international stakeholders, businesses, and
            grassroots organizations that share our commitment to measurable, locally-led
            climate action.
          </p>
        </div>
      </div>

      {/* Full-bleed carousel — sits outside container-max for edge-to-edge feel */}
      <div className="relative overflow-hidden py-4">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F7F8F6, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F7F8F6, transparent)' }} />

        {/* Scrolling track */}
        <div className="flex partners-track">
          {track.map((partner, i) => (
            <PartnerSlide key={`${partner.name}-${i}`} partner={partner} />
          ))}
        </div>
      </div>

      <div className="container-max mt-10 text-center">
        <p className="font-garamond text-base text-text-secondary italic mb-6">
          The Foundation is registered with Nigeria's Corporate Affairs Commission (CAC) and
          welcomes serious partners across all sectors. Partner logos displayed as partnerships
          are formalized.
        </p>
        <Link
          href="/get-involved/corporate"
          className="inline-flex items-center gap-2 btn-primary"
        >
          Become a partner
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
