# Contributing to Bonneval Solutions Website

Thank you for your interest in contributing to the Bonneval Solutions website! This document provides guidelines and instructions for maintaining and extending the codebase.

## 📋 Table of Contents

- [Code Structure](#code-structure)
- [Master Configuration System](#master-configuration-system)
- [Adding New Pages](#adding-new-pages)
- [Adding New Tools](#adding-new-tools)
- [Updating Company Information](#updating-company-information)
- [Code Style Guidelines](#code-style-guidelines)
- [Component Patterns](#component-patterns)

## 🏗️ Code Structure

The project follows Next.js 14 App Router conventions:

```
app/              # Pages and routes
components/       # Reusable React components
config/           # Configuration files (MASTER CONFIG HERE)
utils/            # Utility functions
public/           # Static assets
```

### Key Principles

1. **Centralized Configuration**: All company info in `config/company.ts`
2. **Component Reusability**: Build modular, reusable components
3. **TypeScript First**: Use proper types, avoid `any`
4. **Responsive Design**: Mobile-first approach
5. **Documentation**: Comment complex logic

## 🎯 Master Configuration System

### The Single Source of Truth

**File**: `config/company.ts`

This is the MOST IMPORTANT file in the project. All company information, branding, services, and contact details are defined here.

### How It Works

```typescript
// config/company.ts
export const companyConfig = {
  name: isToolsSubdomain() ? 'Tools Bonneval Solutions' : 'Bonneval Solutions',
  contact: {
    email: 'casimir@bonnevalsolutions.com',
    phone: '+33 (0) 6 09 55 83 96',
    // ... other contact info
  },
  business: {
    services: [
      'AI Automation (outreach, social media, voice & text agents)',
      // ... other services
    ]
  },
  social: {
    linkedin: 'https://linkedin.com/company/bonnevalsolutions',
    // ... other social media
  }
}
```

### Using Company Config in Components

```typescript
import { getCompanyInfo, social } from '@/config/company'

// Use helper functions
const email = getCompanyInfo.contactEmail()
const name = getCompanyInfo.name()

// Or access directly
const linkedinUrl = social.linkedin
```

### When to Update

Update `config/company.ts` when you need to change:
- Company name or branding
- Contact information
- Service offerings
- Social media links
- Legal policies
- Mission/vision statements

**DO NOT** hardcode this information in components!

## 📄 Adding New Pages

### 1. Create Page File

```typescript
// app/your-page/page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function YourPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 sm:pt-28">
        {/* Your content here */}
      </main>
      <Footer />
    </>
  )
}
```

### 2. Add Navigation Link

Update navigation in relevant components:
- `components/Header.tsx` - Main site navigation
- `components/Footer.tsx` - Footer links

### 3. Add Metadata

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title - Bonneval Solutions',
  description: 'Page description',
}
```

## 🛠️ Adding New Tools

Tools live in the `app/tools-domain/` directory and appear on `tools.bonnevalsolutions.com`.

### 1. Create Tool Page

```typescript
// app/tools-domain/your-tool/page.tsx
import ToolsHeader from '../components/ToolsHeader'
import ToolsFooter from '../components/ToolsFooter'

export default function YourTool() {
  return (
    <>
      <ToolsHeader />
      <main className="min-h-screen pt-24 sm:pt-28 p-6">
        {/* Tool content */}
      </main>
      <ToolsFooter />
    </>
  )
}
```

### 2. Add to Tools Dropdown

Update the tools array in:
- `components/Header.tsx`
- `app/tools-domain/components/ToolsHeader.tsx`

```typescript
const tools = [
  { name: 'Memorizer', href: '/memorizer' }, // or getToolUrl('/memorizer')
  { name: 'Your Tool', href: '/your-tool' },
]
```

### 3. Create Tool Component (Optional)

If the tool has complex logic, create a component:

```typescript
// components/tools/YourToolComponent.tsx
'use client'

export default function YourToolComponent() {
  // Tool logic here
}
```

## 🔄 Updating Company Information

### Quick Update Checklist

1. Open `config/company.ts`
2. Find the relevant section:
   - `contact` - Contact information
   - `business` - Services, technologies, target clients
   - `social` - Social media URLs
   - `legal` - Copyright, policies
   - `branding` - Tagline, description, mission
3. Make your changes
4. Save the file
5. Changes propagate automatically to all components!

### Example: Adding a New Service

```typescript
// config/company.ts
business: {
  services: [
    'AI Automation (outreach, social media, voice & text agents)',
    'Website Development (custom builds, modern frameworks)',
    'Website Migration (WordPress, Shopify, etc. to modern platforms)',
    'Small-scale ERP Solutions (development, advice, implementation)',
    'YOUR NEW SERVICE HERE', // ← Add here
  ],
}
```

### Example: Updating Contact Info

```typescript
// config/company.ts
contact: {
  email: 'new-email@bonnevalsolutions.com', // ← Change here
  phone: '+33 (0) 6 XX XX XX XX',
  // ...
}
```

## 📝 Code Style Guidelines

### TypeScript

```typescript
// ✅ Good: Explicit types
interface Props {
  title: string
  count: number
}

// ❌ Bad: Any types
function process(data: any) { }

// ✅ Good: Typed function
function process(data: string): string {
  return data.toUpperCase()
}
```

### Components

```typescript
// ✅ Good: Documented component
/**
 * SERVICE CARD COMPONENT
 * 
 * Displays a service with icon, title, and description.
 * Used in the Services section of the homepage.
 */
export default function ServiceCard({ service }: Props) {
  // ...
}
```

### Comments

```typescript
// ✅ Good: Explain WHY, not WHAT
// Use subdomain detection to show different branding on tools site
const name = isToolsSubdomain() ? 'Tools Bonneval Solutions' : 'Bonneval Solutions'

// ❌ Bad: Obvious comment
// Set the name variable
const name = 'Bonneval Solutions'
```

### Tailwind CSS

```typescript
// ✅ Good: Consistent class ordering
className="flex items-center justify-between px-4 py-2 bg-primary-100 text-primary-800 rounded-lg hover:bg-primary-200 transition-colors"

// Group by: Layout → Spacing → Colors → Effects → Transitions
```

### File Naming

- **Components**: PascalCase → `ServiceCard.tsx`
- **Pages**: kebab-case → `founder/page.tsx`
- **Utils**: camelCase → `routing.ts`
- **Config**: camelCase → `company.ts`

## 🧩 Component Patterns

### Client vs Server Components

```typescript
// Server Component (default)
export default function ServerComponent() {
  // Can fetch data directly
  // No hooks or browser APIs
}

// Client Component
'use client'

export default function ClientComponent() {
  // Can use hooks
  // Can access browser APIs
}
```

### Using Motion (Animation)

```typescript
'use client'
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Responsive Design

```typescript
// Use Tailwind responsive prefixes
className="
  text-base           // Mobile (default)
  sm:text-lg          // Small screens (640px+)
  md:text-xl          // Medium screens (768px+)
  lg:text-2xl         // Large screens (1024px+)
"
```

## 🚀 Testing Your Changes

### Local Development

```bash
npm run dev
```

Visit:
- Main site: http://localhost:3000
- Tools (simulated): http://localhost:3000/tools-domain/memorizer

### Before Committing

1. **Test responsive design**: Check mobile, tablet, desktop
2. **Check console**: No errors or warnings
3. **Verify config changes**: Ensure company info appears correctly
4. **Test navigation**: All links work
5. **Run lint**: `npm run lint`

## 📞 Questions?

If you have questions about the codebase:
1. Check this guide first
2. Review `README.md`
3. Look at `SS_SuperSeeded/PREVIEW_WORKFLOW.md` for archived patterns
4. Check comments in the relevant component

---

**Remember**: When in doubt, check `config/company.ts` first. It's the master file for all company information!

