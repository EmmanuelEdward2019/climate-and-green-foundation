import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import PageHero from '@/components/ui/PageHero'
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react'

const ContactMap = dynamic(() => import('@/components/ui/MapContact'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 bg-neutral-bg flex items-center justify-center">
      <div className="w-6 h-6 rounded-full border-2 border-forest-green border-t-transparent animate-spin" />
    </div>
  ),
})

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Climate & Green World Foundation.',
}

const contacts = [
  { icon: Mail, label: 'General enquiries', value: 'hello@climategreenworld.org', href: 'mailto:hello@climategreenworld.org' },
  { icon: Mail, label: 'Partnerships', value: 'partnerships@climategreenworld.org', href: 'mailto:partnerships@climategreenworld.org' },
  { icon: Mail, label: 'Media', value: 'media@climategreenworld.org', href: 'mailto:media@climategreenworld.org' },
  { icon: Mail, label: 'Careers', value: 'careers@climategreenworld.org', href: 'mailto:careers@climategreenworld.org' },
  { icon: MapPin, label: 'Office', value: 'Lagos, Nigeria', href: '#' },
  { icon: Phone, label: 'Phone', value: '+234 XXX XXX XXXX', href: 'tel:+234XXXXXXXXXX' },
]

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitter, label: 'X / Twitter', href: '#' },
]

const reasons = [
  'General enquiry',
  'Corporate partnership',
  'Government partnership',
  'Media',
  'Volunteering',
  'Donating',
  'Careers',
  'Other',
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact"
        headline="Let's talk."
        subheadline="Whether you are a potential partner, a journalist, a researcher, or someone who simply wants to know more — we want to hear from you."
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="heading-md mb-8">Direct contacts.</h2>
              <div className="space-y-5 mb-10">
                {contacts.map((contact) => {
                  const Icon = contact.icon
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-forest-green" />
                      </div>
                      <div>
                        <p className="font-comfortaa text-xs text-text-secondary mb-0.5">{contact.label}</p>
                        <p className="font-garamond text-base text-text-primary group-hover:text-forest-green transition-colors duration-200">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>

              <h3 className="font-garamond font-semibold text-lg text-text-primary mb-4">
                Follow us.
              </h3>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-border-color hover:border-forest-green hover:bg-forest-green flex items-center justify-center transition-all duration-200 group"
                  >
                    <Icon size={16} className="text-text-secondary group-hover:text-white transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <h2 className="heading-md mb-8">Send us a message.</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                      Name *
                    </label>
                    <input type="text" className="input-field" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                      Email *
                    </label>
                    <input type="email" className="input-field" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                    Organization (optional)
                  </label>
                  <input type="text" className="input-field" placeholder="Company or institution name" />
                </div>
                <div>
                  <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                    Reason for contact *
                  </label>
                  <select className="input-field">
                    <option value="">Select a reason</option>
                    {reasons.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    className="input-field resize-none"
                    rows={5}
                    placeholder="Tell us what you are working on or what you would like to know..."
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 w-4 h-4 rounded border-border-color accent-forest-green"
                  />
                  <label htmlFor="newsletter" className="font-garamond text-sm text-text-secondary cursor-pointer">
                    I would like to receive the monthly newsletter (field updates and project notes).
                  </label>
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 border-t border-border-color overflow-hidden">
        <ContactMap />
      </section>
    </>
  )
}
