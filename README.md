# Bonneval Solutions Website

A modern, professional website for Bonneval Solutions - AI Solutions, Web Development & Digital Transformation consultancy. Features a clean architecture with tools subdomain, centralized configuration, and portfolio showcase.

## 🚀 Features

### **Main Website**
- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices with fixed mobile navigation
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Form**: Interactive contact form with validation
- **Smooth Animations**: Framer Motion animations for enhanced UX

### **Tools Platform (Subdomain Architecture)**
- **Dedicated Subdomain**: `tools.bonnevalsolutions.com` with clean separation
- **Independent Components**: Separate header/footer for tools pages
- **Memorizer Tool**: AI-powered text memorization tool
- **Scalable Architecture**: Easy to add new tools
- **Professional Branding**: Consistent with main site branding
- **Responsive Design**: Mobile-optimized tools interface

### **Company Configuration System**
- **Centralized Data**: All company information in one place (`config/company.ts`)
- **Easy Maintenance**: Update company info once, changes everywhere
- **Subdomain Branding**: Automatic branding adjustment for tools subdomain
- **Type Safety**: Full TypeScript support
- **Social Media Integration**: Centralized social media links

### **Mobile Navigation**
- **Fixed Mobile Menu**: Full screen coverage on mobile devices
- **Smooth Animations**: Proper transitions and backdrop effects
- **Touch Friendly**: Optimized for mobile interaction
- **Consistent Experience**: Same behavior across main site and tools

### **Content Pages**
- **Founder Page**: Dedicated page showcasing founder's background and approach
- **Portfolio Page**: Full website portfolio with live and upcoming projects
- **Responsive Layouts**: All pages optimized for mobile and desktop

### **Integration Features**
- **Voiceflow Chat Widget**: AI chat integration on main page
- **External Portals**: Links to intranet and client portals
- **Smooth Navigation**: Fixed dropdown hover issues, improved UX
- **Social Media**: Integrated social media links (LinkedIn, Twitter, Instagram, Facebook, Threads, GitHub)

## 🏗️ Project Structure

```
bonneval-solutions/
├── app/
│   ├── globals.css                    # Global styles and Tailwind imports
│   ├── layout.tsx                     # Root layout (uses company config)
│   ├── page.tsx                       # Homepage with portfolio section
│   ├── founder/                       # 🆕 Founder page
│   │   └── page.tsx
│   ├── portfolio/                     # 🆕 Portfolio showcase page
│   │   └── page.tsx
│   ├── client/                        # Client login page
│   ├── intranet/                      # Intranet login page
│   └── tools-domain/                  # Tools subdomain structure
│       ├── layout.tsx                 # Tools layout (uses company config)
│       ├── page.tsx                   # Tools landing page
│       ├── memorizer/page.tsx         # Memorizer tool page
│       └── components/                # Tools-specific components
│           ├── ToolsHeader.tsx        # Tools header with back to main site link
│           └── ToolsFooter.tsx        # Tools footer
├── components/
│   ├── Header.tsx                     # Main site header (fixed dropdown)
│   ├── Hero.tsx                       # Hero section (updated branding)
│   ├── Services.tsx                   # Services showcase (4 core services)
│   ├── Portfolio.tsx                  # 🆕 Portfolio mini-showcase component
│   ├── About.tsx                      # About section (founder focus)
│   ├── Contact.tsx                    # Contact form
│   ├── Footer.tsx                     # Main site footer (social media icons)
│   ├── VoiceflowWidget.tsx            # AI chat widget
│   └── tools/                         # Shared tool components
│       └── MemorizerTool.tsx          # Memorizer tool component
├── config/
│   └── company.ts                     # Centralized company configuration (master file)
├── utils/
│   └── routing.ts                     # Simplified routing utilities
├── SS_SuperSeeded/                    # 🆕 Archived old code
│   ├── PREVIEW_WORKFLOW.md            # Documentation of old preview logic
│   └── vercel-preview.json            # Old Vercel preview config
├── public/                            # Static assets
├── vercel.json                        # Simplified Vercel configuration
├── middleware.ts                      # Subdomain routing middleware
├── tailwind.config.js                 # Tailwind configuration
└── README.md                          # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons & Lucide React
- **Font**: Inter (Google Fonts)
- **Configuration**: Centralized company config system
- **Deployment**: Vercel with GitHub Actions
- **Environment Management**: Pre-Production Testing environment

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bonneval-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_COMPANY_NAME="Bonneval Solutions"
   COMPANY_CONTACT_EMAIL="contact@bonnevalsolutions.com"
   COMPANY_CONTACT_PHONE="+33 (0)1 XX XX XX XX"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Subdomain Setup

### **Tools Subdomain**: `tools.bonnevalsolutions.com`
- **Purpose**: Dedicated tools platform with clean separation
- **Benefits**: Independent development, different branding, scalable architecture
- **Routing**: Automatic routing from subdomain to `/tools-domain` pages

### **DNS Configuration**
```
Type: CNAME
Name: tools
Value: cname.vercel-dns-017.com
TTL: 4 h
```

### **Vercel Configuration**
- **Automatic Detection**: Vercel detects CNAME record
- **SSL Certificates**: Automatically handled
- **Preview Deployments**: Available for testing

## 🚀 Deployment

### **Production Deployment**
- **Platform**: Vercel
- **Branch**: `main`
- **Automatic Deployment**: Push to main triggers deployment
- **Environment Variables**: Set in Vercel dashboard

### **Vercel Configuration**
The `vercel.json` file handles:
- Tools subdomain routing
- Security headers
- Build optimization

### **DNS Configuration**
- **Main Site**: `bonnevalsolutions.com` → Vercel
- **Tools Subdomain**: `tools.bonnevalsolutions.com` → Vercel (CNAME)
- **Intranet**: `intranet.bonnevalsolutions.com` → OVH Private Server (future)
- **Client Portal**: `client.bonnevalsolutions.com` → OVH Private Server (future)

## 🔧 Configuration

### **Company Information - Master Configuration File**
All company information is centralized in `config/company.ts`. This is the single source of truth for:
- Company branding and messaging
- Contact information
- Services and technologies
- Social media links
- Legal information

```typescript
export const companyConfig = {
  name: isToolsSubdomain() ? 'Tools Bonneval Solutions' : 'Bonneval Solutions',
  fullName: 'Bonneval Solutions SASU',
  contact: { /* email, phone, location */ },
  business: { /* services, technologies, target clients */ },
  social: { /* LinkedIn, Twitter, Instagram, Facebook, Threads, GitHub */ },
  legal: { /* copyright, policies */ },
  branding: { /* tagline, description, mission, vision */ }
}
```

### **Subdomain Branding**
The configuration automatically adjusts branding based on the current subdomain:
- **Main Site** (`bonnevalsolutions.com`): Shows "Bonneval Solutions"
- **Tools Subdomain** (`tools.bonnevalsolutions.com`): Shows "Tools Bonneval Solutions"
- **Localhost**: Handles both contexts appropriately

This eliminates the need for separate preview/production branches while providing contextual branding.

## 📱 Mobile Navigation

### **Fixed Issues**
- **Problem**: Mobile menu only showed 50px scrollable area
- **Solution**: Full screen coverage with proper positioning
- **Implementation**: Fixed in both main header and tools header
- **Features**: Backdrop click-to-close, smooth animations, proper scrolling

### **Mobile Menu Features**
- **Full Screen Coverage**: Menu covers entire mobile screen
- **Smooth Animations**: Proper transitions and backdrop effects
- **Touch Friendly**: Optimized for mobile interaction
- **Consistent Behavior**: Same experience across all pages

## 📋 Recent Updates

### **✅ Completed**
- [x] Simplified architecture by removing preview branch complexity
- [x] Fixed desktop header dropdown hover issues
- [x] Repurposed environment detection for tools subdomain branding
- [x] Updated branding to focus on AI, Web Dev, and ERP solutions
- [x] Created founder page with Africa experience focus
- [x] Built portfolio showcase (mini and full page)
- [x] Added social media integration (6 platforms)
- [x] Improved code documentation and comments
- [x] Reorganized services to 4 core offerings
- [x] Updated all component content for new branding

### **⏳ Next Steps**
- [ ] Add real project screenshots to portfolio
- [ ] Populate founder page with actual content and photo
- [ ] Setup analytics and monitoring
- [ ] Implement contact form backend
- [ ] Add more tools to tools subdomain
- [ ] Create case studies for portfolio projects

### **🔮 Future Infrastructure**
- [ ] **Intranet Platform** (`intranet.bonnevalsolutions.com`)
  - Configure OVH private server
  - Setup Docker containers for internal tools
  - Implement authentication system

- [ ] **Client Portal** (`client.bonnevalsolutions.com`)
  - Configure OVH private server
  - Setup client-specific tools and dashboards
  - Implement secure client authentication

## 📝 Changelog

### **Version 3.0.0** - Website Modernization & Rebranding (Current)
*Released: October 2025*

#### **🎨 Branding & Content**
- **New Service Focus**: AI Solutions, Web Development, Website Migration, ERP Solutions
- **Founder Page**: New dedicated page showcasing background and approach
- **Portfolio Showcase**: Mini-showcase on homepage + full portfolio page
- **Updated Copy**: All content refocused on new branding and target audience
- **Founder Story**: Africa experience and problem-defining methodology highlighted

#### **🔧 Technical Improvements**
- **Fixed Header Dropdown**: Simplified state management, eliminated timing issues
- **Subdomain Branding**: Repurposed environment detection for tools subdomain
- **Archived Preview Logic**: Moved old preview/test branch code to `SS_SuperSeeded/`
- **Improved Routing**: Simplified `utils/routing.ts`, removed unnecessary complexity
- **Added Documentation**: Comprehensive comments in key files

#### **🎯 UI/UX Enhancements**
- **Services Reduced**: From 6 to 4 core services with clearer focus
- **Social Media Integration**: 6 platforms (LinkedIn, Twitter, Instagram, Facebook, Threads, GitHub)
- **Footer Redesign**: Removed Industries section, added social icons
- **Navigation Polish**: "Back to Main Site" link in tools header
- **Responsive Design**: All new pages fully responsive

#### **📚 Documentation**
- **Updated README**: Removed outdated preview environment information
- **SS_SuperSeeded**: Archived old code with documentation
- **Code Comments**: Added comments to all major components
- **Master Config**: Centralized configuration documentation

### **Version 2.0.0** - Major Architecture Update
*Released: August 2024*

#### **Features**
- Tools Subdomain Architecture
- Centralized Company Configuration
- Mobile Navigation Fixes
- Company Config Integration

### **Version 1.0.0** - Initial Release
*Released: July 2024*

#### **🎯 Core Features**
- **Main Website**: Professional AI automation consultancy website
- **Tools Platform**: Basic tools implementation with memorizer tool
- **Responsive Design**: Mobile-first design approach
- **Contact System**: Interactive contact forms and communication

#### **🛠️ Technical Foundation**
- **Next.js 14**: Modern React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Full type safety implementation
- **Framer Motion**: Smooth animations and transitions

---

**Last Updated**: October 2025  
**Current Version**: 3.0.0  
**Status**: Production Ready  
**Next Steps**: Add real content (photos, screenshots), implement analytics

For contribution guidelines, see `CONTRIBUTING.md` 