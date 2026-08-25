import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import NewsPageClient from '@/components/news/NewsPageClient'
import WorldEnvironmentDaySection from '@/components/news/WorldEnvironmentDaySection'

export const metadata: Metadata = {
  title: 'News & Stories',
  description: 'Field updates, community voices, research findings, and founder notes from Climate & Green World Foundation.',
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        tag="News & Stories"
        subheadline="We showcase activities, community voices, environmental stories and organizational news. Under one headline."
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80"
      />
      <WorldEnvironmentDaySection />
      <NewsPageClient />
    </>
  )
}
