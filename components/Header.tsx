  'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { getCompanyInfo, external } from '@/config/company'
import { getToolUrl } from '@/utils/routing'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const tools = [
  { name: 'Memorizer', href: getToolUrl('/memorizer') },
  { name: 'Tool 2', href: getToolUrl('/tool2') },
  { name: 'Tool 3', href: getToolUrl('/tool3') },
  { name: 'Tool 4', href: getToolUrl('/tool4') },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false)
  const [toolsDropdownVisible, setToolsDropdownVisible] = useState(false)

  // Hover handlers (desktop)
  const handleMouseEnter = () => {
    setToolsDropdownOpen(true)
    setToolsDropdownVisible(true)
  }
  const handleMouseLeave = () => {
    setToolsDropdownVisible(false)
    // small delay to allow fade-out
    setTimeout(() => setToolsDropdownOpen(false), 200)
  }

  // Scroll lock (works on iOS)
  useEffect(() => {
    const html = document.documentElement
    if (mobileMenuOpen) {
      html.style.overflow = 'hidden'
    } else {
      html.style.overflow = ''
    }
    return () => {
      html.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#home" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-gradient">{getCompanyInfo.name()}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            <a
              href={external.intranet}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intranet
            </a>
            <a
              href={external.client}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Client
            </a>

            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="btn-primary inline-flex items-center"
              >
                Tools
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </button>

              {toolsDropdownOpen && (
                <div
                  className={`absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ease-in-out ${
                    toolsDropdownVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {tool.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* ----- Mobile menu rendered in a portal (outside the blurred header) ----- */}
      {mobileMenuOpen &&
        typeof window !== 'undefined' &&
        createPortal(
          <div id="mobile-menu" className="lg:hidden">
            {/* Backdrop */}
            <button
              className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            />

            {/* Panel */}
            <div className="fixed inset-0 z-[9999] bg-white flex flex-col h-dvh">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white flex-shrink-0">
                <span className="text-xl font-semibold text-gray-900">Menu</span>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-6 py-8 [--tw-scrollbar-width:thin]">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Navigation</h3>
                    <div className="space-y-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Tools</h3>
                    <div className="space-y-3">
                      {tools.map((tool) => (
                        <a
                          key={tool.name}
                          href={tool.href}
                          className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {tool.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 space-y-3">
                    <a
                      href={external.intranet}
                      className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors py-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Intranet
                    </a>
                    <a
                      href={external.client}
                      className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors py-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Client Portal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}