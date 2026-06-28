'use client'

import { useRef, useState } from 'react'
import { Play, Pause, Volume2 } from 'lucide-react'
import { CLIMATE_REPORT_AUDIO } from '@/lib/media'

export default function AudioReportPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      void audio.play()
    }
    setPlaying(!playing)
  }

  const handleTimeUpdate = () => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    setProgress((audio.currentTime / audio.duration) * 100)
  }

  const handleEnded = () => {
    setPlaying(false)
    setProgress(0)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    audio.currentTime = ratio * audio.duration
  }

  return (
    <div className="audio-player-card">
      <audio
        ref={audioRef}
        src={CLIMATE_REPORT_AUDIO.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />
      <div className="flex items-start gap-5">
        <button
          type="button"
          onClick={togglePlay}
          className="flex-shrink-0 w-14 h-14 rounded-full bg-forest-green text-white flex items-center justify-center hover:bg-forest-green-dark transition-colors shadow-lg"
          aria-label={playing ? 'Pause report' : 'Play report'}
        >
          {playing ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 size={16} className="text-lime-green flex-shrink-0" />
            <p className="font-comfortaa font-semibold text-sm text-forest-green uppercase tracking-wider">
              Field Report
            </p>
          </div>
          <h3 className="font-garamond font-semibold text-xl text-text-primary mb-3">
            {CLIMATE_REPORT_AUDIO.title}
          </h3>
          <div
            className="h-2 bg-section-divider rounded-full overflow-hidden cursor-pointer"
            onClick={handleSeek}
            role="slider"
            aria-label="Audio progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <div
              className="h-full bg-gradient-to-r from-forest-green to-lime-green rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
