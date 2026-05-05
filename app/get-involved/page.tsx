import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { Building2, Landmark, Heart, Mail, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Partner with, donate to, or follow the work of Climate & Green World Foundation.',
}

const pathways = [
  {
    icon: Building2,
    title: 'Corporate Partnerships',
    desc: 'Co-designed project portfolios, branded sites, quarterly reporting, employee engagement, and content rights. For businesses serious about measurable climate action.',
    href: '/get-involved/corporate',
    cta: 'Request a partnership proposal',
    primary: true,
  },
  {
    icon: Landmark,
    title: 'Government & Institutional',
    desc: 'A delivery partner with credibility, transparency, and the ability to operate in complex local environments. Registered with Nigeria\'s CAC.',
    href: '/get-involved/government',
    cta: 'Start a conversation',
    primary: true,
  },
  {
    icon: Heart,
    title: 'Donate',
    desc: 'Every contribution funds the work directly — planting, protection, sensitization, and the team that makes it real. One-time, monthly, tribute, or corporate matching.',
    href: '/get-involved/donate',
    cta: 'Donate now',
    primary: false,
  },
  {
    icon: Mail,
    title: 'Newsletter',
    desc: 'Monthly field updates, project notes, and the occasional essay from Dr. Anosike. No spam, no fluff.',
    href: '/get-involved/newsletter',
    cta: 'Subscribe',
    primary: false,
  },
]

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        tag="Get Involved"
        headline="Every greener world begins with a decision."
        subheadline="Whether you are a corporation, a government agency, or an individual who wants to help — there is a place for you here."
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mb-14">
            <p className="body-lg">
              We are a young foundation with a serious mission. The most useful partnerships at
              this stage come from corporate sponsors and government or institutional partners —
              the kind of relationships that let us scale faster, reach more communities, and keep
              our reporting transparent.
            </p>
            <p className="body-md mt-4">
              Individual donations and newsletter subscriptions matter too, and we welcome them all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pathways.map((pathway) => {
              const Icon = pathway.icon
              return (
                <div
                  key={pathway.title}
                  className={`rounded-2xl border p-8 flex flex-col ${
                    pathway.primary
                      ? 'border-forest-green bg-white shadow-md'
                      : 'border-border-color bg-neutral-bg'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                      pathway.primary ? 'bg-forest-green' : 'bg-forest-green/10'
                    }`}
                  >
                    <Icon size={24} className={pathway.primary ? 'text-white' : 'text-forest-green'} />
                  </div>
                  <h2 className="font-garamond font-semibold text-2xl text-text-primary mb-3">
                    {pathway.title}
                  </h2>
                  <p className="font-garamond text-base text-text-secondary leading-relaxed mb-6 flex-1">
                    {pathway.desc}
                  </p>
                  <Link
                    href={pathway.href}
                    className={`inline-flex items-center gap-2 font-comfortaa font-semibold text-sm group ${
                      pathway.primary ? 'btn-primary' : 'btn-outline'
                    }`}
                  >
                    {pathway.cta}
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
