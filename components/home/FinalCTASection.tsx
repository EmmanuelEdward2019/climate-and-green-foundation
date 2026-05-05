import Link from 'next/link'

export default function FinalCTASection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-forest-green overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Lime accent circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-green/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-lime-green/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full font-comfortaa text-xs text-white/80 uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-lime-green" />
          Take Action
        </span>

        <h2
          className="font-garamond font-semibold text-white mb-6"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.15' }}
        >
          The land is ready. The time is now.
        </h2>

        <p className="font-garamond text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you are a corporation looking to meet credible sustainability goals, a
          government agency seeking a delivery partner, or an individual who simply wants to
          help — there is a place for you here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get-involved/corporate"
            className="btn-outline-white w-full sm:w-auto"
          >
            Corporate Partnerships
          </Link>
          <Link
            href="/get-involved/government"
            className="btn-outline-white w-full sm:w-auto"
          >
            Government Partnerships
          </Link>
          <Link
            href="/get-involved/donate"
            className="btn-secondary w-full sm:w-auto"
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  )
}
