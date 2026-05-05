import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Article',
  description: 'Read from the field — Climate & Green World Foundation.',
}

const posts: Record<string, { title: string; date: string; category: string; readTime: string; image: string; body: string }> = {
  '1': {
    title: 'Six Hundred Trees in the Ground: What Our First Planting Season Taught Us',
    date: 'April 2025',
    category: 'Field Updates',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
    body: `We planted 600 trees across one hectare of degraded land in our foundation year. Here is what went right, what went wrong, and what we are doing differently in season two.

The work began in [month] 2025. Our team of ten identified a site showing the characteristic markers of degraded Sahelian landscape: compacted topsoil, sparse groundcover, erosion channels cutting through what had once been productive farmland. The community had been watching the land deteriorate for years.

We started with the soil. Before a single seedling went in, our ecologists were on their knees reading the ground — assessing organic matter levels, identifying compaction layers, documenting which areas held moisture and which shed it immediately after rain. This is the part that never makes the press release. The part that makes or breaks the planting.

The species mix was community-validated. We worked with elders and farmers to identify which trees they remembered from the landscape before degradation — which ones had provided shade, fodder, fruit, timber, or medicine. Then we cross-referenced that knowledge with ecological literature and our field observations. The final mix was native, functional, and meaningful to the people who would live with it.

Six hundred trees went in over [number] weeks. Survival at the time of writing: [XX]%.

What went right: community ownership was real. Several families adopted individual trees — checking on them, reporting irrigation needs, keeping goats away from the young growth. This is exactly what we had hoped to build.

What went wrong: [specific challenge to be documented]. We underestimated [factor]. We have adjusted our planting protocol for season two accordingly.

The hectare is not a forest yet. But it is a start. The soil is already responding. We have documented [specific observation]. Season two begins in [month].`,
  },
  '2': {
    title: 'What Bush Burning Does to Topsoil: A Conversation with Our Field Teams',
    date: 'March 2025',
    category: "Founder's Notes",
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1578836537282-3171d77f8632?w=1200&q=80',
    body: `The damage from a single season of bush burning can take years to reverse. Our ecologists explain what happens under the surface and why sensitization is as important as planting.

Every year across the Sahel and Nigeria's savannah belt, farmers burn their fields after harvest. The reasons are understandable: it clears the debris of the previous season quickly, it kills some pests, and it has been done this way for generations. The problem is what it does below the surface.

A healthy topsoil is not just dirt. It is a living system — billions of microorganisms, fungal networks, invertebrates, plant roots and their decay. It is this living system that holds water, cycles nutrients, and gives crops their yield. When you burn, you kill it. You also volatilize the nitrogen that took years to accumulate. You cook the organic matter that gave the soil its structure. And you leave a surface that, bare and hardened, sheds the next rainfall rather than absorbing it.

One season of burning can set a topsoil back by years. Multiple seasons of burning, compounded by overgrazing and without organic matter inputs, can make land effectively dead — unable to support the crops, trees, or ground cover that would allow it to recover.

This is not a lecture. It is biology. And our sensitization work starts from that biology, not from a moral position.

When we sit with farmers in our program communities, we do not tell them bush burning is wrong. We show them what their soil contains before and after burning. We discuss the economics: what does yield loss cost over five years? We talk about alternatives — composting, mulching, controlled management — that achieve the same agricultural goals without the long-term damage.

The conversation is difficult. But it is the conversation that makes the planting work.`,
  },
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const post = posts[params.id]

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
            <div className="prose-custom">
              {post.body.split('\n\n').map((para, i) => (
                <p key={i} className="font-garamond text-lg text-text-primary leading-relaxed mb-5">
                  {para}
                </p>
              ))}
            </div>

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
