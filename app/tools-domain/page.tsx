import Link from 'next/link'
import ToolsHeader from './components/ToolsHeader'
import ToolsFooter from './components/ToolsFooter'

export default function ToolsHomePage() {
  return (
    <div className="min-h-screen bg-navy flex flex-col">
      <ToolsHeader />

      {/* Main Content */}
      <main className="container-brand px-4 sm:px-6 lg:px-8 py-12 pt-28 flex-1">
        <div className="text-center mb-16">
          <h2 className="font-heading text-white mb-6">
            Professional Tools for Business Automation
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Access our suite of professional tools designed to streamline your business processes,
            enhance productivity, and drive operational efficiency.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Memorizer Tool */}
          <div className="brand-card group">
            <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue transition-colors duration-300">
              <svg className="w-6 h-6 text-blue group-hover:text-navy transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">Memorizer</h3>
            <p className="text-white/50 mb-4">
              Advanced text memorization and learning tool with spaced repetition algorithms.
            </p>
            <Link
              href="/memorizer"
              className="btn-primary text-sm py-2 px-5"
            >
              Launch Tool
            </Link>
          </div>

          {/* Coming Soon Tool */}
          <div className="brand-card opacity-60">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">More Tools Coming</h3>
            <p className="text-white/50 mb-4">
              We&apos;re continuously developing new tools to help your business grow.
            </p>
            <span className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-pill text-white/30 bg-white/5 cursor-not-allowed">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-16 text-center">
          <p className="text-white/30">
            Professional tools for business automation.
          </p>
        </div>
      </main>
      <ToolsFooter />
    </div>
  )
}
