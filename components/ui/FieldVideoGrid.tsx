'use client'

import { useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'
import { FIELD_VIDEOS } from '@/lib/media'

interface FieldVideoGridProps {
  compact?: boolean
}

export default function FieldVideoGrid({ compact = false }: FieldVideoGridProps) {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  return (
    <div
      className={
        compact
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
          : 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'
      }
    >
      {FIELD_VIDEOS.map((video, index) => (
        <VideoCard
          key={video.src}
          src={video.src}
          label={video.label}
          isActive={activeVideo === index}
          onPlay={() => setActiveVideo(index)}
          onPause={() => setActiveVideo((current) => (current === index ? null : current))}
        />
      ))}
    </div>
  )
}

function VideoCard({
  src,
  label,
  isActive,
  onPlay,
  onPause,
}: {
  src: string
  label: string
  isActive: boolean
  onPlay: () => void
  onPause: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (playing) {
      video.pause()
      setPlaying(false)
      onPause()
    } else {
      void video.play()
      setPlaying(true)
      onPlay()
    }
  }

  return (
    <div className="media-video-card group">
      <div className="relative aspect-video bg-black rounded-t-2xl overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          playsInline
          controls={isActive}
          preload="metadata"
          onPlay={() => {
            setPlaying(true)
            onPlay()
          }}
          onPause={() => {
            setPlaying(false)
            onPause()
          }}
          onEnded={() => {
            setPlaying(false)
            onPause()
          }}
        />
        {!playing && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors"
            aria-label={`Play ${label}`}
          >
            <span className="w-14 h-14 rounded-full bg-white/95 text-forest-green flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
              <Play size={24} className="ml-1" />
            </span>
          </button>
        )}
      </div>
      <div className="p-4 bg-white border border-t-0 border-border-color rounded-b-2xl">
        <p className="font-comfortaa text-xs text-forest-green uppercase tracking-wider mb-1">
          Field Video
        </p>
        <p className="font-garamond text-sm text-text-secondary">{label}</p>
      </div>
    </div>
  )
}
