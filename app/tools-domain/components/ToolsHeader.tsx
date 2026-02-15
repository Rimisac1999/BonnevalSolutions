'use client'

import { useState, useRef, useEffect } from 'react'
import { List, X, CaretDown } from '@phosphor-icons/react'
import { getCompanyInfo } from '@/config/company'
import { companyConfig } from '@/config/company'
import Image from 'next/image'

const tools = [
  { name: 'Memorizer', href: '/memorizer' },
  { name: 'Tool 2', href: '/tool2' },
  { name: 'Tool 3', href: '/tool3' },
  { name: 'Tool 4', href: '/tool4' },
]

export default function ToolsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false)
  const [toolsDropdownVisible, setToolsDropdownVisible] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setToolsDropdownOpen(true)
    setToolsDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setToolsDropdownVisible(false)
      setTimeout(() => setToolsDropdownOpen(false), 200)
    }, 100)
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 nav-glass border-b border-white/[0.06]">
      <nav className="container-brand flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8" aria-label="Global">
        {/* Logo */}
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
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <List size={24} />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-150">
            Home
          </a>
        </div>

        {/* Desktop right side */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <a href="https://intranet.bonnevalsolutions.com" className="btn-secondary text-sm py-2 px-5" target="_blank" rel="noopener noreferrer">
            Intranet
          </a>
          <a href="https://client.bonnevalsolutions.com" className="btn-secondary text-sm py-2 px-5" target="_blank" rel="noopener noreferrer">
            Client
          </a>

          {/* Tools Dropdown */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="btn-primary text-sm py-2 px-5 inline-flex items-center gap-1.5">
              Tools
              <CaretDown size={14} className={`transition-transform ${toolsDropdownVisible ? 'rotate-180' : ''}`} />
            </button>

            {toolsDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 bg-surface-2 rounded-card border border-white/10 py-1 transition-all duration-200 ${
                  toolsDropdownVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {tools.map((tool) => (
                  <a key={tool.name} href={tool.href} className="block px-4 py-2.5 text-sm text-white/70 hover:bg-surface-3 hover:text-white transition-colors">
                    {tool.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-0 z-[9999] bg-navy flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <span className="text-xl font-heading font-semibold text-white">Tools Menu</span>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white/70 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Tools</h3>
                  <div className="space-y-3">
                    {tools.map((tool) => (
                      <a key={tool.name} href={tool.href} className="block text-lg font-medium text-white/80 hover:text-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                        {tool.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <a href="https://intranet.bonnevalsolutions.com" className="block text-lg font-medium text-white/80 hover:text-gold transition-colors py-2" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                    Intranet
                  </a>
                  <a href="https://client.bonnevalsolutions.com" className="block text-lg font-medium text-white/80 hover:text-gold transition-colors py-2" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                    Client Portal
                  </a>
                  <a href="/" className="block text-lg font-medium text-white/80 hover:text-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                    Main Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
