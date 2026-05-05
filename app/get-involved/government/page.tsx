import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Government & Institutional Partnerships',
  description: 'A credible delivery partner for government agencies, multilaterals, and development organizations.',
}

const engagementAreas = [
  'Land restoration mandates and reforestation targets',
  'Climate adaptation programs in vulnerable communities',
  'Petroleum pollution rehabilitation and community engagement',
  'School-based climate education and curriculum delivery',
  'Research, monitoring, and evaluation work',
]

const credentials = [
  'Registered with the Corporate Affairs Commission of Nigeria',
  'Works openly with community and traditional authorities',
  'Reports against measurable indicators on a regular cycle',
  'Founder has years of prior field experience',
  'Community co-design embedded in all project methodology',
]

export default function GovernmentPage() {
  return (
    <>
      <PageHero
        tag="Government & Institutional Partnerships"
        headline="A delivery partner that takes the work seriously."
        subheadline="We are built for complex local environments."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                For Institutions
              </span>
              <h2 className="heading-lg mt-4 mb-6 green-line">Who we work with.</h2>
              <div className="space-y-4 body-md mb-10">
                <p>
                  National and sub-national government agencies, multilateral institutions, and
                  development partners need delivery partners with credibility, transparency, and
                  the ability to operate in complex local environments. We are built for that role.
                </p>
                <p>
                  We are registered with the Corporate Affairs Commission of Nigeria, we work
                  openly with community and traditional authorities, and we report against
                  measurable indicators on a regular cycle.
                </p>
              </div>

              <h3 className="heading-sm mb-5">We can engage on:</h3>
              <div className="space-y-3 mb-10">
                {engagementAreas.map((area) => (
                  <div key={area} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-lime-green flex-shrink-0 mt-1" />
                    <span className="font-garamond text-base text-text-secondary">{area}</span>
                  </div>
                ))}
              </div>

              <h3 className="heading-sm mb-5">Our credentials:</h3>
              <div className="space-y-3">
                {credentials.map((c) => (
                  <div key={c} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-bg">
                    <span className="w-2 h-2 rounded-full bg-forest-green flex-shrink-0 mt-2" />
                    <span className="font-garamond text-base text-text-secondary">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="bg-neutral-bg rounded-2xl border border-border-color p-8">
                <h3 className="font-garamond font-semibold text-2xl text-text-primary mb-2">
                  Start a conversation.
                </h3>
                <p className="font-garamond text-base text-text-secondary mb-6">
                  Tell us about your mandate and what you are looking for in a delivery partner.
                </p>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">Full Name *</label>
                      <input type="text" className="input-field" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">Official Email *</label>
                      <input type="email" className="input-field" placeholder="name@agency.gov" />
                    </div>
                  </div>
                  <div>
                    <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">Agency / Institution *</label>
                    <input type="text" className="input-field" placeholder="Federal Ministry of Environment" />
                  </div>
                  <div>
                    <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">Area of engagement</label>
                    <select className="input-field">
                      <option value="">Select area of interest</option>
                      <option>Land restoration mandates</option>
                      <option>Climate adaptation programs</option>
                      <option>Petroleum pollution rehabilitation</option>
                      <option>Climate education & curriculum</option>
                      <option>Research & monitoring</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">Message</label>
                    <textarea
                      className="input-field resize-none"
                      rows={4}
                      placeholder="Tell us about your mandate or project..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    Send Enquiry <ArrowRight size={16} />
                  </button>
                  <p className="font-comfortaa text-xs text-text-secondary text-center">
                    Or email{' '}
                    <a href="mailto:partnerships@climategreenworld.org" className="text-forest-green hover:underline">
                      partnerships@climategreenworld.org
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
