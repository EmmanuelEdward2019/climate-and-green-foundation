'use client'

import { useRef, useState, useEffect } from 'react'
import { BUNKERING_IMAGES, FIELD_VIDEOS } from '@/lib/media'

type GalleryItem =
  | { type: 'image'; src: string; caption: string; tag: string }
  | { type: 'video'; src: string; caption: string; tag: string }

const photos: GalleryItem[] = [
  ...BUNKERING_IMAGES.map((img) => ({
    type: 'image' as const,
    src: img.src,
    caption: 'Documented bunkering and environmental impact, Niger Delta',
    tag: 'Bunkering',
  })),
  ...FIELD_VIDEOS.slice(0, 3).map((vid) => ({
    type: 'video' as const,
    src: vid.src,
    caption: 'Field documentation from affected communities',
    tag: 'Field Video',
  })),
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80',
    caption: 'Native species planting, Nigeria',
    tag: 'Restoration',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80',
    caption: 'Forest canopy, Niger Delta region',
    tag: 'Ecosystem',
  },
]

export default function FieldGallerySection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [activeIdx, setActiveIdx] = useState(0)
  const rafRef = useRef<number | null>(null)

  const pauseRef = useRef(false)
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let lastTime = 0
    const speed = 0.07

    const tick = (time: number) => {
      if (!pauseRef.current) {
        const delta = lastTime ? (time - lastTime) * speed : 0
        track.scrollLeft += delta
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0
        }
        const cardW = track.scrollWidth / (photos.length * 2)
        setActiveIdx(Math.round(track.scrollLeft / cardW) % photos.length)
      }
      lastTime = time
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    pauseRef.current = true
    setIsDragging(true)
    setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0))
    setScrollLeft(trackRef.current?.scrollLeft ?? 0)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollLeft - (x - startX)
  }
  const onMouseUp = () => {
    setIsDragging(false)
    setTimeout(() => {
      pauseRef.current = false
    }, 1200)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    pauseRef.current = true
    setStartX(e.touches[0].pageX)
    setScrollLeft(trackRef.current?.scrollLeft ?? 0)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return
    const x = e.touches[0].pageX
    trackRef.current.scrollLeft = scrollLeft - (x - startX)
  }
  const onTouchEnd = () => {
    setTimeout(() => {
      pauseRef.current = false
    }, 1200)
  }

  const allPhotos = [...photos, ...photos]

  return (
    <section className="py-20 bg-[#0d2e17] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 font-comfortaa font-semibold text-xs uppercase tracking-widest text-lime-green mb-3">
              <span className="w-4 h-0.5 bg-lime-green" />
              From the Field
            </span>
            <h2
              className="font-garamond font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              The work, in pictures and video.
            </h2>
          </div>
          <p className="font-garamond text-white/60 text-base max-w-xs leading-relaxed">
            Drag to explore. Real documentation from bunkering sites and restoration work in
            Nigeria.
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-hidden select-none px-8"
        style={{ cursor: isDragging ? 'grabbing' : 'grab', scrollbarWidth: 'none' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {allPhotos.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden group border border-white/10"
            style={{ width: 'clamp(260px, 28vw, 380px)', height: '460px' }}
          >
            {photo.type === 'image' ? (
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                draggable={false}
                loading="lazy"
              />
            ) : (
              <video
                src={photo.src}
                className="w-full h-full object-cover pointer-events-none"
                muted
                loop
                playsInline
                autoPlay
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block px-2.5 py-1 bg-lime-green text-white font-comfortaa font-bold text-[10px] uppercase tracking-widest rounded-full mb-2">
                {photo.tag}
              </span>
              <p className="font-garamond text-white text-sm leading-snug opacity-90">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              pauseRef.current = true
              if (trackRef.current) {
                const cardW = trackRef.current.scrollWidth / (photos.length * 2)
                trackRef.current.scrollLeft = cardW * i
              }
              setTimeout(() => {
                pauseRef.current = false
              }, 1500)
            }}
            className={`rounded-full transition-all duration-300 ${
              activeIdx === i ? 'w-6 h-2 bg-lime-green' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
