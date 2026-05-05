import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { FileText, BookOpen, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Research & Publications',
  description: 'Field reports, research briefs, and publications from Climate & Green World Foundation.',
}

export default function ResearchPage() {
  return (
    <>
      <PageHero
        tag="Research & Publications"
        headline="Sharing what we learn."
        subheadline="We do not gatekeep findings. As our research function grows, we will publish from our project sites."
      />

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="body-md mb-12 max-w-2xl">
            <p>
              We publish field reports, research briefs, and the occasional hard truth about what
              is and is not working in restoration across Nigeria and the Sahel. No PR gloss — just
              what we are learning.
            </p>
          </div>

          {/* Publication categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: FileText, label: 'Field Reports', desc: 'From active restoration sites' },
              { icon: BookOpen, label: 'Research Briefs', desc: 'Evidence syntheses and analysis' },
              { icon: ExternalLink, label: 'External Papers', desc: 'Third-party research we recommend' },
            ].map(({ icon: Icon, label, desc }) => (
              <button
                key={label}
                className="flex items-center gap-4 p-5 rounded-xl border-2 border-border-color hover:border-forest-green transition-colors duration-200 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-forest-green" />
                </div>
                <div>
                  <p className="font-comfortaa font-semibold text-sm text-text-primary">{label}</p>
                  <p className="font-garamond text-sm text-text-secondary">{desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Coming soon placeholder */}
          <div className="bg-neutral-bg rounded-2xl border border-dashed border-forest-green/30 p-16 text-center">
            <div className="w-16 h-16 rounded-full bg-forest-green/10 flex items-center justify-center mx-auto mb-6">
              <FileText size={28} className="text-forest-green" />
            </div>
            <h2 className="font-garamond font-semibold text-2xl text-text-primary mb-3">
              Publications coming soon.
            </h2>
            <p className="font-garamond text-base text-text-secondary max-w-md mx-auto">
              Our first publication is scheduled for late 2025 — a field report from our initial
              restoration site covering species survival rates, soil observations, and community
              feedback.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
