import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import NewsPageClient from '@/components/news/NewsPageClient'

export const metadata: Metadata = {
  title: 'News & Stories',
  description: 'Activities, community voices, environmental stories and organizational news from Climate & Green World Foundation.',
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        tag="News & Stories"
        headline="News & Stories"
        subheadline="We showcase activities, community voices, environmental stories and organizational news."
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80"
      />
      <NewsPageClient />
    </>
  )
}
