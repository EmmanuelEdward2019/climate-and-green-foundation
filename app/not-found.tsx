import Link from 'next/link'
import { ArrowRight, TreePine } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d2e17] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <TreePine size={56} className="text-lime-green mx-auto mb-6 opacity-80" />
        <p className="font-comfortaa font-bold text-xs text-lime-green uppercase tracking-widest mb-4">
          404 — Page Not Found
        </p>
        <h1 className="font-garamond font-bold text-white text-4xl md:text-5xl leading-tight mb-6">
          This path leads nowhere.
        </h1>
        <p className="font-garamond text-white/60 text-lg leading-relaxed mb-10">
          The page you are looking for doesn't exist or has been moved. Let's get you back to the work that matters.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-lime-green hover:bg-lime-green-dark text-white font-comfortaa font-bold text-sm rounded-xl transition-all duration-200"
        >
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
