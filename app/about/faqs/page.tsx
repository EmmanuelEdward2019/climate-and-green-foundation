'use client'

import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Are you a registered organization?',
    a: 'Yes. Climate & Green World Foundation is registered with the Corporate Affairs Commission of Nigeria. Registration number: 9559410. Full documentation is available on request.',
  },
  {
    q: "You're new. Why should I trust you with my partnership or donation?",
    a: `We believe trust is earned, not simply claimed. While CGWF is a young organisation, our commitment is clear, to work transparently, responsibly and with measurable results.

We will show you what we do, where resources go and what our programmes achieve. Our activities, partnerships, reports and impact will be documented and made available as we grow.

You do not have to trust us simply because we ask you to. Give us the opportunity to demonstrate that we are worthy of your trust.`,
  },
  {
    q: 'Where does my donation go?',
    a: 'Your donation helps turn climate action into practical results. We use donations to support tree planting and ecosystem restoration, climate and environmental education, community sensitization, research and advocacy, and initiatives that help vulnerable communities respond to environment challenges. We also use a portion of funds for essential programme and operational costs so that our work can be delivered effectively and responsibility.',
  },
  {
    q: 'Do you issue carbon credits?',
    a: 'CGWF does not presently issue or sell carbon credits. Our work focuses on tree planting, ecosystem restoration, climate education, community engagement, and other practical climate action initiatives. As our restoration projects develop, we may explore credible carbon credit programmes in the future, subject to the appropriate standards, verification and certification.',
  },
  {
    q: 'Can we visit project sites?',
    a: 'We welcome prospective partners, funders, and journalists at our sites. You may need to contact us to arrange a visit.',
  },
  {
    q: 'How is the foundation funded?',
    a: `CGWF is funded through a combination of donations, grants, partnerships, corporate social responsibility (CSR) support, and contributions from individuals and organizations that share our commitment to climate and environmental action.

As our programmes grow, we will continue to build partnerships with development organisations, businesses, communities, and other funding partners to support sustainable impact.`,
  },
  {
    q: 'What kind of trees do you plant?',
    a: `We prioritise native and well-adapted tree species that are suitable for the local environment, climate, soil and ecosystem. Our choice also considers biodiversity, long-term survival, shade, soil protection and the needs of the communities where we work.

We aim to plant trees that restore rather than disrupt local ecosystems, working with communities and, where select species best suited to each location.`,
  },
  {
    q: 'How do you measure impact',
    a: `We measure impact through clear, evidence-based indicators. Depending on the programme, we track trees planted and surviving, hectares of land restored, communities and people reached, climate and environmental awareness created, and changes resulting from our interventions.

We document our activities, monitor progress over time, and use reports, field observations, community feedback and other relevant data to assess what is working and where improvements are needed.

Our goal is not simply to count activities, but to demonstrate meaningful and lasting environmental and community impact.`,
  },
]

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border-color rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-bg transition-colors duration-200"
      >
        <h3 className="font-garamond font-semibold text-lg text-text-primary pr-6">
          {faq.q}
        </h3>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-green/10 flex items-center justify-center">
          {open ? (
            <Minus size={16} className="text-forest-green" />
          ) : (
            <Plus size={16} className="text-forest-green" />
          )}
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-border-color pt-4 space-y-4">
          {faq.a.split('\n\n').map((paragraph, i) => (
            <p key={i} className="font-garamond text-base text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default function FAQsPage() {
  return (
    <>
      <PageHero
        tag="FAQs"
        headline="Straight questions. Straight answers."
        subheadline="If something you need to know is not here, write to us."
      />

      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-forest-green text-white text-center">
            <h3 className="font-garamond font-semibold text-2xl mb-3">
              Still have a question?
            </h3>
            <p className="font-garamond text-white/80 mb-5">
              We are happy to answer directly.
            </p>
            <a href="mailto:info@climateandgreen.com" className="btn-secondary">
              Write to us →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
