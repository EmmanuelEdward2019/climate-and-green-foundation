import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Follow the work of Climate & Green World Foundation. Monthly field updates.',
}

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        tag="Newsletter"
        headline="A quieter way to follow the work."
        subheadline="Monthly field updates, project notes, and the occasional essay from Dr. Anosike. No spam, no fluff."
      />

      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl text-center">
          <div className="bg-neutral-bg rounded-2xl border border-border-color p-10">
            <h2 className="heading-md mb-4">Subscribe to our newsletter.</h2>
            <p className="body-md mb-8">
              We send once a month. Field updates, the numbers from the ground, and the
              occasional honest reflection from our founder. Nothing you did not ask for.
            </p>
            <form className="space-y-4 text-left">
              <div>
                <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                  Name *
                </label>
                <input type="text" className="input-field" placeholder="Your name" />
              </div>
              <div>
                <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                  Email *
                </label>
                <input type="email" className="input-field" placeholder="you@example.com" />
              </div>
              <div>
                <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
                  Country (optional)
                </label>
                <input type="text" className="input-field" placeholder="Nigeria" />
              </div>
              <button type="submit" className="btn-primary w-full">
                Subscribe →
              </button>
            </form>
            <p className="font-comfortaa text-xs text-text-secondary mt-4">
              Unsubscribe at any time. Your email is never shared.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
