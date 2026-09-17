import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'How Dr. Ike Anosike turned years of personal commitment into Climate & Green World Foundation.',
}

const timeline = [
  {
    year: 'Years Before',
    title: 'One man & a dream.',
    body: 'Dr. Ike Anosike worked as a lone voice - planting where he could, speaking where he could, documenting what he saw.',
    image: '/images/the-founder.png',
    imageAlt: 'Dr. Ike Anosike, Founder',
  },
  {
    year: '2026',
    title: 'Making it official.',
    body: 'The Climate & Green World Foundation is registered with the Corporate Affairs Commission of Nigeria. The lone voice becomes an institution.',
    image: '/images/environment-week-group-1.png',
    imageAlt: 'Foundation registration',
  },
  {
    year: 'Since then',
    title: 'Starting with what we have.',
    body: 'Six hundred trees in the ground. 200 students enlightened. Ten people committed to the work. The number keeps going up.',
    image: '/images/tree-planting-welcome.png',
    imageAlt: 'Trees being planted',
  },
  {
    year: 'Season by Season',
    title: 'The curve upward.',
    body: 'Each season adds more trees, people, and knowledge. The vision grows. The numbers grow. The partnerships are forthcoming.',
    image: '/images/environment-week-group-2.png',
    imageAlt: 'Green landscape growing',
  },
]

/* Staggered masonry photo grid for the visual break section */
const gridPhotos = [
  { src: '/images/tree-planting-welcome.png', alt: 'Planting a native seedling', span: 'row-span-2' },
  { src: '/images/environment-week-group-1.png', alt: 'World Environment Day tree planting', span: '' },
  { src: '/images/environment-week-group-2.png', alt: 'Community engagement', span: '' },
  { src: '/images/environmental-preservation-2.png', alt: 'Felled trees hauled for firewood', span: '' },
  { src: '/images/Bunkering 1(1).png', alt: 'Documented bunkering site, Niger Delta', span: '' },
]

export default function StoryPage() {
  return (
    <>
      <PageHero
        tag="Our Story"
        headline="A foundation that started with one man, a deep conviction and a growing purpose."
        image="/images/the-founder.png"
      />

      {/* Story narrative */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Main text */}
            <div>
              <span className="section-tag mb-6">
                <span className="w-4 h-0.5 bg-lime-green" />
                The Beginning
              </span>
              <div className="prose-custom space-y-5">
                <p className="font-garamond text-xl font-semibold text-text-primary leading-relaxed italic">
                  For years Dr. Ike Anosike worked alone.
                </p>
                <p>
                  A socio-scientist and a lover of nature, he watched the abuse of our environment
                  and knew he had to act.
                </p>
                <p>
                  Concerned about these destructions; the loss of Green Spaces, pollution and
                  indiscriminate waste disposal, the combined pressure of deforestation, chopping
                  down of trees for charcoal production, and the slow erosion of community
                  heritage, he was compelled to act. What began as a deep concern for the
                  environment gradually became a commitment to make a difference. He started where
                  he could; his house, schools, space for a tree he planted. He spoke to students
                  and pupils, to communities and anyone who would listen. These obsessions
                  inevitably formed the building blocks of what crystallized into CLIMATE &amp;
                  GREEN WORLD FOUNDATION, registered with the corporate affairs commission of
                  Nigeria, as a Non-Governmental Organization with a purpose to internationalise
                  the work he&apos;s been doing. So far, this singular act has attracted 10 staff
                  and volunteers. More than 200 students have been spoken to about Climate change
                  and what to do about it. Equally, 600 trees have been planted at different
                  communities and we have continued to plant where we could because we have this
                  conviction that a clean and Green world is possible, when we all play a role.
                </p>
              </div>

              <Link
                href="/about/team"
                className="inline-flex items-center gap-2 mt-8 font-comfortaa font-semibold text-sm text-forest-green hover:text-lime-green transition-colors duration-200 group"
              >
                Meet the team
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: Timeline with images */}
            <div>
              <h3 className="font-garamond font-bold text-xl text-text-primary mb-8">Our journey</h3>
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex gap-4">
                    {/* Vertical line */}
                    {i < timeline.length - 1 && (
                      <div className="absolute left-[17px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-lime-green/50 to-transparent z-0" />
                    )}
                    {/* Dot */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-lime-green flex items-center justify-center z-10 mt-1 shadow-md">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                    {/* Content card */}
                    <div className="flex-1 pb-8">
                      <div className="bg-white border border-border-color rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                        {/* Image strip */}
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-forest-green/70 to-transparent" />
                          <div className="absolute bottom-3 left-4">
                            <span className="font-comfortaa font-bold text-xs text-lime-green uppercase tracking-widest">
                              {item.year}
                            </span>
                          </div>
                        </div>
                        {/* Text */}
                        <div className="p-4">
                          <h4 className="font-garamond font-bold text-lg text-text-primary mb-1">{item.title}</h4>
                          <p className="font-garamond text-sm text-text-secondary leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staggered photo grid - visual break */}
      <section className="py-0 bg-white overflow-hidden">
        <div className="grid grid-cols-3 grid-rows-2 gap-1" style={{ height: '420px' }}>
          {/* Large left */}
          <div className="relative row-span-2 overflow-hidden group">
            <img src={gridPhotos[0].src} alt={gridPhotos[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-forest-green/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          {/* Top middle */}
          <div className="relative overflow-hidden group">
            <img src={gridPhotos[1].src} alt={gridPhotos[1].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-forest-green/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          {/* Top right */}
          <div className="relative overflow-hidden group">
            <img src={gridPhotos[2].src} alt={gridPhotos[2].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-forest-green/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          {/* Bottom middle */}
          <div className="relative overflow-hidden group">
            <img src={gridPhotos[3].src} alt={gridPhotos[3].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-forest-green/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          {/* Bottom right */}
          <div className="relative overflow-hidden group">
            <img src={gridPhotos[4].src} alt={gridPhotos[4].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            {/* Overlay with tagline */}
            <div className="absolute inset-0 bg-forest-green/50 flex items-center justify-center">
              <p className="font-garamond italic text-white text-center px-4 text-lg leading-relaxed">
                "A planet where nature thrives."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-20 px-4 bg-forest-green">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-garamond italic text-2xl md:text-3xl text-white leading-relaxed mb-6">
            "The vision is big and the numbers are growing."
          </p>
          <p className="font-comfortaa font-semibold text-sm text-lime-green">
            - Dr. Ike Anosike, Founder
          </p>
        </div>
      </section>

      {/* Vision & Mission recap */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="space-y-10">
            {[
              { label: 'Vision', text: 'A clear and green environment where nature thrives. African communities leading the way.' },
              { label: 'Mission', text: 'Empowering communities to protect and preserve ecosystems and to promote eco-friendly practices.' },
            ].map((item) => (
              <div key={item.label} className="border-l-4 border-lime-green pl-6">
                <span className="font-comfortaa font-semibold text-xs text-lime-green uppercase tracking-widest block mb-2">
                  {item.label}
                </span>
                <p className="font-garamond font-semibold text-2xl text-text-primary leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
