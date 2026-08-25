import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import NewsPageClient from '@/components/news/NewsPageClient'

export const metadata: Metadata = {
  title: 'News & Stories',
  description: 'Field updates, community voices, research findings, and founder notes from Climate & Green World Foundation.',
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        tag="News & Stories"
        headline="From the field. In our own words."
        subheadline="Restoration is a story told slowly. We publish from our project sites — updates, essays, community voices, and the hard truths."
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80"
      />
      <NewsPageClient />
    </>
  )
}
