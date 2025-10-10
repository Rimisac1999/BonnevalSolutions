/**
 * ROOT LAYOUT
 * 
 * Main layout for the entire application.
 * - Sets up global fonts and styles
 * - Defines SEO metadata using centralized company config
 * - Integrates Voiceflow chat widget (client-side only)
 * 
 * The Voiceflow widget is dynamically loaded to prevent SSR issues.
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getCompanyInfo } from '@/config/company'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${getCompanyInfo.name()} - AI Solutions, Web Development & Digital Transformation`,
  description: 'Expert consultancy specializing in AI automation, custom website development, platform migration, and small-scale ERP solutions for small-to-medium businesses.',
  keywords: 'AI automation, web development, website migration, ERP solutions, digital transformation, WordPress migration, Shopify migration, custom websites, Next.js development',
  authors: [{ name: getCompanyInfo.name() }],
  metadataBase: new URL('https://bonnevalsolutions.com'),
  openGraph: {
    title: `${getCompanyInfo.name()} - AI Solutions, Web Development & Digital Transformation`,
    description: 'Expert consultancy for small-to-medium businesses. AI automation, custom websites, platform migrations, and ERP solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://bonnevalsolutions.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${getCompanyInfo.name()} - AI Solutions, Web Development & Digital Transformation`,
    description: 'Expert consultancy for small-to-medium businesses. AI automation, custom websites, platform migrations, and ERP solutions.',
  },
}

// Voiceflow widget - dynamically loaded to avoid SSR issues
import dynamic from 'next/dynamic'
const VoiceflowWidget = dynamic(() => import('@/components/VoiceflowWidget'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <VoiceflowWidget />
      </body>
    </html>
  )
} 