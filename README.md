# Bonneval Solutions Website

A modern, professional website for **Bonneval Solutions** -- Digital Solutions & Innovation agency, featuring a tools platform, subdomain architecture, centralized company configuration, brand design system, and bilingual support.

**Live**: [bonnevalsolutions.com](https://bonnevalsolutions.com)

## Features

### Main Website
- **Modern Design**: Dark-themed corporate design built on a formal brand design system (`config/brand.ts`)
- **Responsive**: Fully responsive across all devices with a fixed mobile navigation
- **Fast Performance**: Built with Next.js 14 (App Router) and optimized for speed
- **SEO Optimized**: OpenGraph, Twitter cards, meta tags, and structured data
- **Contact Form**: Interactive contact form with validation and WhatsApp integration
- **Smooth Animations**: Framer Motion animations throughout
- **Bilingual**: English / French language toggle via React context

### Tools Platform (Subdomain Architecture)
- **Dedicated Subdomain**: `tools.bonnevalsolutions.com` with clean separation
- **Independent Layout**: Separate header/footer for the tools pages
- **Memorizer Tool**: AI-powered text memorization tool
- **Scalable Architecture**: Easy to add new tools under `app/tools-domain/`
- **Consistent Branding**: Shares the brand design system with the main site

### Legal Pages
- **Terms of Service** (`/terms-of-service`)
- **Privacy Policy** (`/privacy-policy`)
- **Cookie Policy** (`/cookie-policy`)

### Company Configuration System
- **Centralized Data**: All company information in `config/company.ts`
- **Environment-Aware Branding**: Automatic "Preview" vs "Production" branding based on Vercel branch (`VERCEL_GIT_COMMIT_REF`)
- **Domain Routing**: Production and preview domains resolved from config
- **Type Safety**: Full TypeScript support with exported helpers

### Brand Design System
- **Single Source of Truth**: `config/brand.ts` defines all design tokens (Brand Guidelines V0, February 2026)
- **Colors**: Navy, Red, Blue, Gold primary palette with surface elevation and semantic colors
- **Typography**: Space Grotesk (headings) + Inter (body) with a responsive clamp-based type scale
- **Components**: Token definitions for buttons, cards, navigation, inputs
- **Gradients, Spacing, Radii, Animation**: Consistent values across the app
- **Tailwind Integration**: Tokens mirrored in `tailwind.config.js`

### Integration Features
- **Voiceflow Chat Widget**: AI chat assistant on the main site
- **External Portals**: Links to intranet and client portals
- **Language Toggle**: EN/FR switching via `contexts/LanguageContext.tsx`

## Project Structure

```
bonneval-solutions/
├── app/
│   ├── globals.css                    # Global styles and Tailwind imports
│   ├── layout.tsx                     # Root layout (fonts, metadata, Voiceflow, language provider)
│   ├── page.tsx                       # Homepage
│   ├── client/page.tsx                # Client login page
│   ├── intranet/page.tsx              # Intranet login page
│   ├── cookie-policy/page.tsx         # Cookie policy
│   ├── privacy-policy/page.tsx        # Privacy policy
│   ├── terms-of-service/page.tsx      # Terms of service
│   └── tools-domain/                  # Tools subdomain pages
│       ├── layout.tsx                 # Tools layout
│       ├── page.tsx                   # Tools landing page
│       ├── memorizer/page.tsx         # Memorizer tool
│       └── components/
│           ├── ToolsHeader.tsx        # Tools header
│           └── ToolsFooter.tsx        # Tools footer
├── components/
│   ├── Header.tsx                     # Main site header
│   ├── Hero.tsx                       # Hero section
│   ├── Services.tsx                   # Services showcase
│   ├── About.tsx                      # About section
│   ├── Contact.tsx                    # Contact form (email + WhatsApp)
│   ├── Footer.tsx                     # Main site footer
│   ├── VoiceflowWidget.tsx            # AI chat widget (client-side)
│   └── tools/
│       └── MemorizerTool.tsx          # Memorizer tool component
├── config/
│   ├── company.ts                     # Company information & environment-aware branding
│   └── brand.ts                       # Brand design tokens (colors, typography, spacing, etc.)
├── contexts/
│   └── LanguageContext.tsx             # EN/FR language provider
├── .github/
│   └── workflows/
│       └── pre-production-deploy.yml  # GitHub Actions CI/CD
├── public/
│   ├── logo.svg                       # Brand logo (dark background)
│   └── logo-light.svg                 # Brand logo (light background)
├── next.config.js                     # Next.js config (host-based rewrites, headers)
├── vercel.json                        # Vercel deployment config (rewrites, headers, regions)
├── render.yaml                        # Render deployment config (alternative)
├── tailwind.config.js                 # Tailwind CSS config (brand tokens)
├── tsconfig.json                      # TypeScript config
├── package.json                       # Dependencies & scripts
└── SUBDOMAIN_SETUP.md                 # Subdomain setup guide
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom brand tokens
- **Animations**: Framer Motion
- **Icons**: Heroicons, Lucide React, Phosphor Icons
- **Fonts**: Space Grotesk (headings) + Inter (body) via `next/font/google`
- **Configuration**: Centralized company config + brand design system
- **Deployment**: Vercel (primary), Render (alternative)
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/<your-org>/Bonnevalsolutions.git
cd Bonnevalsolutions
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Branding defaults to production locally. To simulate preview branding:

```bash
VERCEL_GIT_COMMIT_REF=preview npm run dev
```

### Build & Start

```bash
npm run build
npm start
```

## Domains & Subdomain Architecture

| Domain | Purpose |
|---|---|
| `bonnevalsolutions.com` | Production main site |
| `www.bonnevalsolutions.com` | Redirects to apex |
| `preview.bonnevalsolutions.com` | Preview environment (preview branding) |
| `tools.bonnevalsolutions.com` | Tools platform (production) |
| `preview-tools.bonnevalsolutions.com` | Tools platform (preview) |

Host-based rewrites are configured in both `next.config.js` and `vercel.json`. Requests to `tools.*` are rewritten to `app/tools-domain/*` at runtime. See `SUBDOMAIN_SETUP.md` for full DNS and Vercel setup instructions.

## Deployment

### Production
- **Branch**: `main`
- **Platform**: Vercel
- **Branding**: "Bonneval Solutions"
- Push to `main` triggers an automatic production deployment.

### Preview
- **Branch**: `preview` (or any non-main branch)
- **Platform**: Vercel preview deployments
- **Branding**: "Preview Bonneval Solutions"

### CI/CD (GitHub Actions)
The workflow in `.github/workflows/pre-production-deploy.yml` runs on pushes to `test-cursor-agent` and builds, tests, and deploys to Vercel using the Pre-Production-Testing environment.

**Required secrets**: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

## Configuration

### Company Information (`config/company.ts`)

All company details are centralized and environment-aware:

```typescript
companyConfig = {
  name: 'Bonneval Solutions',           // or 'Preview Bonneval Solutions' on preview
  legalForm: 'EI (Entrepreneur Individuel)',
  founded: '2025',
  industry: 'Digital Solutions & Innovation',
  contact: { email, phone, location, businessHours, timezone },
  business: { type, focus, services: [...] },
  social: { linkedin, website },
  external: { intranet, client, tools },
  legal: { copyright, privacyPolicy, termsOfService, cookiePolicy },
  branding: { logo, tagline, description, mission },
}
```

### Brand Design Tokens (`config/brand.ts`)

Design tokens following Brand Guidelines V0 (February 2026):

- **Colors**: Navy `#000B24`, Red `#E43606`, Blue `#008FB4`, Gold `#DE8D06` + surface elevation + semantic
- **Typography**: Space Grotesk headings, Inter body, responsive clamp scale
- **Spacing**: Base-4 system (4px increments)
- **Layout**: 1280px max-width, 12-column grid, 24px gutter
- **Components**: Button, card, nav, input token definitions
- **Animation**: Micro (150ms), entrance (500ms), page transition (300ms)

## Services

Bonneval Solutions offers:

- Websites & Web Apps
- Digital Marketing
- Automation
- AI Agents & Chatbots
- Voice Agents
- Custom Solutions
- Local SEO

## To-Do

### Completed
- [x] Setup pre-production testing environment
- [x] Fix mobile navigation issues
- [x] Implement tools subdomain architecture
- [x] Centralize company configuration
- [x] Setup GitHub Actions workflow
- [x] Create legal pages (Terms, Privacy, Cookies)
- [x] Implement brand design system
- [x] Add bilingual support (EN/FR)
- [x] Main design overhaul with corporate policy

### Next Steps
- [ ] **Intranet Platform Setup**
  - [ ] Configure OVH private server
  - [ ] Setup Docker containers for ERP/CRM
  - [ ] Configure `intranet.bonnevalsolutions.com` DNS
  - [ ] Implement authentication system

- [ ] **Client Portal Setup**
  - [ ] Configure OVH private server
  - [ ] Setup Docker containers for client portal
  - [ ] Configure `client.bonnevalsolutions.com` DNS
  - [ ] Implement client authentication

### Future Enhancements
- [ ] Add more tools to the tools platform
- [ ] Implement analytics and reporting
- [ ] Setup automated testing pipeline
- [ ] Add performance monitoring
- [ ] Full i18n with structured translation files

## Changelog

### v3.0.0 -- Design & Brand System Overhaul (Current)
*February 2026*

- **Brand Design System**: Formal design tokens in `config/brand.ts` (colors, typography, spacing, components, animation)
- **Corporate Design Refresh**: Dark-themed corporate aesthetic aligned with Brand Guidelines V0
- **Legal Pages**: Terms of Service, Privacy Policy, Cookie Policy
- **Bilingual Support**: EN/FR language context and toggle
- **Updated Company Profile**: Rebranded as "Digital Solutions & Innovation" agency; services expanded
- **Tailwind Integration**: Brand tokens mapped into `tailwind.config.js`
- **Font Update**: Space Grotesk (headings) + Inter (body)
- **WhatsApp Contact**: Added WhatsApp integration to contact form

### v2.0.0 -- Architecture Update
*August 2024*

- **Tools Subdomain Architecture**: `tools.bonnevalsolutions.com` via host-based rewrites
- **Pre-Production Testing**: Dedicated environment with GitHub Actions
- **Centralized Company Config**: Environment-aware branding in `config/company.ts`
- **Mobile Navigation**: Full-screen mobile menu overhaul
- **Vercel Deployment**: Subdomain support and deployment optimization

### v1.0.0 -- Initial Release
*July 2024*

- Main website with Hero, Services, About, Contact sections
- Tools platform with Memorizer tool
- Responsive design with Framer Motion animations
- Next.js 14 + TypeScript + Tailwind CSS foundation

---

**Last Updated**: February 2026
**Current Version**: 3.0.0
**Status**: Production
**Next Milestone**: Intranet & Client Portal Setup
