import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Climate Education & Community Awareness',
  description: 'Building a generation of climate-literate Nigerians and Sahelians.',
}

const activities = [
  'Climate and ecology curriculum development and teacher training',
  'School eco-clubs and tree-planting days',
  'Community sensitization campaigns on bush burning and oil pollution',
  'Youth ambassador programs',
  'Policy briefs and advocacy with national and regional government',
]

export default function ClimateEducationPage() {
  return (
    <>
      <PageHero
        tag="Program 04"
        headline="A generation that will not look away."
        subheadline="Climate literacy in schools, sensitization in communities, and advocacy with policy-makers."
        image="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Climate Education & Community Awareness
              </span>
              <h2 className="heading-lg mt-4 mb-6 green-line">What it is.</h2>
              <div className="space-y-4 body-md mb-10">
                <p>
                  The landscapes we restore today will be inherited by the children sitting in
                  classrooms right now. And we intend for them to inherit not just the trees and
                  the soil — but the knowledge, the language, and the confidence to defend them.
                </p>
                <p>
                  Climate literacy is not a luxury subject. In Nigeria and the Sahel, children are
                  growing up in landscapes already being transformed by climate change. They are
                  watching harvests shrink, dry seasons lengthen, and riverbeds widen. They deserve
                  an education that names what they are seeing, explains why it is happening, and
                  gives them the tools to be part of the response.
                </p>
                <p>
                  Our community sensitization work takes a parallel approach. We run campaigns
                  on bush burning, charcoal production, and oil pollution — not as lectures, but
                  as conversations. We work with community leaders, elders, and women's groups
                  to make the case for change in terms that acknowledge economic reality and
                  offer real alternatives.
                </p>
              </div>

              <h3 className="heading-sm mb-5">Key activities.</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {activities.map((activity) => (
                  <div key={activity} className="flex items-start gap-3 p-4 rounded-xl border border-border-color">
                    <CheckCircle size={16} className="text-lime-green flex-shrink-0 mt-0.5" />
                    <span className="font-garamond text-base text-text-secondary">{activity}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-lime-green pl-6 py-2">
                <p className="font-garamond italic text-xl text-text-primary">
                  "The most durable conservation is the kind that makes sense to the person
                  who depends on the land for their livelihood."
                </p>
              </blockquote>
            </div>

            <div className="space-y-5">
              <div className="bg-forest-green rounded-2xl p-6 text-white">
                <p className="font-comfortaa text-xs text-lime-green uppercase tracking-widest mb-3">Program reach</p>
                <p className="font-garamond text-sm text-white/75 leading-relaxed">
                  School programs and community sensitization sessions are currently being scoped.
                  We will publish reach numbers as they are verified.
                </p>
              </div>

              <div className="bg-lime-green/10 rounded-2xl p-6 border border-lime-green/20">
                <h4 className="font-garamond font-semibold text-lg text-text-primary mb-3">
                  Sponsor a school program.
                </h4>
                <p className="font-garamond text-sm text-text-secondary mb-4">
                  Help us bring climate literacy to a school or community in Nigeria or the Sahel.
                </p>
                <Link href="/get-involved/donate" className="btn-primary w-full text-center text-sm">
                  Support this program →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
