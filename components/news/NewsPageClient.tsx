'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { POSTS, POST_CATEGORY_COLORS } from '@/lib/posts'
import { focus } from '@/lib/imageFocus'

const categories = ['All', 'Field Updates', 'Voices from the Community', 'Research & Learning', "Founder's Notes", 'Press Releases']

export default function NewsPageClient() {
  const [selected, setSelected] = useState('All')
  const [posts, setPosts] = useState(POSTS)
  const [loading, setLoading] = useState(true)

  // Fetch admin-managed posts from storage
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/admin/storage?key=admin_blogs_v2&t=${Date.now()}`, { cache: 'no-store' })
        if (res.ok) {
          const data = await res.json()
          if (data && Array.isArray(data) && data.length > 0) {
            setPosts(data)
          }
        }
      } catch {
        // Use fallback posts on error
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

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

        {loading && (
          <p className="font-garamond text-base text-text-secondary text-center py-8">
            Loading posts...
          </p>
        )}

        {!loading && filtered.length === 0 && (
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
                  style={{ objectPosition: focus(featured.image) }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              </div>
              <div className="p-8 lg:p-10 bg-white flex flex-col justify-center">
                <span className={`inline-flex self-start px-3 py-1 rounded-full font-comfortaa font-semibold text-xs mb-4 ${POST_CATEGORY_COLORS[featured.category] || 'bg-gray-100 text-gray-600'}`}>
                  {featured.category}
                </span>
                <h2 className="font-garamond font-semibold text-2xl md:text-3xl text-text-primary mb-4 leading-snug group-hover:text-forest-green transition-colors duration-200">
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="font-garamond text-base text-text-secondary leading-relaxed mb-5">
                    {featured.excerpt}
                  </p>
                )}
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
                    style={{ objectPosition: focus(post.image) }}
                    loading="lazy"
                  />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full font-comfortaa font-semibold text-xs ${POST_CATEGORY_COLORS[post.category] || 'bg-gray-100 text-gray-600'}`}>
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
                  {post.excerpt && (
                    <p className="font-garamond text-sm text-text-secondary leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
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
