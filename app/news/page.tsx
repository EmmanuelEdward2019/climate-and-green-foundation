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
        subheadline="We showcase activities, community voices, environmental stories and organizational news. Under one headline."
        image="/images/environment-week-group-1.png"
      />
      <NewsPageClient />
    </>
  )
}
