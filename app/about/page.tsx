import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { ArrowRight, Leaf, Scale, Users, Shield, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'The story of Climate & Green World Foundation — how Dr. Ike Anosike turned years of solo work into an institution.',
}

const values = [
  {
    icon: Leaf,
    title: 'Rootedness',
    body: 'We are in the places we serve.',
  },
  {
    icon: Scale,
    title: 'Rigor',
    body: 'We report what is true, not what is flattering.',
  },
  {
    icon: Users,
    title: 'Respect',
    body: 'Community knowledge is not an input; it is a foundation.',
  },
  {
    icon: Shield,
    title: 'Resilience',
    body: 'We build things that stand after we have gone.',
  },
  {
    icon: Globe,
    title: 'Reach',
    body: 'Local action, global stakes.',
  },
]

const subpages = [
  { label: 'Our Story', href: '/about/story', desc: 'How the Foundation began.' },
  { label: 'Founder & Team', href: '/about/team', desc: 'The people behind the work.' },
  { label: 'Careers', href: '/about/careers', desc: 'Work that matters.' },
  { label: 'FAQs', href: '/about/faqs', desc: 'Honest answers.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About"
        headline="Built to outlast any one person."
        subheadline="Climate & Green World Foundation exists to channel decades of personal commitment into an institution capable of carrying the work forward."
        image="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1920&q=80"
      />

      {/* Subpage navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-bg border-b border-border-color">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subpages.map((page) => (
              <Link
                key={page.label}
                href={page.href}
                className="group p-5 bg-white rounded-xl border border-border-color hover:border-forest-green hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-garamond font-semibold text-lg text-text-primary group-hover:text-forest-green mb-1 transition-colors">
                  {page.label}
                </h3>
                <p className="font-garamond text-sm text-text-secondary">{page.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section id="vision" className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            <div className="bg-forest-green rounded-2xl p-8 text-white">
              <span className="font-comfortaa text-xs uppercase tracking-widest text-lime-green mb-3 block">Vision</span>
              <h2 className="font-garamond font-semibold text-2xl mb-4 leading-snug">
                A sustainable planet where nature thrives.
              </h2>
              <div className="w-12 h-0.5 bg-lime-green" />
            </div>
            <div className="bg-neutral-bg rounded-2xl p-8 border border-border-color">
              <span className="font-comfortaa text-xs uppercase tracking-widest text-forest-green mb-3 block">Mission</span>
              <h2 className="font-garamond font-semibold text-2xl text-text-primary mb-4 leading-snug">
                Empowering communities to protect and preserve ecosystems and promote eco-friendly practices.
              </h2>
              <div className="w-12 h-0.5 bg-forest-green" />
            </div>
            <div className="bg-neutral-bg rounded-2xl p-8 border border-border-color">
              <span className="font-comfortaa text-xs uppercase tracking-widest text-forest-green mb-3 block">Founded</span>
              <h2 className="font-garamond font-semibold text-4xl text-text-primary mb-2">2025</h2>
              <p className="font-garamond text-base text-text-secondary leading-relaxed">
                Registered with the Corporate Affairs Commission of Nigeria. Building season by season.
              </p>
              <div className="w-12 h-0.5 bg-forest-green mt-4" />
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="heading-lg mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="text-center p-6 rounded-2xl border border-border-color hover:border-lime-green hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-lime-green/10 flex items-center justify-center mx-auto mb-4">
                      <Icon size={22} className="text-forest-green" />
                    </div>
                    <h3 className="font-garamond font-semibold text-lg text-text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="font-garamond text-sm text-text-secondary">{value.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Network */}
      <section id="network" className="section-padding bg-neutral-bg">
        <div className="container-max">
          <div className="max-w-3xl">
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              Our Network
            </span>
            <h2 className="heading-lg mt-4 mb-6">Connected to what matters.</h2>
            <p className="body-md mb-6">
              We partner with communities, government agencies, and international stakeholders. As
              the Foundation grows, we are building affiliations with AFR100, the UN Decade on
              Ecosystem Restoration, 1% for the Planet, and ECOWAS environmental working groups.
            </p>
            <p className="body-md mb-8">
              If your organization shares our commitments, we would welcome the conversation.
            </p>
            <Link href="/get-involved/corporate" className="btn-primary inline-flex items-center gap-2">
              Become a Partner
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
