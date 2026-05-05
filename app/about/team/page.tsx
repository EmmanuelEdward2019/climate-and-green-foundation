import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Founder & Team',
  description: 'Meet Dr. Ike Anosike and the team behind Climate & Green World Foundation.',
}

const teamPlaceholders = [
  { name: '[Name]', role: 'Program Manager', bio: 'Overseeing our flagship tree-planting and landscape restoration program across Nigeria.' },
  { name: '[Name]', role: 'Community Organizer', bio: 'Building trust and co-designing projects with the communities at the center of our work.' },
  { name: '[Name]', role: 'Field Ecologist', bio: 'Monitoring restoration progress, measuring biodiversity, and guiding species selection.' },
  { name: '[Name]', role: 'Sensitization Officer', bio: 'Facilitating community awareness sessions on bush burning, charcoal production, and ecological harm.' },
  { name: '[Name]', role: 'Education Coordinator', bio: 'Developing climate curriculum and running school eco-clubs in our program communities.' },
  { name: '[Name]', role: 'Partnerships & Comms', bio: 'Managing relationships with corporate and institutional partners and handling external communications.' },
]

export default function TeamPage() {
  return (
    <>
      <PageHero
        tag="Founder & Team"
        headline="The people behind the work."
        subheadline="A team of ten ecologists, community organizers, sensitization officers, and field staff working across Nigeria and the Sahel."
        image="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=80"
      />

      {/* Founder section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-neutral-bg border border-border-color overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-forest-green/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-garamond font-semibold text-4xl text-forest-green">IA</span>
                  </div>
                  <p className="font-comfortaa text-sm text-text-secondary">
                    [Portrait photo to be supplied]
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-lime-green text-white px-5 py-3 rounded-xl">
                <p className="font-comfortaa font-bold text-sm">Founder</p>
                <p className="font-comfortaa text-xs opacity-80">Est. 2025</p>
              </div>
            </div>

            {/* Founder bio */}
            <div>
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Founder
              </span>
              <h2 className="heading-lg mt-4 mb-6 green-line">Dr. Ike Anosike</h2>
              <div className="space-y-4 body-md">
                <p>
                  Dr. Ike Anosike holds a PhD in [field] and has spent [number] years working at
                  the intersection of ecology, community development, and environmental policy.
                </p>
                <p>
                  Before founding Climate & Green World Foundation, he [short summary of prior
                  work, publications, or roles]. He spent years working as a lone voice on
                  Nigeria's most pressing ecological challenges before formalizing the Foundation in
                  2025.
                </p>
                <p>
                  He founded the Foundation to channel decades of personal commitment into an
                  institution capable of carrying the work forward — beyond any one person, beyond
                  any one season.
                </p>
              </div>

              {/* Placeholder for publications */}
              <div className="mt-8 p-5 rounded-xl bg-neutral-bg border border-border-color">
                <p className="font-comfortaa font-semibold text-sm text-text-primary mb-1">
                  Publications & Research
                </p>
                <p className="font-garamond text-sm text-text-secondary italic">
                  [Publication links to be added]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="section-padding bg-neutral-bg">
        <div className="container-max">
          <div className="mb-12">
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              Our Team
            </span>
            <h2 className="heading-lg mt-4 mb-4">Small by design. Growing by season.</h2>
            <p className="body-md max-w-2xl">
              We are a team of ten. Each person is here because they believe climate work should
              be African-led, measured honestly, and delivered with community at the center.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamPlaceholders.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-border-color hover:border-forest-green hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
                  <span className="font-garamond font-semibold text-xl text-forest-green">
                    {member.name === '[Name]' ? '?' : member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-garamond font-semibold text-lg text-text-primary mb-0.5">
                  {member.name}
                </h3>
                <p className="font-comfortaa font-semibold text-xs text-forest-green mb-3">
                  {member.role}
                </p>
                <p className="font-garamond text-sm text-text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center font-garamond text-base text-text-secondary italic mt-8">
            Team member names and photos to be supplied before launch.
          </p>
        </div>
      </section>
    </>
  )
}
