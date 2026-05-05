import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react'

const aboutLinks = [
  { label: 'Our Story', href: '/about/story' },
  { label: 'Founder & Team', href: '/about/team' },
  { label: 'Network & Partners', href: '/about#network' },
  { label: 'Careers', href: '/about/careers' },
  { label: 'FAQs', href: '/about/faqs' },
]

const whatWeDoLinks = [
  { label: 'Our Approach', href: '/what-we-do#approach' },
  { label: 'Tree Planting & Restoration', href: '/programs/tree-planting' },
  { label: 'Urban Greening', href: '/programs/urban-greening' },
  { label: 'Our Progress', href: '/progress' },
  { label: 'Research & Publications', href: '/what-we-do/research' },
]

const getInvolvedLinks = [
  { label: 'Corporate Partnerships', href: '/get-involved/corporate' },
  { label: 'Government Partnerships', href: '/get-involved/government' },
  { label: 'Donate', href: '/get-involved/donate' },
  { label: 'Newsletter', href: '/get-involved/newsletter' },
]

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'X / Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-green text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 - Logo & tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <Image
                src="/images/logo-transparent.png"
                alt="Climate & Green World Foundation"
                width={140}
                height={55}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-garamond font-semibold text-lg text-white mb-1">
              Climate & Green World Foundation
            </p>
            <p className="font-comfortaa text-sm text-white/70 italic">
              Rooted in Africa. Growing a Greener World.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-lime-green flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - About */}
          <div>
            <h3 className="font-comfortaa font-semibold text-sm uppercase tracking-wider text-lime-green mb-5">
              About
            </h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-garamond text-base text-white/75 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - What We Do */}
          <div>
            <h3 className="font-comfortaa font-semibold text-sm uppercase tracking-wider text-lime-green mb-5">
              What We Do
            </h3>
            <ul className="space-y-3">
              {whatWeDoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-garamond text-base text-white/75 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Get Involved */}
          <div>
            <h3 className="font-comfortaa font-semibold text-sm uppercase tracking-wider text-lime-green mb-5">
              Get Involved
            </h3>
            <ul className="space-y-3">
              {getInvolvedLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-garamond text-base text-white/75 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div>
            <h3 className="font-comfortaa font-semibold text-sm uppercase tracking-wider text-lime-green mb-5">
              Stay Connected
            </h3>
            <p className="font-garamond text-sm text-white/75 mb-4 leading-relaxed">
              Monthly field updates, project notes, and essays from Dr. Anosike. No spam.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 font-garamond text-sm focus:outline-none focus:ring-2 focus:ring-lime-green focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-lime-green hover:bg-lime-green-dark text-white font-comfortaa font-semibold text-sm rounded-xl transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6">
              <p className="font-comfortaa text-xs text-white/50 mb-2">Contact us:</p>
              <p className="font-garamond text-sm text-white/70">hello@climategreenworld.org</p>
              <p className="font-garamond text-sm text-white/70">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <p className="font-comfortaa text-xs text-white/50">
                © {new Date().getFullYear()} Climate & Green World Foundation. All rights reserved.
              </p>
              <span className="hidden sm:inline text-white/30">·</span>
              <p className="font-comfortaa text-xs text-white/50">
                Registered with CAC Nigeria · Reg. No. [XXXX]
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="font-comfortaa text-xs text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/30">·</span>
              <Link href="/cookies" className="font-comfortaa text-xs text-white/50 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <span className="text-white/30">·</span>
              <Link href="/terms" className="font-comfortaa text-xs text-white/50 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
