import MemorizerTool from '@/components/tools/MemorizerTool'
import ToolsHeader from '../components/ToolsHeader'
import ToolsFooter from '../components/ToolsFooter'

export default function MemorizerPage() {
  return (
    <div className="min-h-screen bg-navy flex flex-col">
      <ToolsHeader />

      {/* Tool Content */}
      <main className="container-brand px-4 sm:px-6 lg:px-8 py-8 pt-24 flex-1">
        <MemorizerTool />
      </main>

      <ToolsFooter />
    </div>
  )
}
