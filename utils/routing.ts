/**
 * ROUTING UTILITIES
 * 
 * Utilities for cross-site navigation between main site and tools subdomain.
 * Handles localhost development and production environments seamlessly.
 */

/**
 * Get the current domain configuration based on hostname
 * Detects: localhost, main site, or tools subdomain
 */
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
        intranet: 'intranet.bonnevalsolutions.com',
        client: 'client.bonnevalsolutions.com',
        isProduction: false,
        isLocalhost: true,
        isToolsSubdomain: false
      }
    }
    
    // Handle tools subdomain
    if (hostname === 'tools.bonnevalsolutions.com') {
      return {
        main: 'bonnevalsolutions.com',
        tools: 'tools.bonnevalsolutions.com',
        intranet: 'intranet.bonnevalsolutions.com',
        client: 'client.bonnevalsolutions.com',
        isProduction: true,
        isLocalhost: false,
        isToolsSubdomain: true
      }
    }
    
    // Handle main site (including www)
    if (hostname === 'bonnevalsolutions.com' || hostname === 'www.bonnevalsolutions.com') {
      return {
        main: 'bonnevalsolutions.com',
        tools: 'tools.bonnevalsolutions.com',
        intranet: 'intranet.bonnevalsolutions.com',
        client: 'client.bonnevalsolutions.com',
        isProduction: true,
        isLocalhost: false,
        isToolsSubdomain: false
      }
    }
  }
  
  // Fallback for server-side rendering - default to production
  return {
    main: 'bonnevalsolutions.com',
    tools: 'tools.bonnevalsolutions.com',
    intranet: 'intranet.bonnevalsolutions.com',
    client: 'client.bonnevalsolutions.com',
    isProduction: true,
    isLocalhost: false,
    isToolsSubdomain: false
  }
}

/**
 * Generate tool URLs for navigation to tools subdomain
 * @param toolPath - Path to the tool (e.g., '/memorizer')
 * @returns Full URL to the tool
 */
export const getToolUrl = (toolPath: string) => {
  const domain = getCurrentDomain()
  
  // Handle localhost - use relative paths
  if (domain.isLocalhost) {
    return `/tools-domain${toolPath}`
  }
  
  // Production - use full subdomain URL
  return `https://${domain.tools}${toolPath}`
}

/**
 * Generate main site URLs for navigation from tools to main site
 * @param path - Path on main site (e.g., '/portfolio', '#contact')
 * @returns Full URL to main site
 */
export const getMainSiteUrl = (path: string = '') => {
  const domain = getCurrentDomain()
  
  // Handle localhost - use relative paths
  if (domain.isLocalhost) {
    return path.startsWith('/') ? path : `/${path}`
  }
  
  // Production - use full domain URL
  return `https://${domain.main}${path}`
}

/**
 * Check if currently on tools subdomain
 * @returns true if on tools.bonnevalsolutions.com
 */
export const isToolsSubdomain = () => {
  const domain = getCurrentDomain()
  return domain.isToolsSubdomain
}

/**
 * Check if running on localhost
 * @returns true if on localhost or 127.0.0.1
 */
export const isLocalhostEnvironment = () => {
  const domain = getCurrentDomain()
  return domain.isLocalhost
}