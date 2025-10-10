/**
 * MASTER COMPANY CONFIGURATION
 * 
 * This is the single source of truth for all company information across the website.
 * Changes made here will automatically propagate to all pages and components.
 * 
 * Environment Detection:
 * - Detects if user is on tools subdomain to show appropriate branding
 * - Main site: "Bonneval Solutions"
 * - Tools subdomain: "Tools Bonneval Solutions"
 */

// Subdomain detection - determines if we're on tools subdomain
const isToolsSubdomain = () => {
  if (typeof window !== 'undefined') {
    return window.location.hostname.startsWith('tools.')
  }
  return false
}

// Domain routing configuration
export const getDomainConfig = () => {
  return {
    main: 'bonnevalsolutions.com',
    tools: 'tools.bonnevalsolutions.com',
    intranet: 'intranet.bonnevalsolutions.com',
    client: 'client.bonnevalsolutions.com',
  }
}

export const companyConfig = {
  // Basic Company Information - dynamically adjusts based on subdomain
  name: isToolsSubdomain() ? 'Tools Bonneval Solutions' : 'Bonneval Solutions',
  fullName: 'Bonneval Solutions SASU',
  legalForm: 'EI (Entrepreuneur Individuel)',
  founded: '2024',
  industry: 'AI Solutions, Web Development & Digital Transformation',
  
  // Contact Information
  contact: {
    email: 'casimir@bonnevalsolutions.com',
    phone: '+33 (0) 6 09 55 83 96',
    phoneFormatted: '+33 1 6 09 55 83 96',
    location: 'France (Remote & On-site)',
    businessHours: '24/7 Time Zone Agnostic',
    timezone: 'CET (Central European Time)',
  },
  
  // Business Information
  business: {
    type: 'Consultancy',
    focus: 'AI Automation & Process Optimization',
    targetClients: [
      'Offshore logistics companies',
      'Construction & energy sectors',
      'Project management-heavy industries',
      'SMEs lacking automation expertise',
      'Corporate departments seeking efficiency',
      'Operations-heavy businesses'
    ],
    services: [
      'AI Automation (outreach, social media, voice & text agents)',
      'Website Development (custom builds, modern frameworks)',
      'Website Migration (WordPress, Shopify, etc. to modern platforms)',
      'Small-scale ERP Solutions (development, advice, implementation)'
    ],
    technologies: [
      'Voiceflow & ChatGPT',
      'n8n Workflow Automation',
      'Airtable & Notion',
      'Custom AI Solutions',
      'API Integrations',
      'Data Analytics Platforms'
    ]
  },
  
  // Social Media & Online Presence
  social: {
    linkedin: 'https://linkedin.com/company/bonnevalsolutions',
    twitter: 'https://twitter.com/bonnevalsolutions',
    instagram: 'https://instagram.com/bonnevalsolutions',
    facebook: 'https://facebook.com/bonnevalsolutions',
    threads: 'https://threads.net/@bonnevalsolutions',
    github: 'https://github.com/bonnevalsolutions',
    website: 'https://bonnevalsolutions.com'
  },
  
  // External Services
  external: {
    intranet: 'https://intranet.bonnevalsolutions.com',
    client: 'https://client.bonnevalsolutions.com',
    tools: `https://${getDomainConfig().tools}`,
    calendly: 'https://calendly.com/your-username/consultation', // TODO: Replace with your actual Calendly link
  },
  
  // Legal & Compliance
  legal: {
    copyright: '© 2024 Bonneval Solutions. All rights reserved.',
    privacyPolicy: '/privacy-policy',
    termsOfService: '/terms-of-service',
    cookiePolicy: '/cookie-policy'
  },
  
  // Branding & Messaging
  branding: {
    tagline: 'AI Solutions, Web Development & Digital Transformation',
    description: 'Expert consultancy specializing in AI automation, custom website development, platform migration, and small-scale ERP solutions for small-to-medium businesses across diverse industries.',
    mission: 'To empower SMEs with cutting-edge digital solutions, combining problem-defining expertise with practical implementation.',
    vision: 'Position Bonneval Solutions as a trusted partner for businesses seeking AI integration, modern web presence, and efficient digital systems.'
  }
}

// Helper functions for common use cases
export const getCompanyInfo = {
  name: () => companyConfig.name,
  fullName: () => companyConfig.fullName,
  founded: () => companyConfig.founded,
  contactEmail: () => companyConfig.contact.email,
  contactPhone: () => companyConfig.contact.phone,
  businessHours: () => companyConfig.contact.businessHours,
  copyright: () => companyConfig.legal.copyright,
  tagline: () => companyConfig.branding.tagline,
  description: () => companyConfig.branding.description
}

// Export individual sections for specific use cases
export const { contact, business, social, external, legal, branding } = companyConfig
