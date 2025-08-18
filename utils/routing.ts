import { getDomainConfig } from '@/config/company'

// Utility functions for dynamic routing based on environment

// Get the current domain configuration
export const getCurrentDomain = () => {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    const domainConfig = getDomainConfig()
    
    if (hostname === domainConfig.main && !domainConfig.isProduction) {
      return {
        main: domainConfig.main,
        tools: domainConfig.tools,
        isProduction: false
      }
    } else if (hostname === domainConfig.tools && !domainConfig.isProduction) {
      return {
        main: domainConfig.main,
        tools: domainConfig.tools,
        isProduction: false
      }
    } else if (hostname === domainConfig.tools && domainConfig.isProduction) {
      return {
        main: domainConfig.main,
        tools: domainConfig.tools,
        isProduction: true
      }
    } else if (hostname === domainConfig.main || hostname === `www.${domainConfig.main}`) {
      return {
        main: domainConfig.main,
        tools: domainConfig.tools,
        isProduction: true
      }
    }
  }
  
  // Fallback for server-side rendering
  const domainConfig = getDomainConfig()
  return {
    main: domainConfig.main,
    tools: domainConfig.tools,
    isProduction: domainConfig.isProduction
  }
}

// Generate tool URLs based on current environment
export const getToolUrl = (toolPath: string) => {
  const domain = getCurrentDomain()
  return `https://${domain.tools}${toolPath}`
}

// Generate main site URLs based on current environment
export const getMainSiteUrl = (path: string = '') => {
  const domain = getCurrentDomain()
  return `https://${domain.main}${path}`
}

// Check if current environment is preview
export const isPreviewEnvironment = () => {
  const domain = getCurrentDomain()
  return !domain.isProduction
}