import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { getCompanyInfo } from '@/config/company'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${getCompanyInfo.name()} — Build Smarter Digital Systems`,
  description: 'We build websites and integrate AI into business operations: lead generation, cold outreach, voice assistants, and chatbots. Measurable automation for B2B companies.',
  keywords: 'digital solutions, web development, AI agents, chatbots, voice agents, automation, lead generation, B2B',
  authors: [{ name: getCompanyInfo.name() }],
  metadataBase: new URL('https://bonnevalsolutions.com'),
  openGraph: {
    title: `${getCompanyInfo.name()} — Build Smarter Digital Systems`,
    description: 'We build websites and integrate AI into business operations. Measurable automation for B2B companies.',
    type: 'website',
    locale: 'en_US',
    url: 'https://bonnevalsolutions.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${getCompanyInfo.name()} — Build Smarter Digital Systems`,
    description: 'We build websites and integrate AI into business operations. Measurable automation for B2B companies.',
  },
}

import dynamic from 'next/dynamic'
const VoiceflowWidget = dynamic(() => import('@/components/VoiceflowWidget'), { ssr: false })

import { LanguageProvider } from '@/contexts/LanguageContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <VoiceflowWidget />
      </body>
    </html>
  )
}
