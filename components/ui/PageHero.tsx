import { focus } from '@/lib/imageFocus'

interface PageHeroProps {
  tag?: string
  headline?: React.ReactNode
  subheadline?: string
  image?: string
  /**
   * Focal point of the background image, as a CSS background-position.
   * Defaults to the image's entry in the focal-point map, so a portrait or
   * group photo keeps its faces in frame without each page having to say so.
   */
  imagePosition?: string
  /**
   * Minimum height of the hero band. Defaults to a height that gives the
   * Foundation's portrait and group photography room to show faces.
   */
  minHeight?: string
  dark?: boolean
}

export default function PageHero({
  tag,
  headline,
  subheadline,
  image,
  imagePosition,
  minHeight = '520px',
  dark = true,
}: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center"
      style={{ minHeight }}
    >
      {/* Background */}
      {image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${image}')`, backgroundPosition: imagePosition ?? focus(image) }}
          />
          <div className="hero-overlay absolute inset-0" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-green" />
      )}

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-lime-green/10 rounded-full -z-0" />
      <div className="absolute bottom-0 left-10 w-48 h-48 bg-white/5 rounded-full -z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {tag && (
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full font-comfortaa text-xs text-white/80 uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-green" />
            {tag}
          </span>
        )}
        {headline && (
          <h1
            className="font-garamond font-semibold text-white mb-5 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            {headline}
          </h1>
        )}
        {subheadline && (
          <p
            className="font-garamond text-white/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
          >
            {subheadline}
          </p>
        )}
      </div>
    </section>
  )
}
