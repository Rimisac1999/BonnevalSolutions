import { getCompanyInfo } from '@/config/company'
import { companyConfig } from '@/config/company'
import Image from 'next/image'

export default function ToolsFooter() {
  return (
    <footer className="bg-surface-1 border-t border-white/[0.06] mt-auto">
      <div className="container-brand px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src={companyConfig.branding.logo}
                alt="Bonneval Solutions"
                width={140}
                height={36}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/50 mb-4 max-w-md">
              AI automation and process optimization for B2B companies.
              Specializing in workflow automation, AI agents, and custom digital systems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/bonnevalsolutions"
                className="text-white/30 hover:text-white/60 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/bonnevalsolutions"
                className="text-white/30 hover:text-white/60 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white/40 hover:text-blue-light transition-colors">
                  Tools Home
                </a>
              </li>
              <li>
                <a href="/memorizer" className="text-white/40 hover:text-blue-light transition-colors">
                  Memorizer Tool
                </a>
              </li>
              <li>
                <a href="https://bonnevalsolutions.com" className="text-white/40 hover:text-blue-light transition-colors">
                  Main Site
                </a>
              </li>
            </ul>
          </div>

          {/* External Services */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://intranet.bonnevalsolutions.com" className="text-white/40 hover:text-blue-light transition-colors" target="_blank" rel="noopener noreferrer">
                  Intranet
                </a>
              </li>
              <li>
                <a href="https://client.bonnevalsolutions.com" className="text-white/40 hover:text-blue-light transition-colors" target="_blank" rel="noopener noreferrer">
                  Client Portal
                </a>
              </li>
              <li>
                <a href={`mailto:${getCompanyInfo.contactEmail()}`} className="text-white/40 hover:text-blue-light transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/30 text-sm">
              {getCompanyInfo.copyright()}
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-white/30">
              <a href="/privacy" className="hover:text-blue-light transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-blue-light transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-blue-light transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
