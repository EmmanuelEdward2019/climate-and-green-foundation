'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { POSTS, POST_CATEGORY_COLORS, WORLD_ENVIRONMENT_DAY_ID } from '@/lib/posts'
import { focus } from '@/lib/imageFocus'

/* Three stories on the homepage: the Environment Day story plus the two most recent */
const homepageIds = [WORLD_ENVIRONMENT_DAY_ID, 'post-1', 'post-3']
const posts = homepageIds
  .map((id) => POSTS.find((post) => post.id === id))
  .filter((post): post is (typeof POSTS)[number] => Boolean(post))

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

        {/* Blog cards - horizontal scroll carousel on mobile, 3-col grid on desktop */}
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
                  style={{ objectPosition: focus(post.image) }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full font-comfortaa font-semibold text-xs ${
                    POST_CATEGORY_COLORS[post.category] || 'bg-white text-forest-green'
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
                {post.excerpt && (
                  <p className="font-garamond text-base text-text-secondary leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                )}

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
