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
    title: 'One man. One question.',
    body: 'Dr. Ike Anosike works as a lone voice — planting what he can, speaking where he can, documenting what he sees. The forests strain. The rivers darken. The land shrinks.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=75',
    imageAlt: 'Forest landscape under pressure',
  },
  {
    year: '2025',
    title: 'Making it official.',
    body: 'The Climate & Green World Foundation is registered with the Corporate Affairs Commission of Nigeria. The lone voice becomes an institution. The personal commitment becomes a team.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=75',
    imageAlt: 'Foundation registration',
  },
  {
    year: 'Year One',
    title: 'Starting with what we have.',
    body: 'Six hundred trees in the ground. One hectare under restoration. Ten people committed to the work. A foundation year of honest numbers and honest learning.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=75',
    imageAlt: 'Trees being planted',
  },
  {
    year: 'Season by Season',
    title: 'The curve upward.',
    body: 'Each season adds trees, land, people, and knowledge. The vision grows. The numbers grow. The partnerships take shape.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=75',
    imageAlt: 'Green landscape growing',
  },
]

/* Staggered masonry photo grid for the visual break section */
const gridPhotos = [
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80', alt: 'Forest path', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=700&q=80', alt: 'Savannah landscape', span: '' },
  { src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=700&q=80', alt: 'Community work', span: '' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80', alt: 'Open landscape', span: '' },
  { src: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=700&q=80', alt: 'Nature close-up', span: '' },
]

export default function StoryPage() {
  return (
    <>
      <PageHero
        tag="Our Story"
        headline="A foundation that started with one man and a question."
        image="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
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
                  For years, Dr. Ike Anosike worked alone.
                </p>
                <p>
                  A scientist by training and a lover of nature by disposition, he watched the
                  landscapes he had grown up loving — the forests, the riverbanks, the farmland of
                  Nigeria and the wider Sahel — strain and shrink under the combined pressures of
                  climate change, deforestation, oil pollution, and the slow erosion of community
                  knowledge. He planted what he could. He spoke where he could. He documented what
                  he saw.
                </p>
                <p>
                  In 2025, he made it official.
                </p>
                <p>
                  The Climate & Green World Foundation was registered with the Corporate Affairs
                  Commission of Nigeria as a non-governmental organization with one purpose: to take
                  the work he had been doing as an individual and turn it into something that could
                  outlast any one person. A foundation. A team. A long horizon.
                </p>
                <p>
                  We started with what we had — a hectare of land, six hundred trees, ten people
                  committed to the work. We are growing season by season. The vision is sustainable:
                  a planet where nature thrives.
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

      {/* Staggered photo grid — visual break */}
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
            "The vision is bigger than the numbers. The numbers are growing every season."
          </p>
          <p className="font-comfortaa font-semibold text-sm text-lime-green">
            — Dr. Ike Anosike, Founder
          </p>
        </div>
      </section>

      {/* Vision & Mission recap */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="space-y-10">
            {[
              { label: 'Vision', text: 'A sustainable planet where nature thrives.' },
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
