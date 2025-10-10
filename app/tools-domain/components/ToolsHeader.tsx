/**
 * TOOLS SUBDOMAIN HEADER COMPONENT
 * 
 * Header for tools.bonnevalsolutions.com
 * - Simplified navigation focused on tools
 * - "Back to Main Site" link for easy navigation
 * - Tools dropdown and mobile menu
 * - Uses centralized company configuration
 */

'use client'

import { useState, useRef, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { getCompanyInfo } from '@/config/company'
import { getMainSiteUrl } from '@/utils/routing'

const tools = [
  { name: 'Memorizer', href: '/memorizer' },
  { name: 'Tool 2', href: '/tool2' },
  { name: 'Tool 3', href: '/tool3' },
  { name: 'Tool 4', href: '/tool4' },
]

export default function ToolsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false)

  // Simplified hover handlers - no complex timing logic needed
  const handleMouseEnter = () => {
    setToolsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setToolsDropdownOpen(false)
  }

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Disable body scroll when mobile menu is open
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

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-gradient">{getCompanyInfo.name()}</span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={handleMobileMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a 
            href={getMainSiteUrl('/')} 
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors duration-200 inline-flex items-center"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Main Site
          </a>
        </div>
        
        {/* Desktop right side */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <a
            href="https://intranet.bonnevalsolutions.com"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Intranet
          </a>
          <a
            href="https://client.bonnevalsolutions.com"
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
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ease-in-out opacity-100"
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
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          
          {/* Mobile menu panel - Full screen overlay */}
          <div className="fixed inset-0 z-[9999] bg-white flex flex-col">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white flex-shrink-0">
              <span className="text-xl font-semibold text-gray-900">Tools Menu</span>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            {/* Mobile navigation - Scrollable content area */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="space-y-6">
                {/* Tools section */}
                <div>
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
                
                {/* External links */}
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <a
                    href="https://intranet.bonnevalsolutions.com"
                    className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Intranet
                  </a>
                  <a
                    href="https://client.bonnevalsolutions.com"
                    className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Client Portal
                  </a>
                  <a
                    href="/"
                    className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
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