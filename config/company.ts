// Environment detection
const commitRef = process.env.VERCEL_GIT_COMMIT_REF
const isMainBranch = commitRef ? commitRef === 'main' : true
const isPreview = !isMainBranch

// Domain routing based on environment
export const getDomainConfig = () => {
  if (isMainBranch) {
    return {
      main: 'bonnevalsolutions.com',
      tools: 'tools.bonnevalsolutions.com',
      isProduction: true
    }
  } else {
    return {
      main: 'preview.bonnevalsolutions.com',
      tools: 'preview-tools.bonnevalsolutions.com',
      isProduction: false
    }
  }
}

export const companyConfig = {
  name: isPreview ? 'Preview Bonneval Solutions' : 'Bonneval Solutions',
  fullName: isPreview ? 'Preview Bonneval Solutions SASU' : 'Bonneval Solutions SASU',
  legalForm: 'EI (Entrepreneur Individuel)',
  founded: '2024',
  industry: 'Digital Solutions & Innovation',

  contact: {
    email: 'contact@bonnevalsolutions.com',
    phone: '+33 (0) 6 09 55 83 96',
    phoneFormatted: '+33 6 09 55 83 96',
    location: 'France (Remote & On-site)',
    businessHours: '24/7 Time Zone Agnostic',
    timezone: 'CET (Central European Time)',
  },

  business: {
    type: 'Digital Solutions Agency',
    focus: 'Innovative Digital Solutions',
    services: [
      'Websites & Web Apps',
      'Digital Marketing',
      'Automation',
      'AI Agents & Chatbots',
      'Voice Agents',
      'Custom Solutions',
      'Local SEO',
    ],
  },

  social: {
    linkedin: 'https://linkedin.com/company/bonnevalsolutions',
    website: 'https://bonnevalsolutions.com'
  },

  external: {
    intranet: 'https://intranet.bonnevalsolutions.com',
    client: 'https://client.bonnevalsolutions.com',
    tools: `https://${getDomainConfig().tools}`
  },

  legal: {
    copyright: `© ${new Date().getFullYear()} Bonneval Solutions. All rights reserved.`,
    privacyPolicy: '/privacy-policy',
    termsOfService: '/terms-of-service',
    cookiePolicy: '/cookie-policy'
  },

  branding: {
    logo: '/logo.svg',
    tagline: 'Build Smarter Digital Systems',
    description: 'We build websites and integrate AI into business operations. Measurable automation for B2B companies.',
    mission: 'To solve real problems with smart, scalable digital systems.',
  }
}

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

export const { contact, business, social, external, legal, branding } = companyConfig
