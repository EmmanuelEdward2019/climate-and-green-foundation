import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Founder & Team',
  description: 'Meet Dr. Ike Anosike and the team behind Climate & Green World Foundation.',
}

const teamMembers = [
  {
    name: 'Fortune Terdoo',
    role: 'Medical Student Volunteer',
    bio: 'Fortune Terdoo, a 500 level medical student. My interest in climate change grew out of my journey as a medical student, with a heart set by God\'s grace on specializing in paediatrics. Even at this stage of training, I\'ve seen how climate change isn\'t just an environmental issue but a health crisis unfolding in real time, often affecting children first, through malnutrition, waterborne illness, and heat-related conditions.\n\nAs I train toward a future in paediatrics, I see my role extending beyond the clinic: advocating for policies that protect vulnerable communities from climate-driven health risks, and helping bridge the gaps between environmental awareness and public health action. I believe sustainable, resilient communities begin with informed, committed individuals and I\'m determined to be one of them.',
    image: '/images/fortune-terdoo.png',
  },
  {
    name: 'Igah Helen Ebam',
    role: 'Medical Student Volunteer',
    bio: 'Igah Helen Ebam, also a 500 level medical student. My interest in climate change stems from a fascination with how interconnected biological systems truly are. As a medical student, I\'ve come to appreciate that human health doesn\'t exist in isolation; it responds to shifts in temperature, air quality, food security, and disease patterns, many of which are being reshaped by a changing climate.\n\nThis has sparked a deeper curiosity in me: how do we prepare the next generation of healthcare professionals to anticipate and respond to these shifts? I see this not just as an environmental concern, but as a call to think ahead blending scientific rigor with a genuine commitment to safeguarding the health of future generations.',
    image: '/images/igah-helen-ebam.png',
  },
  {
    name: 'Iorna Terhemba Emmanuel',
    role: 'Field Officer & Community Mobilizer',
    bio: '',
    image: '/images/iorna-terhemba-emmanuel.png',
  },
  {
    name: 'Emmanuel Chukwuemeka',
    role: 'Secretary, Climate and Green World Foundation',
    bio: '',
    image: '/images/emmanuel-chukwuemeka.png',
  },
  {
    name: 'Mr Okpokam Frank',
    role: 'Finance and Administration',
    bio: 'B.A.Hons; Economics|Pub.Administration from Panjab University, Chandigarh, North India.',
    image: null,
  },
  {
    name: 'NNenna Joy Anosike',
    role: 'Executive Director | Policy & Strategy, Climate and Green World Foundation',
    bio: 'Bsc Estate Management',
    image: null,
  },
]

export default function TeamPage() {
  return (
    <>
      <PageHero
        tag="Founder & Team"
        headline="The people behind the work."
        subheadline="A dedicated team of ecologists, community organizers, sensitization officers, and field staff working across Nigeria and the Sahel."
        image="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=80"
      />

      {/* Founder section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder photo */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-neutral-bg border border-border-color overflow-hidden">
                <img
                  src="/images/the-founder.png"
                  alt="Dr. Ike Anosike - Founder"
                  className="w-full h-full object-cover"
                />
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
                  Nigeria&apos;s most pressing ecological challenges before formalizing the Foundation in
                  2025.
                </p>
                <p>
                  He founded the Foundation to channel decades of personal commitment into an
                  institution capable of carrying the work forward - beyond any one person, beyond
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
              We are a team of dedicated individuals. Each person is here because they believe climate work should
              be African-led, measured honestly, and delivered with community at the center.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-border-color hover:border-forest-green hover:shadow-md transition-all duration-300"
              >
                {/* Photo */}
                {member.image ? (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                ) : (
                  <div className="h-56 bg-forest-green/10 flex items-center justify-center">
                    <span className="font-garamond font-semibold text-5xl text-forest-green">
                      {member.name.split(' ').map(n => n.charAt(0)).join('')}
                    </span>
                  </div>
                )}

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-garamond font-semibold text-lg text-text-primary mb-0.5">
                    {member.name}
                  </h3>
                  <p className="font-comfortaa font-semibold text-xs text-forest-green mb-3">
                    {member.role}
                  </p>
                  {member.bio && (
                    <p className="font-garamond text-sm text-text-secondary leading-relaxed line-clamp-4">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
