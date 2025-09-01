// Utility functions for dynamic routing based on environment

// Get the current domain configuration
export const getCurrentDomain = () => {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    const port = window.location.port
    
    // Handle localhost development
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return {
        main: `localhost:${port || '3000'}`,
        tools: `localhost:${port || '3000'}/tools-domain`,
        isProduction: false,
        isLocalhost: true
      }
    }
    
    if (hostname === 'preview.bonnevalsolutions.com') {
      return {
        main: 'preview.bonnevalsolutions.com',
        tools: 'preview-tools.bonnevalsolutions.com',
        isProduction: false,
        isLocalhost: false
      }
    } else if (hostname === 'preview-tools.bonnevalsolutions.com') {
      return {
        main: 'preview.bonnevalsolutions.com',
        tools: 'preview-tools.bonnevalsolutions.com',
        isProduction: false,
        isLocalhost: false
      }
    } else if (hostname === 'tools.bonnevalsolutions.com') {
      return {
        main: 'bonnevalsolutions.com',
        tools: 'tools.bonnevalsolutions.com',
        isProduction: true,
        isLocalhost: false
      }
    } else if (hostname === 'bonnevalsolutions.com' || hostname === 'www.bonnevalsolutions.com') {
      return {
        main: 'bonnevalsolutions.com',
        tools: 'tools.bonnevalsolutions.com',
        isProduction: true,
        isLocalhost: false
      }
    }
  }
  
  // Fallback for server-side rendering
  const commitRef = process.env.VERCEL_GIT_COMMIT_REF
  const isMainBranch = commitRef ? commitRef === 'main' : false
  const isPreview = !isMainBranch || process.env.NODE_ENV === 'development'
  
  if (isPreview) {
    return {
      main: 'preview.bonnevalsolutions.com',
      tools: 'preview-tools.bonnevalsolutions.com',
      isProduction: false,
      isLocalhost: false
    }
  } else {
    return {
      main: 'bonnevalsolutions.com',
      tools: 'tools.bonnevalsolutions.com',
      isProduction: true,
      isLocalhost: false
    }
  }
}

// Generate tool URLs based on current environment
export const getToolUrl = (toolPath: string) => {
  const domain = getCurrentDomain()
  
  // Handle localhost differently - use relative paths
  if (domain.isLocalhost) {
    return `/tools-domain${toolPath}`
  }
  
  return `https://${domain.tools}${toolPath}`
}

// Generate main site URLs based on current environment
export const getMainSiteUrl = (path: string = '') => {
  const domain = getCurrentDomain()
  
  // Handle localhost differently - use relative paths
  if (domain.isLocalhost) {
    return path.startsWith('/') ? path : `/${path}`
  }
  
  return `https://${domain.main}${path}`
}

// Check if current environment is preview
export const isPreviewEnvironment = () => {
  const domain = getCurrentDomain()
  return !domain.isProduction
}

// Check if current environment is localhost
export const isLocalhostEnvironment = () => {
  const domain = getCurrentDomain()
  return domain.isLocalhost
}