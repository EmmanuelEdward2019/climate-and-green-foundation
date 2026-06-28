import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LiveEditorProvider from "@/components/editor/LiveEditorProvider"

export const metadata: Metadata = {
  metadataBase: new URL('https://climategreenworld.org'),
  title: {
    default: 'Climate & Green World Foundation | Rooted in Africa. Growing a Greener World.',
    template: '%s | Climate & Green World Foundation',
  },
  description:
    'Empowering communities to protect and preserve ecosystems and promote eco-friendly practices across Nigeria and the Sahel.',
  keywords: [
    'climate action',
    'reforestation',
    'Nigeria',
    'Sahel',
    'tree planting',
    'ecological restoration',
    'NGO',
    'sustainability',
    'Africa',
  ],
  authors: [{ name: 'Climate & Green World Foundation' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Climate & Green World Foundation',
    title: 'Climate & Green World Foundation | Rooted in Africa. Growing a Greener World.',
    description:
      'We restore degraded landscapes, defend ecosystems from pollution, and equip communities to thrive in a changing climate.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Climate & Green World Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Climate & Green World Foundation',
    description: 'Rooted in Africa. Growing a Greener World.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Comfortaa:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/favicon.png" type="image/png" sizes="any" />
      </head>
      <body className="font-garamond antialiased">
        <LiveEditorProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LiveEditorProvider>
      </body>
    </html>
  )
}
