import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import AudioReportPlayer from '@/components/ui/AudioReportPlayer'
import FieldVideoGrid from '@/components/ui/FieldVideoGrid'
import { FileText, BookOpen, ExternalLink } from 'lucide-react'
import { BUNKERING_IMAGES } from '@/lib/media'

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
        image={BUNKERING_IMAGES[4].src}
      />

      <section className="section-padding bg-white">
        <div className="container-max max-w-5xl">
          <div className="body-md mb-12 max-w-2xl">
            <p>
              We publish field reports, research briefs, and the occasional hard truth about what
              is and is not working in restoration across Nigeria and the Sahel. No PR gloss — just
              what we are learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: FileText, label: 'Field Reports', desc: 'From active restoration sites' },
              { icon: BookOpen, label: 'Research Briefs', desc: 'Evidence syntheses and analysis' },
              { icon: ExternalLink, label: 'External Papers', desc: 'Third-party research we recommend' },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-xl border-2 border-border-color hover:border-forest-green transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-forest-green" />
                </div>
                <div>
                  <p className="font-comfortaa font-semibold text-sm text-text-primary">{label}</p>
                  <p className="font-garamond text-sm text-text-secondary">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              Featured Report
            </span>
            <h2 className="heading-md mb-6">Climate & Green World Report</h2>
            <AudioReportPlayer />
          </div>

          <div>
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              Field Documentation
            </span>
            <h2 className="heading-md mb-8">Video evidence from project sites</h2>
            <FieldVideoGrid />
          </div>
        </div>
      </section>
    </>
  )
}
