# Company Configuration Usage Guide

## Overview

The `config/company.ts` file contains all company-related information and should be used throughout the codebase instead of hardcoding company details. This ensures consistency, easy maintenance, and proper environment-based branding.

## File Structure

The configuration file exports several key objects and functions:

### Main Configuration Object
```typescript
export const companyConfig = {
  name: string,           // Company name (with preview/production logic)
  fullName: string,       // Full legal name
  contact: { ... },       // Contact information
  business: { ... },      // Business details
  social: { ... },        // Social media links
  external: { ... },      // External service URLs
  legal: { ... },         // Legal information
  branding: { ... }       // Branding and messaging
}
```

### Helper Functions
```typescript
export const getCompanyInfo = {
  name: () => string,
  fullName: () => string,
  founded: () => string,
  contactEmail: () => string,
  contactPhone: () => string,
  businessHours: () => string,
  copyright: () => string,
  tagline: () => string,
  description: () => string
}
```

### Individual Section Exports
```typescript
export const { contact, business, social, external, legal, branding } = companyConfig
```

## Usage Examples

### 1. Company Name and Branding
```typescript
import { getCompanyInfo, companyConfig } from '@/config/company'

// Use helper functions for common values
const companyName = getCompanyInfo.name()
const tagline = getCompanyInfo.tagline()

// Or access directly from config
const fullName = companyConfig.fullName
const description = companyConfig.branding.description
```

### 2. Contact Information
```typescript
import { contact } from '@/config/company'

// Access contact details
const email = contact.email
const phone = contact.phone
const location = contact.location
```

### 3. External URLs
```typescript
import { external } from '@/config/company'

// Use external service URLs
const intranetUrl = external.intranet
const clientPortalUrl = external.client
const toolsUrl = external.tools
```

### 4. Legal Information
```typescript
import { legal } from '@/config/company'

// Access legal content
const copyright = legal.copyright
const privacyPolicy = legal.privacyPolicy
const termsOfService = legal.termsOfService
```

### 5. Business Information
```typescript
import { business } from '@/config/company'

// Access business details
const services = business.services
const technologies = business.technologies
const targetClients = business.targetClients
```

## Environment-Based Logic

The configuration automatically handles preview vs production environments:

- **Production**: Uses standard company branding
- **Preview**: Automatically adds "Preview" prefix to company names

This is handled by the `isPreview` variable which checks the Vercel deployment environment.

## Domain Configuration

The `getDomainConfig()` function provides environment-specific domain routing:

```typescript
import { getDomainConfig } from '@/config/company'

const domains = getDomainConfig()
// Returns appropriate domains based on environment
```

## Best Practices

1. **Never hardcode company information** - Always use the config file
2. **Use helper functions** when available for common values
3. **Import specific sections** when you only need certain data
4. **Leverage environment logic** for preview/production differences
5. **Keep URLs consistent** by using the external service configurations

## Common Use Cases

### Components
- Company name in headers, footers, and titles
- Contact information in forms and contact pages
- Legal text in footers and policy pages
- Branding content in marketing sections

### Metadata
- Page titles and descriptions
- Open Graph and Twitter card data
- Author information

### Navigation
- External service links
- Social media links
- Contact links

### Forms
- Company email addresses
- Contact phone numbers
- Business hours information

## Migration Checklist

When updating existing code to use the config file:

- [ ] Replace hardcoded company names with `getCompanyInfo.name()`
- [ ] Replace hardcoded contact info with `contact.*` properties
- [ ] Replace hardcoded URLs with `external.*` properties
- [ ] Replace hardcoded legal text with `legal.*` properties
- [ ] Replace hardcoded branding with `branding.*` properties
- [ ] Update metadata to use config values
- [ ] Test both preview and production environments

## Troubleshooting

### Common Issues
1. **Import errors**: Ensure correct path to `@/config/company`
2. **Type errors**: The config file is fully typed with TypeScript
3. **Environment issues**: Check that Vercel environment variables are set correctly

### Debugging
```typescript
import { companyConfig } from '@/config/company'
console.log('Current config:', companyConfig)
console.log('Is preview:', process.env.VERCEL_GIT_COMMIT_REF !== 'main')
```

## File Locations

The configuration file is located at:
- **Path**: `config/company.ts`
- **Import**: `@/config/company`
- **Type**: TypeScript with full type definitions
- **Environment**: Automatically detects preview/production