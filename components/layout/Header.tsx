'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

interface NavChild {
  label: string
  href: string
  desc: string
}

interface NavItem {
  label: string
  href: string
  children?: NavChild[]
  megaImage?: string
  megaImageAlt?: string
  megaHeadline?: string
  megaDesc?: string
  megaWide?: boolean
}

const navItems: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    megaImage: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&q=80',
    megaImageAlt: 'Our story',
    megaHeadline: 'A foundation born of one truth.',
    megaDesc: 'Dr. Ike Anosike turned years of solo work into an institution. Meet the team and the mission.',
    children: [
      { label: 'Our Story', href: '/about/story', desc: 'How and why the Foundation began' },
      { label: 'Vision, Mission & Values', href: '/about#vision', desc: 'The principles that guide every decision' },
      { label: 'Founder & Team', href: '/about/team', desc: 'The people behind the work' },
      { label: 'Network & Partners', href: '/about#network', desc: 'Who we work alongside' },
      { label: 'Careers', href: '/about/careers', desc: 'Work that matters' },
      { label: 'FAQs', href: '/about/faqs', desc: 'Honest answers' },
    ],
  },
  {
    label: 'What We Do',
    href: '/what-we-do',
    megaImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
    megaImageAlt: 'Restoration work',
    megaHeadline: 'Tree-planting is the easy part.',
    megaDesc: 'Five principles. Rigorous measurement. A ten-year minimum horizon. Everything around the planting is the work.',
    children: [
      { label: 'Our Approach', href: '/what-we-do#approach', desc: 'Five principles that shape every project' },
      { label: 'How We Measure Impact', href: '/what-we-do#impact', desc: 'What we track and why it matters' },
      { label: 'Research & Publications', href: '/what-we-do/research', desc: 'Field reports and research briefs' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    megaWide: true,
    children: [
      {
        label: 'Tree Planting & Restoration',
        href: '/programs/tree-planting',
        desc: 'Native species planting and landscape recovery across Nigeria and the Sahel',
      },
      {
        label: 'Urban Greening',
        href: '/programs/urban-greening',
        desc: 'Bringing nature back into Africa\'s fastest-growing cities',
      },
      {
        label: 'Petroleum Pollution Defense',
        href: '/programs/petroleum-pollution',
        desc: 'Confronting oil bunkering and illegal refining — the damage others overlook',
      },
      {
        label: 'Climate Education',
        href: '/programs/climate-education',
        desc: 'Building a generation that will not look away from the climate challenge',
      },
    ],
  },
  {
    label: 'Progress',
    href: '/progress',
    megaImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    megaImageAlt: 'Landscape restoration progress',
    megaHeadline: 'Where we are. Honestly.',
    megaDesc: 'Year-One numbers that are real, and the curve our partners are helping us climb toward 2030.',
    children: [
      { label: 'Year One So Far', href: '/progress#year-one', desc: 'Honest foundation-year numbers — every tree in the ground' },
      { label: 'Where We\'re Going', href: '/progress#goals', desc: 'Our 2027 and 2030 targets, published and held to' },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    megaImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    megaImageAlt: 'Partnership',
    megaHeadline: 'Every greener world begins with a decision.',
    megaDesc: 'Corporate partners, government agencies, individual donors — there is a place for you here.',
    children: [
      { label: 'Corporate Partnerships', href: '/get-involved/corporate', desc: 'Measurable climate action for your business' },
      { label: 'Government & Institutional', href: '/get-involved/government', desc: 'A credible delivery partner in complex environments' },
      { label: 'Donate', href: '/get-involved/donate', desc: 'Fund the work directly — planting, protection, people' },
      { label: 'Newsletter', href: '/get-involved/newsletter', desc: 'Monthly field updates. No spam.' },
    ],
  },
  { label: 'News & Stories', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

const programImages: Record<string, string> = {
  'Tree Planting & Restoration': 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=70',
  'Urban Greening': 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=400&q=70',
  'Petroleum Pollution Defense': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=70',
  'Climate Education': 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=70',
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [navHovered, setNavHovered] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  /* Determine header appearance */
  const isSolid = scrolled || navHovered || !!activeDropdown || mobileOpen
  const textColor = 'text-white'
  const bgClass = isSolid
    ? 'bg-[#143f1e] shadow-lg'
    : 'bg-transparent'

  return (
    <header
      ref={headerRef}
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={() => { setNavHovered(false); scheduleClose() }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass} ${isSolid ? 'py-2' : 'py-3'}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo — transparent PNG, no text, no clipping */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="relative h-11 w-auto">
              <Image
                src="/images/logo-transparent.png"
                alt="Climate & Green World Foundation"
                height={44}
                width={112}
                className="h-11 w-auto object-contain brightness-0 invert drop-shadow-sm"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0 flex-1 justify-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => { cancelClose(); if (item.children) openDropdown(item.label) }}
                onMouseLeave={scheduleClose}
              >
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2.5 whitespace-nowrap font-comfortaa font-semibold text-[13px] tracking-wide ${textColor} opacity-90 hover:opacity-100 transition-opacity duration-150`}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 flex-shrink-0 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2.5 whitespace-nowrap font-comfortaa font-semibold text-[13px] tracking-wide ${textColor} opacity-90 hover:opacity-100 transition-opacity duration-150`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu */}
                {item.children && activeDropdown === item.label && (
                  <div
                    className={`absolute top-full mt-0 bg-white rounded-b-2xl shadow-2xl overflow-hidden z-50 ${
                      item.megaWide ? 'left-1/2 -translate-x-1/2 w-[780px]' : 'left-0 w-[560px]'
                    }`}
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                    style={{ borderTop: '3px solid #3ABE2C' }}
                  >
                    {item.megaWide ? (
                      /* Programs: 4-card grid */
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
                          <div>
                            <p className="font-comfortaa font-bold text-xs text-forest-green uppercase tracking-widest mb-0.5">
                              Our Programs
                            </p>
                            <h3 className="font-garamond font-semibold text-xl text-text-primary">
                              Four programs. One ecology.
                            </h3>
                          </div>
                          <Link
                            href="/programs"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center gap-1.5 font-comfortaa font-semibold text-xs text-forest-green hover:text-lime-green transition-colors duration-150 group"
                          >
                            See all <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group flex gap-3 p-3 rounded-xl hover:bg-neutral-bg transition-colors duration-150"
                            >
                              <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                                <img
                                  src={programImages[child.label] || ''}
                                  alt={child.label}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-comfortaa font-semibold text-sm text-text-primary group-hover:text-forest-green transition-colors duration-150 leading-tight mb-1">
                                  {child.label}
                                </p>
                                <p className="font-garamond text-xs text-text-secondary leading-relaxed line-clamp-2">
                                  {child.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Standard: image left + links right */
                      <div className="flex">
                        {/* Left: featured image panel */}
                        <div className="relative w-52 flex-shrink-0 bg-forest-green overflow-hidden">
                          <img
                            src={item.megaImage}
                            alt={item.megaImageAlt || ''}
                            className="absolute inset-0 w-full h-full object-cover opacity-50"
                          />
                          <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                            <p className="font-garamond font-semibold text-base text-white leading-snug mb-2">
                              {item.megaHeadline}
                            </p>
                            <p className="font-garamond text-xs text-white/75 leading-relaxed">
                              {item.megaDesc}
                            </p>
                          </div>
                        </div>

                        {/* Right: links */}
                        <div className="flex-1 p-2">
                          {item.children.map((child, idx) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-neutral-bg transition-colors duration-150"
                            >
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-lime-green mt-2" />
                              <div>
                                <p className="font-comfortaa font-semibold text-sm text-text-primary group-hover:text-forest-green transition-colors duration-150 leading-tight">
                                  {child.label}
                                </p>
                                {child.desc && (
                                  <p className="font-garamond text-xs text-text-secondary mt-0.5 leading-snug">
                                    {child.desc}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                          <div className="mt-2 mx-4 pt-3 border-t border-border-color">
                            <Link
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center gap-1.5 font-comfortaa font-semibold text-xs text-forest-green hover:text-lime-green transition-colors duration-150 group"
                            >
                              View all {item.label.toLowerCase()}
                              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-2.5 flex-shrink-0">
            <Link
              href="/get-involved/corporate"
              className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-white text-white font-comfortaa font-bold text-[13px] rounded-xl whitespace-nowrap transition-all duration-200 hover:bg-white hover:text-forest-green"
            >
              Partner With Us
            </Link>
            <Link
              href="/get-involved/donate"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-lime-green hover:bg-lime-green-dark text-white font-comfortaa font-bold text-[13px] rounded-xl whitespace-nowrap transition-all duration-200"
            >
              Donate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 rounded-lg flex-shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-comfortaa font-semibold text-sm text-text-primary hover:bg-neutral-bg hover:text-forest-green transition-colors duration-150"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileExpanded === item.label ? 'rotate-180 text-lime-green' : ''
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 mt-1 space-y-1 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-neutral-bg transition-colors duration-150"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-lime-green flex-shrink-0 mt-1.5" />
                            <div>
                              <p className="font-comfortaa font-semibold text-sm text-text-primary">{child.label}</p>
                              {child.desc && (
                                <p className="font-garamond text-xs text-text-secondary mt-0.5">{child.desc}</p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3.5 rounded-xl font-comfortaa font-semibold text-sm text-text-primary hover:bg-neutral-bg hover:text-forest-green transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-5 space-y-3 border-t border-border-color mt-4">
              <Link
                href="/get-involved/corporate"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-3.5 border-2 border-forest-green text-forest-green font-comfortaa font-bold text-sm rounded-xl hover:bg-forest-green hover:text-white transition-all duration-200"
              >
                Partner With Us
              </Link>
              <Link
                href="/get-involved/donate"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-3.5 bg-lime-green text-white font-comfortaa font-bold text-sm rounded-xl hover:bg-lime-green-dark transition-all duration-200"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
