import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '../globals.css'
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
  title: `Tools — ${getCompanyInfo.name()}`,
  description: 'Professional tools and utilities for business automation and process optimization.',
  keywords: 'business tools, automation tools, process optimization, workflow tools',
  authors: [{ name: getCompanyInfo.name() }],
  metadataBase: new URL('https://tools.bonnevalsolutions.com'),
  openGraph: {
    title: `Tools — ${getCompanyInfo.name()}`,
    description: 'Professional tools and utilities for business automation and process optimization.',
    type: 'website',
    locale: 'en_US',
    url: 'https://tools.bonnevalsolutions.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Tools — ${getCompanyInfo.name()}`,
    description: 'Professional tools and utilities for business automation and process optimization.',
  },
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <div className="min-h-screen bg-navy">
          {children}
        </div>
      </body>
    </html>
  )
}
