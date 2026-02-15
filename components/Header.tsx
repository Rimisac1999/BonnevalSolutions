'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { List, X, CaretDown, GlobeSimple } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getToolUrl } from '@/utils/routing'
import { companyConfig } from '@/config/company'
import Image from 'next/image'

const tools = [
  { name: 'Memorizer', href: getToolUrl('/memorizer') },
  { name: 'Tool 2', href: getToolUrl('/tool2') },
  { name: 'Tool 3', href: getToolUrl('/tool3') },
  { name: 'Tool 4', href: getToolUrl('/tool4') },
]

export default function Header() {
  const { lang, setLang, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const [toolsVisible, setToolsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toolsRef = useRef<HTMLDivElement>(null)

  const navigation = [
    { name: t('Home', 'Accueil'), href: '/#home' },
    { name: t('Services', 'Services'), href: '/#services' },
    { name: t('About', 'À propos'), href: '/#about' },
    { name: t('Contact', 'Contact'), href: '/#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.documentElement.style.overflow = '' }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsVisible(false)
        setTimeout(() => setToolsOpen(false), 200)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleToolsEnter = () => { setToolsOpen(true); setToolsVisible(true) }
  const handleToolsLeave = () => {
    setToolsVisible(false)
    setTimeout(() => setToolsOpen(false), 200)
  }

  return (
    <>
      {/* Frosted glass navigation bar */}
      <header className={`fixed inset-x-0 top-0 z-50 nav-glass transition-all duration-300 ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
        <nav className="container-brand flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8" aria-label="Global">
          {/* Logo — 32px height per brand guidelines */}
          <a href="/" className="flex items-center">
            <Image
              src={companyConfig.branding.logo}
              alt="Bonneval Solutions"
              width={120}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden -m-2.5 p-2.5 text-white/70 hover:text-white rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open menu</span>
            <List size={24} />
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-150"
              >
                {item.name}
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors duration-150"
              aria-label="Toggle language"
            >
              <GlobeSimple size={16} />
              {lang === 'en' ? 'FR' : 'EN'}
            </button>

            <a href="https://intranet.bonnevalsolutions.com" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-150" target="_blank" rel="noopener noreferrer">
              Intranet
            </a>
            <a href="https://client.bonnevalsolutions.com" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-150" target="_blank" rel="noopener noreferrer">
              Client
            </a>

            {/* Tools dropdown — hidden for now */}
            {/* <div ref={toolsRef} className="relative" onMouseEnter={handleToolsEnter} onMouseLeave={handleToolsLeave}>
              <button className="btn-primary text-sm py-2 px-5 inline-flex items-center gap-1.5">
                Tools
                <CaretDown size={14} className={`transition-transform ${toolsVisible ? 'rotate-180' : ''}`} />
              </button>
              {toolsOpen && (
                <div className={`absolute right-0 mt-2 w-44 bg-surface-2 rounded-card border border-white/10 py-1 transition-all duration-200 ${toolsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  {tools.map((tool) => (
                    <a key={tool.name} href={tool.href} className="block px-4 py-2.5 text-sm text-white/70 hover:bg-surface-3 hover:text-white transition-colors">
                      {tool.name}
                    </a>
                  ))}
                </div>
              )}
            </div> */}
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && typeof window !== 'undefined' && createPortal(
        <div className="lg:hidden">
          <button className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" />
          <div className="fixed inset-y-0 right-0 z-[9999] w-full max-w-sm bg-navy flex flex-col h-dvh shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <Image
                src={companyConfig.branding.logo}
                alt="Bonneval Solutions"
                width={100}
                height={28}
                className="h-7 w-auto"
              />
              <button className="-m-2 p-2 text-white/70 hover:text-white rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="block py-3 text-base font-medium text-white/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Tools section — hidden for now */}
              {/* <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs font-semibold text-mid-gray uppercase tracking-wider mb-3">Tools</p>
                {tools.map((tool) => (
                  <a key={tool.name} href={tool.href} className="block py-2.5 text-base font-medium text-white/70 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    {tool.name}
                  </a>
                ))}
              </div> */}

              <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                <a href="https://intranet.bonnevalsolutions.com" className="block py-2.5 text-base font-medium text-white/70 hover:text-gold" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  Intranet
                </a>
                <a href="https://client.bonnevalsolutions.com" className="block py-2.5 text-base font-medium text-white/70 hover:text-gold" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  Client Portal
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-white/10">
              <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-gold transition-colors">
                <GlobeSimple size={20} />
                {lang === 'en' ? 'Passer en Français' : 'Switch to English'}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
