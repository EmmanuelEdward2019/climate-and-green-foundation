import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Work that matters. Join Climate & Green World Foundation.',
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        tag="Careers"
        headline="Work that matters. Grow where you are."
        subheadline="We are a small team and we hire carefully."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="max-w-2xl mb-14">
            <p className="body-lg mb-6">
              If you believe climate work should be African-led, measured honestly, and delivered
              with community at the center — we want to hear from you.
            </p>
            <p className="body-md">
              We hire for conviction as much as credential. Our team is small, our mission is
              serious, and we grow from within wherever we can.
            </p>
          </div>

          {/* No current openings */}
          <div className="bg-neutral-bg rounded-2xl border border-border-color p-10 text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-forest-green/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌱</span>
            </div>
            <h2 className="font-garamond font-semibold text-2xl text-text-primary mb-3">
              No current openings
            </h2>
            <p className="font-garamond text-base text-text-secondary max-w-md mx-auto mb-6">
              We do not have any advertised positions right now, but we always welcome CVs from
              people who share our values. We keep an open file.
            </p>
            <a
              href="mailto:careers@climategreenworld.org"
              className="btn-primary inline-flex"
            >
              Send your CV →
            </a>
            <p className="font-comfortaa text-xs text-text-secondary mt-3">
              careers@climategreenworld.org
            </p>
          </div>

          {/* What we look for */}
          <div>
            <h2 className="heading-md mb-8">What we look for.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Conviction', body: 'You believe this work matters. Not as a career step, but as a cause.' },
                { title: 'Honesty', body: 'You can report what did not work without softening it.' },
                { title: 'Community instinct', body: 'You understand that the people we serve are not an audience but a partner.' },
                { title: 'Field comfort', body: 'You are ready to be present in the places where the work happens.' },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-border-color hover:border-lime-green transition-colors duration-300">
                  <h3 className="font-garamond font-semibold text-lg text-text-primary mb-2">{item.title}</h3>
                  <p className="font-garamond text-base text-text-secondary">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
