'use client'

import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Are you a registered organization?',
    a: 'Yes. Climate & Green World Foundation is registered with the Corporate Affairs Commission of Nigeria. Registration number: [XXXX]. Full documentation is available on request.',
  },
  {
    q: "You're new. Why should I trust you with my partnership or donation?",
    a: "Honest answer: because we say what we have done, not what we wish we had. Our founder has been working on these issues personally for years before formalizing the Foundation. Our Year-One numbers are modest and we publish them as such. Our growth plan is concrete, measurable, and shared openly with every partner we work with. That is the basis of trust we are offering — not a long history we don't yet have.",
  },
  {
    q: 'Where does my donation go?',
    a: 'A minimum of [XX%] of every donation goes directly to on-the-ground program delivery. The remainder covers the essentials of running a transparent organization — monitoring, reporting, and the staff who make the field work possible. We publish full financial reports annually.',
  },
  {
    q: 'Do you issue carbon credits?',
    a: 'We are currently assessing the most credible pathway for carbon accounting within our restoration portfolio. At this stage, partnerships and donations support restoration outcomes directly, rather than tradable credits. We will update this policy transparently as our measurement framework matures.',
  },
  {
    q: 'Can I visit a project site?',
    a: 'Yes, we welcome serious partners, funders, and journalists at our sites. Contact us at hello@climategreenworld.org to arrange a visit.',
  },
  {
    q: 'How is the Foundation funded?',
    a: 'Through three streams: corporate partnerships, government and institutional partnerships, and individual donations. We are actively building each of these streams in parallel.',
  },
  {
    q: 'What kinds of trees do you plant?',
    a: 'We plant native species in native configurations, guided by local ecology and traditional knowledge. We do not plant monoculture plantations. Species selection is site-specific and community-validated.',
  },
  {
    q: 'How do you measure your impact?',
    a: 'We track tree and biomass growth, carbon drawdown, biodiversity return, soil and water health, and community outcomes. Our framework draws on FAO methodology, IPCC guidance, and AFR100 reporting protocols. We report annually against agreed baselines.',
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
        <div className="px-6 pb-6 border-t border-border-color">
          <p className="font-garamond text-base text-text-secondary leading-relaxed pt-4">
            {faq.a}
          </p>
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
        headline="Honest answers to honest questions."
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
            <a href="mailto:hello@climategreenworld.org" className="btn-secondary">
              Write to us →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
