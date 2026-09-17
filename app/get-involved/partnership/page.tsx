import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { CheckCircle, ArrowRight, User, Building2, Landmark, Flag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partnership',
  description:
    'A greener world is possible: Get Involved. Partner with Climate & Green World Foundation as an individual, corporate, institutional or government partner.',
}

const partnershipTypes = [
  {
    numeral: 'I',
    icon: User,
    title: 'Individual Partnership',
    desc: '',
  },
  {
    numeral: 'II',
    icon: Building2,
    title: 'Cooperate Partnership',
    desc: '',
  },
  {
    numeral: 'III',
    icon: Landmark,
    title: 'Institutional Partnership',
    desc: '',
  },
  {
    numeral: 'IV',
    icon: Flag,
    title: 'Government Partnership',
    desc: 'Local government, state government, federal government agencies.',
  },
]

const engagementAreas = [
  'Land restoration and reforestation targets',
  'Climate adaptation programs in vulnerable communities',
  'Bunkering Sensitization and community engagement',
  'School-based climate awareness and education',
  'Research, monitoring, and evaluation.',
]

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        tag="Partnership"
        headline="A greener world is possible: Get Involved."
        image="/images/tree-planting-welcome.png"
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
                Your partnership can turn shared commitments into practical action and measurable
                impact.
              </h2>
              <div className="space-y-4 body-md mb-12">
                <p>
                  By partnering with CGWF, you join a growing movement working to address climate
                  and environmental challenges at the community level. We offer opportunities to
                  support meaningful projects, engage communities, strengthen environmental
                  awareness, demonstrate our organisation&apos;s commitment to sustainability, and
                  contribute to measurable environmental outcomes.
                </p>
                <p>
                  Together, we can move beyond commitments to practical action, stronger
                  communities and a healthier planet.
                </p>
              </div>

              {/* Types of partnership */}
              <h3 className="heading-sm mb-5">Types of partnership we offer.</h3>
              <div className="space-y-3 mb-12">
                {partnershipTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <div
                      key={type.title}
                      className="flex items-start gap-4 p-5 rounded-xl border border-border-color hover:border-lime-green transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center">
                        <Icon size={18} className="text-forest-green" />
                      </div>
                      <div>
                        <p className="font-garamond font-semibold text-lg text-text-primary">
                          <span className="font-comfortaa text-xs text-lime-green mr-2 align-middle">
                            {type.numeral}
                          </span>
                          {type.title}
                        </p>
                        {type.desc && (
                          <p className="font-garamond text-base text-text-secondary mt-1">
                            {type.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* We can engage on */}
              <h3 className="heading-sm mb-5">We can engage on:</h3>
              <div className="space-y-3">
                {engagementAreas.map((area) => (
                  <div key={area} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-lime-green flex-shrink-0 mt-1" />
                    <span className="font-garamond text-base text-text-secondary">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Request a partnership proposal */}
            <div>
              <div className="bg-neutral-bg rounded-2xl border border-border-color p-8 lg:sticky lg:top-28">
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
                        Email *
                      </label>
                      <input type="email" className="input-field" placeholder="jane@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                      Organization
                    </label>
                    <input type="text" className="input-field" placeholder="Company, institution or agency name" />
                  </div>
                  <div>
                    <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                      Type of partnership
                    </label>
                    <select className="input-field">
                      <option value="">Select a partnership type</option>
                      {partnershipTypes.map((type) => (
                        <option key={type.title}>{type.title}</option>
                      ))}
                    </select>
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
                    <a href="mailto:info@climateandgreen.com" className="text-forest-green hover:underline">
                      info@climateandgreen.com
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
