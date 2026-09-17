import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Founder & Team',
  description: 'Meet Dr. Ike Anosike and the team behind Climate & Green World Foundation.',
}

const whatWeDo = [
  'Climate change and environmental education',
  'Community climate awareness and sensitisation',
  'Tree planting and ecosystem restoration',
  'Youth and school environmental programmes',
  'Partnerships and advocacy for environmental action',
]

const team = [
  {
    name: 'Nnenna Joy Anosike',
    title: 'Head, Program & Projects',
    image: '/images/nnenna-joy-anosike.jpg',
    bio: ['Bsc Estate Management'],
  },
  {
    name: 'Emmanuel Chukwuemeka',
    title: 'Head, Communication & Media',
    image: '/images/emmanuel-chukwuemeka.png',
    bio: [],
  },
  {
    name: 'Frank Okpokam',
    title: 'Head, Finance & Administration',
    image: '/images/okpokam-frank.jpg',
    bio: ['B.A.Hons; Economics|Pub.Administration from Panjab University, Chandigarh, North India.'],
  },
  {
    name: 'Iorna Terhemba Emmanuel',
    title: 'Head, Schools & Community Outreach',
    image: '/images/iorna-terhemba-emmanuel.png',
    bio: [],
  },
  {
    name: 'Fortune Terdoo',
    title: 'Head, Research, Data & Impact',
    image: '/images/fortune-terdoo.png',
    bio: [],
  },
  {
    name: 'Igah Helen Ebam',
    title: 'Communication & Media',
    image: '/images/igah-helen-ebam.png',
    bio: [],
  },
  {
    name: 'Williams Otanwa',
    title: 'Head, Operation, Monitoring & Evaluation',
    image: '/images/williams-otanwa.jpg',
    bio: [],
  },
]

export default function TeamPage() {
  return (
    <>
      <PageHero
        tag="Founder & Team"
        headline="The people behind the work."
        subheadline="A select team of climate enthusiasts, community organizers, and field officers,working across Nigeria and the Sahel"
        image="/images/environment-week-group-1.png"
      />

      {/* Founder section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Founder photo */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-neutral-bg border border-border-color overflow-hidden">
                <img
                  src="/images/the-founder.png"
                  alt="Dr. Ike Anosike, Founder of Climate & Green World Foundation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-lime-green text-white px-5 py-3 rounded-xl">
                <p className="font-comfortaa font-bold text-sm">The Founder</p>
              </div>
            </div>

            {/* Founder bio */}
            <div>
              <span className="section-tag mb-4">
                <span className="w-4 h-0.5 bg-lime-green" />
                Founder
              </span>
              <h2 className="heading-lg mt-4 mb-2 green-line">Dr. Ike Anosike</h2>
              <p className="font-comfortaa font-semibold text-sm text-forest-green mb-6">
                Executive Director | Founder
              </p>
              <div className="space-y-4 body-md">
                <p>
                  Dr Ike Anosike&apos;s love for nature and clean environment led to the
                  formalization of Climate &amp; Green World Foundation.
                </p>
                <p>
                  The Foundation is an environmental and climate-focused organisation committed to
                  protecting nature, strengthening communities and advancing practical solutions to
                  the growing challenges of climate change and environmental degradation.
                </p>
                <p>
                  CGWF was founded on a simple conviction: the environment on which communities
                  depend must be protected, restored and sustainably managed if people and future
                  generations are to thrive.
                </p>
                <p>
                  Across Africa, particularly in vulnerable communities, climate change and
                  environmental degradation are already affecting livelihoods, food security,
                  health and economic opportunities. Deforestation, ecosystem loss, unsustainable
                  land use, pollution and low public awareness continue to place additional
                  pressure on already fragile environments.
                </p>
                <p>
                  CGWF works to bridge the gaps between climate knowledge and practical community
                  action. Our work focuses on climate and environmental awareness, ecosystem
                  restoration, tree planting, biodiversity conservation, sustainable livelihoods,
                  community engagement and climate education.
                </p>
              </div>
            </div>
          </div>

          {/* Continuation of the write-up */}
          <div className="max-w-4xl mt-16">
            <div className="space-y-4 body-md">
              <p>
                We believe that lasting environmental change cannot be achieved by institutions
                alone. Communities must understand the challenges, participate in the solutions and
                have the tools to act.
              </p>
              <p>
                Through partnerships with communities, schools, government institutions, businesses,
                development organisations and other stakeholders, CGWF seeks to turn environmental
                awareness into measurable action and build communities that are better prepared to
                respond to a changing climate.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="heading-md mb-3">Our Vision</h3>
              <p className="body-md">
                A greener, healthier and climate-resilient world where people and nature thrive
                together.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="heading-md mb-3">Our Mission</h3>
              <p className="body-md">
                To empower communities with knowledge, partnerships and practical solutions that
                protect the environment, restore ecosystems and strengthen resilience to climate
                change.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="heading-md mb-4">What We Do</h3>
              <ul className="space-y-2">
                {whatWeDo.map((item) => (
                  <li key={item} className="flex items-start gap-3 body-md">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lime-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="heading-md mb-3">Our Approach</h3>
              <p className="font-garamond font-semibold text-xl text-forest-green mb-4">
                Educate. Engage. Restore. Empower.
              </p>
              <div className="space-y-4 body-md">
                <p>
                  We believe that awareness should lead to action, action should produce measurable
                  results, and successful solutions should be capable of being sustained and
                  replicated.
                </p>
                <p>
                  CGWF welcomes partnerships with individuals, communities, government agencies,
                  businesses, foundations, development organisations and other institutions
                  committed to building a greener and more resilient future.
                </p>
                <p>Together, we can turn climate awareness into climate action.</p>
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
            <h2 className="heading-lg mt-4 mb-4">CGWF - Team and Portfolio</h2>
            <p className="body-md max-w-2xl">
              Meet the people providing leadership and direction across climate and green world
              foundation key areas of work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden border border-border-color hover:border-forest-green hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden bg-neutral-bg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="font-garamond font-semibold text-lg text-text-primary mb-0.5">
                    {member.name}
                  </h3>
                  <p className="font-comfortaa font-semibold text-xs text-forest-green mb-3">
                    {member.title}
                  </p>
                  {member.bio.map((paragraph, i) => (
                    <p
                      key={i}
                      className="font-garamond text-sm text-text-secondary leading-relaxed mb-3 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
