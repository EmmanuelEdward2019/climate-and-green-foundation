import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporate Partnerships',
  description: 'Climate action your customers can actually see. Partner with Climate & Green World Foundation.',
}

const deliverables = [
  'Co-designed project portfolio aligned to your sustainability commitments and relevant UN SDGs',
  'Branded or un-branded project sites',
  'Quarterly reporting with field photography, geotagged data, and outcomes against agreed indicators',
  'Site visits for leadership and employees',
  'Content rights for your communications — with facts we can stand behind',
  'Employee engagement: volunteering days, internal campaigns, matching-gift schemes',
]

export default function CorporatePage() {
  return (
    <>
      <PageHero
        tag="Corporate Partnerships"
        headline="Climate action your customers can actually see."
        subheadline="We work with businesses that want to answer the sustainability question with something concrete."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Why Partner With Us
              </span>
              <h2 className="heading-lg mt-4 mb-6 green-line">
                "Sustainability" has become a crowded word.
              </h2>
              <div className="space-y-4 body-md mb-10">
                <p>
                  Consumers, regulators, and employees are all asking the same question: what are
                  you actually doing? We work with businesses that want to answer that question
                  with something concrete — measurable hectares restored, jobs created in real
                  communities, sensitization sessions delivered, and reports they can stand behind.
                </p>
                <p>
                  We are selective. We have already turned down opportunities where the intent was
                  promotional rather than substantive. If your sustainability work is real, we want
                  to talk.
                </p>
              </div>

              <h3 className="heading-sm mb-5">What a partnership includes.</h3>
              <div className="space-y-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-lime-green flex-shrink-0 mt-1" />
                    <span className="font-garamond text-base text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <div className="bg-neutral-bg rounded-2xl border border-border-color p-8">
                <h3 className="font-garamond font-semibold text-2xl text-text-primary mb-2">
                  Request a partnership proposal.
                </h3>
                <p className="font-garamond text-base text-text-secondary mb-6">
                  Tell us about your organization and sustainability goals. We will respond within
                  five business days.
                </p>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                        Full Name *
                      </label>
                      <input type="text" className="input-field" placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                        Work Email *
                      </label>
                      <input type="email" className="input-field" placeholder="jane@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                      Organization *
                    </label>
                    <input type="text" className="input-field" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                      Role / Title
                    </label>
                    <input type="text" className="input-field" placeholder="Head of Sustainability" />
                  </div>
                  <div>
                    <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                      What are your sustainability goals?
                    </label>
                    <textarea
                      className="input-field resize-none"
                      rows={4}
                      placeholder="Tell us what you are trying to achieve and what kind of partnership you are looking for..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    Request a Proposal <ArrowRight size={16} />
                  </button>
                  <p className="font-comfortaa text-xs text-text-secondary text-center">
                    Or email us directly at{' '}
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
