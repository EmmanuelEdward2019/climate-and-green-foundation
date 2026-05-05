'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'Six Hundred Trees in the Ground: What Our First Planting Season Taught Us',
    excerpt:
      'We planted 600 trees across one hectare of degraded land in our foundation year. Here is what went right, what went wrong, and what we are doing differently in season two.',
    date: 'April 2025',
    category: 'Field Updates',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'What Bush Burning Does to Topsoil: A Conversation with Our Field Teams',
    excerpt:
      'The damage from a single season of bush burning can take years to reverse. Our ecologists explain what happens under the surface and why sensitization is as important as planting.',
    date: 'March 2025',
    category: "Founder's Notes",
    image: 'https://images.unsplash.com/photo-1578836537282-3171d77f8632?w=600&q=80',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Urban Trees in Lagos: Why City Greening is Climate Action',
    excerpt:
      'Africa\'s fastest-growing cities are losing green cover just as they need it most. We make the case for urban greening as a serious climate intervention, not just beautification.',
    date: 'February 2025',
    category: 'Research & Learning',
    image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80',
    readTime: '6 min read',
  },
]

const categoryColors: Record<string, string> = {
  'Field Updates': 'bg-forest-green text-white',
  "Founder's Notes": 'bg-lime-green text-white',
  'Research & Learning': 'bg-forest-green/10 text-forest-green',
  'Voices from the Community': 'bg-lime-green/10 text-lime-green',
  'Press Releases': 'bg-gray-100 text-gray-600',
}

export default function FromTheFieldSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-tag mb-4">
              <span className="w-4 h-0.5 bg-lime-green" />
              News & Stories
            </span>
            <h2 className="heading-lg mt-4">From the field.</h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-comfortaa font-semibold text-sm text-forest-green hover:text-lime-green transition-colors duration-200 group flex-shrink-0"
          >
            Read all stories
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog cards — horizontal scroll carousel on mobile, 3-col grid on desktop */}
        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-4 px-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-x-visible md:snap-none md:pb-0 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {posts.map((post, i) => (
            <Link
              key={post.id}
              href={`/news/${post.id}`}
              className="flex-shrink-0 w-[82vw] snap-start md:w-auto blog-card group block rounded-2xl overflow-hidden border border-border-color hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease ${i * 150}ms, transform 0.6s ease ${i * 150}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-img w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full font-comfortaa font-semibold text-xs ${
                    categoryColors[post.category] || 'bg-white text-forest-green'
                  }`}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5 text-text-secondary">
                    <Calendar size={13} />
                    <span className="font-comfortaa text-xs">{post.date}</span>
                  </div>
                  <span className="text-text-secondary">·</span>
                  <span className="font-comfortaa text-xs text-text-secondary">{post.readTime}</span>
                </div>

                <h3 className="font-garamond font-semibold text-lg text-text-primary mb-3 leading-snug group-hover:text-forest-green transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="font-garamond text-base text-text-secondary leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1.5 mt-4 font-comfortaa text-xs font-semibold text-forest-green group-hover:text-lime-green transition-colors duration-200">
                  Read more
                  <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
