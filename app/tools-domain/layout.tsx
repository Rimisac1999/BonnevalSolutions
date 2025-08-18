import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { getCompanyInfo, getDomainConfig } from '@/config/company'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Tools - ${getCompanyInfo.name()}`,
  description: 'Professional tools and utilities for business automation and process optimization.',
  keywords: 'business tools, automation tools, process optimization, workflow tools',
  authors: [{ name: getCompanyInfo.name() }],
  metadataBase: new URL(`https://${getDomainConfig().tools}`),
  openGraph: {
    title: `Tools - ${getCompanyInfo.name()}`,
    description: 'Professional tools and utilities for business automation and process optimization.',
    type: 'website',
    locale: 'en_US',
    url: `https://${getDomainConfig().tools}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Tools - ${getCompanyInfo.name()}`,
    description: 'Professional tools and utilities for business automation and process optimization.',
  },
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          {children}
        </div>
      </body>
    </html>
  )
}