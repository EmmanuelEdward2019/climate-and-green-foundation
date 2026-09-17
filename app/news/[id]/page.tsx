'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import AudioReportPlayer from '@/components/ui/AudioReportPlayer'
import FieldVideoGrid from '@/components/ui/FieldVideoGrid'
import { ENVIRONMENT_WEEK_IMAGES } from '@/lib/media'
import { POSTS_BY_ID, type Post as BlogPost } from '@/lib/posts'

export default function ArticlePage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Try to load from admin storage
        const res = await fetch(`/api/admin/storage?key=admin_blogs_v2&t=${Date.now()}`, { cache: 'no-store' })
        if (res.ok) {
          const data = await res.json()
          if (data && Array.isArray(data) && data.length > 0) {
            const found = data.find((p: BlogPost) => p.id === params.id)
            if (found) {
              setPost(found)
              setLoading(false)
              return
            }
          }
        }
      } catch {
        // Fall through to fallback
      }

      // Fallback to hardcoded posts
      const fallback = POSTS_BY_ID[params.id]
      if (fallback) {
        setPost(fallback)
      }
      setLoading(false)
    }
    fetchPost()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-forest-green border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-garamond text-text-secondary">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="heading-lg mb-4">Article not found</h1>
          <Link href="/news" className="btn-primary">← Back to News</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero image */}
      <div className="relative h-[50vh] min-h-80 mt-16 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 bg-lime-green text-white rounded-full font-comfortaa font-semibold text-xs mb-4">
              {post.category}
            </span>
            <h1 className="font-garamond font-semibold text-white text-3xl md:text-4xl leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border-color">
              <Link
                href="/news"
                className="flex items-center gap-1.5 font-comfortaa text-sm text-text-secondary hover:text-forest-green transition-colors duration-200"
              >
                <ArrowLeft size={14} />
                Back to News
              </Link>
              <span className="text-border-color">·</span>
              <div className="flex items-center gap-1.5 text-text-secondary">
                <Calendar size={13} />
                <span className="font-comfortaa text-xs">{post.date}</span>
              </div>
              <span className="text-border-color">·</span>
              <div className="flex items-center gap-1.5 text-text-secondary">
                <Clock size={13} />
                <span className="font-comfortaa text-xs">{post.readTime}</span>
              </div>
            </div>

            {/* Body */}
            {post.body.trim() && (
              <div className="prose-custom">
                {post.body.split('\n\n').map((para, i) => (
                  <p key={i} className="font-garamond text-lg text-text-primary leading-relaxed mb-5">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* Environment Week: group pictures, field video and the audio report */}
            {post.media && (
              <div className="mt-12 space-y-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {ENVIRONMENT_WEEK_IMAGES.map((image) => (
                    <div key={image.src} className="media-image-frame">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                      <div className="media-image-caption">
                        <span className="font-comfortaa text-xs uppercase tracking-widest text-lime-green">
                          {image.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <span className="section-tag mb-6">
                    <span className="w-4 h-0.5 bg-lime-green" />
                    Field Documentation
                  </span>
                  <div className="mt-6">
                    <FieldVideoGrid />
                  </div>
                </div>

                <div>
                  <span className="section-tag mb-6">
                    <span className="w-4 h-0.5 bg-lime-green" />
                    Listen
                  </span>
                  <div className="mt-6">
                    <AudioReportPlayer />
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-14 pt-8 border-t border-border-color">
              <div className="bg-forest-green rounded-2xl p-8 text-center">
                <h3 className="font-garamond font-semibold text-2xl text-white mb-3">
                  Follow the work.
                </h3>
                <p className="font-garamond text-white/75 mb-5">
                  Monthly field updates from our project sites. No spam.
                </p>
                <Link href="/get-involved/newsletter" className="btn-secondary">
                  Subscribe to our newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
