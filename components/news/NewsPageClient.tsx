'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const categories = ['All', 'Field Updates', 'Voices from the Community', 'Research & Learning', "Founder's Notes", 'Press Releases']

const posts = [
  {
    id: 1,
    title: 'Six Hundred Trees in the Ground: What Our First Planting Season Taught Us',
    excerpt: 'We planted 600 trees across one hectare of degraded land in our foundation year. Here is what went right, what went wrong, and what we are doing differently in season two.',
    date: 'April 2025',
    category: 'Field Updates',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'What Bush Burning Does to Topsoil: A Conversation with Our Field Teams',
    excerpt: 'The damage from a single season of bush burning can take years to reverse. Our ecologists explain what happens under the surface and why sensitization is as important as planting.',
    date: 'March 2025',
    category: "Founder's Notes",
    image: 'https://images.unsplash.com/photo-1578836537282-3171d77f8632?w=800&q=80',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Urban Trees in Lagos: Why City Greening is Climate Action',
    excerpt: "Africa's fastest-growing cities are losing green cover just as they need it most. We make the case for urban greening as a serious climate intervention.",
    date: 'February 2025',
    category: 'Research & Learning',
    image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: "A Farmer's Perspective: Why We Stopped Burning Our Fields",
    excerpt: "One farmer from our first program community explains the conversation that changed how he manages land — and what made the difference between lecture and dialogue.",
    date: 'January 2025',
    category: 'Voices from the Community',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
    readTime: '4 min read',
  },
  {
    id: 5,
    title: 'Why Climate & Green World Foundation Exists: A Note from Dr. Anosike',
    excerpt: 'I spent years watching the landscapes I loved shrink. Here is why I decided a lone voice was no longer enough.',
    date: 'December 2024',
    category: "Founder's Notes",
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    readTime: '8 min read',
  },
  {
    id: 6,
    title: 'Climate & Green World Foundation Registered with CAC Nigeria',
    excerpt: 'We are pleased to announce the formal registration of Climate & Green World Foundation with the Corporate Affairs Commission of Nigeria.',
    date: 'November 2024',
    category: 'Press Releases',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&q=80',
    readTime: '2 min read',
  },
]

const categoryColors: Record<string, string> = {
  'Field Updates': 'bg-forest-green text-white',
  "Founder's Notes": 'bg-lime-green text-white',
  'Research & Learning': 'bg-forest-green/10 text-forest-green',
  'Voices from the Community': 'bg-lime-green/10 text-lime-green-dark',
  'Press Releases': 'bg-gray-100 text-gray-600',
}

export default function NewsPageClient() {
  const [selected, setSelected] = useState('All')

  const filtered = selected === 'All' ? posts : posts.filter((p) => p.category === selected)
  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full font-comfortaa text-xs font-semibold transition-all duration-200 ${
                selected === cat
                  ? 'bg-forest-green text-white'
                  : 'border border-border-color text-text-secondary hover:border-forest-green hover:text-forest-green'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="font-garamond text-base text-text-secondary text-center py-16">
            No posts in this category yet.
          </p>
        )}

        {/* Featured post */}
        {featured && (
          <Link
            href={`/news/${featured.id}`}
            className="group block rounded-2xl overflow-hidden border border-border-color hover:shadow-lg transition-all duration-300 mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              </div>
              <div className="p-8 lg:p-10 bg-white flex flex-col justify-center">
                <span className={`inline-flex self-start px-3 py-1 rounded-full font-comfortaa font-semibold text-xs mb-4 ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <h2 className="font-garamond font-semibold text-2xl md:text-3xl text-text-primary mb-4 leading-snug group-hover:text-forest-green transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="font-garamond text-base text-text-secondary leading-relaxed mb-5">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Calendar size={14} />
                  <span className="font-comfortaa text-xs">{featured.date}</span>
                  <span>·</span>
                  <span className="font-comfortaa text-xs">{featured.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Post grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/news/${post.id}`}
                className="blog-card group block rounded-2xl overflow-hidden border border-border-color hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-card-img w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full font-comfortaa font-semibold text-xs ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3 text-text-secondary">
                    <Calendar size={12} />
                    <span className="font-comfortaa text-xs">{post.date}</span>
                    <span>·</span>
                    <span className="font-comfortaa text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="font-garamond font-semibold text-lg text-text-primary mb-2 leading-snug group-hover:text-forest-green transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="font-garamond text-sm text-text-secondary leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 mt-4 font-comfortaa text-xs font-semibold text-forest-green group-hover:text-lime-green transition-colors duration-200">
                    Read more <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
