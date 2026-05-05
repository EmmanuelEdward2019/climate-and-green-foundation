interface PageHeroProps {
  tag?: string
  headline: string
  subheadline?: string
  image?: string
  dark?: boolean
}

export default function PageHero({
  tag,
  headline,
  subheadline,
  image,
  dark = true,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      {image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${image}')` }}
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
        <h1
          className="font-garamond font-semibold text-white mb-5 leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
        >
          {headline}
        </h1>
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
