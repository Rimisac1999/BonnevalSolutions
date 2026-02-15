// ============================================================
// BONNEVAL SOLUTIONS — Brand Design Tokens (Single Source of Truth)
// Based on Brand Guidelines V0 — February 2026
// ============================================================

// ── 1. Colors ────────────────────────────────────────────────

export const colors = {
  // Primary Brand Colors
  navy: '#000B24',
  red: '#E43606',
  blue: '#008FB4',
  gold: '#DE8D06',

  // Extended Palette
  white: '#FFFFFF',
  offWhite: '#F0F2F5',
  midGray: '#6B7280',
  darkGray: '#1F2937',

  // Accessible light variants (for dark backgrounds)
  redLight: '#F56E4E',
  blueLight: '#25BBE0',
  goldLight: '#F5B520',

  // Dark Mode Surface Elevation
  surface1: '#030E42', // Cards, sections
  surface2: '#061560', // Hover states, dropdowns
  surface3: '#0C2088', // Modals, popovers

  // Semantic
  success: '#10B981',
  warning: '#DE8D06', // Reuses brand gold
  error: '#E43606',   // Reuses brand red
  info: '#3B82F6',
} as const

// ── 2. Borders (Dark Mode Elevation) ────────────────────────

export const borders = {
  subtle: 'rgba(255,255,255,0.06)',   // Level 1 — Cards
  hover: 'rgba(255,255,255,0.12)',    // Level 2 — Hover
  overlay: 'rgba(255,255,255,0.15)',  // Level 3 — Modals
  separator: '#D1D5DB',               // Co-branding separator
} as const

// ── 3. Typography ───────────────────────────────────────────

export const fonts = {
  heading: "'Space Grotesk', system-ui, -apple-system, sans-serif",
  body: "'Inter', system-ui, -apple-system, sans-serif",
} as const

export const typeScale = {
  h1: {
    desktop: '4.5rem',    // 72px
    mobile: '2.5rem',     // 40px
    clamp: 'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
    weight: 700,
    font: 'heading' as const,
    lineHeight: 1.1,
  },
  h2: {
    desktop: '3rem',      // 48px
    mobile: '2rem',       // 32px
    clamp: 'clamp(2rem, 3vw + 0.5rem, 3rem)',
    weight: 600,
    font: 'heading' as const,
    lineHeight: 1.2,
  },
  h3: {
    desktop: '2rem',      // 32px
    mobile: '1.5rem',     // 24px
    clamp: 'clamp(1.5rem, 2vw + 0.5rem, 2rem)',
    weight: 600,
    font: 'heading' as const,
    lineHeight: 1.3,
  },
  body: {
    desktop: '1.125rem',  // 18px
    mobile: '1rem',       // 16px
    clamp: 'clamp(1rem, 0.5vw + 0.875rem, 1.125rem)',
    weight: 400,
    font: 'body' as const,
    lineHeight: 1.6,
  },
  bodySmall: {
    desktop: '1rem',      // 16px
    mobile: '0.875rem',   // 14px
    weight: 400,
    font: 'body' as const,
    lineHeight: 1.5,
  },
  caption: {
    desktop: '0.875rem',  // 14px
    mobile: '0.75rem',    // 12px
    weight: 400,
    font: 'body' as const,
    lineHeight: 1.4,
  },
  overline: {
    desktop: '0.75rem',   // 12px
    mobile: '0.6875rem',  // 11px
    weight: 600,
    font: 'body' as const,
    lineHeight: 1.3,
    uppercase: true,
  },
} as const

// Dark background text adjustments
export const darkTextRules = {
  bodyWeight: 500,           // Increase by one step on dark bg
  letterSpacing: '0.01em',   // White text optically appears tighter
  lineHeightMultiplier: 1.05, // Increase by 5-10%
} as const

// ── 4. Gradients ────────────────────────────────────────────

export const gradients = {
  hero: 'linear-gradient(135deg, #000B24 0%, #061560 50%, #0C2088 100%)',
  cta: 'linear-gradient(135deg, #E43606 0%, #DE8D06 100%)',
  glow: 'radial-gradient(ellipse at 50% 0%, rgba(0,143,180,0.08) 0%, transparent 70%)',
} as const

// ── 5. Spacing (Base-4 System) ──────────────────────────────

export const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  6: '24px',
  8: '32px',
  12: '48px',
  16: '64px',
  24: '96px',
  32: '128px',
} as const

// ── 6. Layout ───────────────────────────────────────────────

export const layout = {
  maxWidth: '1280px',
  columns: 12,
  gutter: '24px',
  sectionPadding: {
    desktop: '96px',
    mobile: '64px',
  },
  navHeight: {
    desktop: '64px',
    mobile: '56px',
  },
} as const

// ── 7. Border Radius ────────────────────────────────────────

export const radii = {
  card: '16px',
  pill: '9999px',
  button: '9999px', // Pill shape per guidelines
  input: '12px',
  small: '8px',
} as const

// ── 8. Component Tokens ─────────────────────────────────────

export const components = {
  button: {
    minHeight: '44px',
    paddingX: '32px',
    paddingY: '12px',
    borderRadius: radii.pill,
    fontSize: '1rem',
    fontWeight: 600,
  },
  card: {
    background: colors.surface1,
    border: `1px solid ${borders.subtle}`,
    borderRadius: radii.card,
    padding: '32px',
    hoverBorder: `1px solid ${borders.hover}`,
    hoverShadow: '0 4px 24px rgba(0,143,180,0.12)',
  },
  nav: {
    background: 'rgba(0,11,36,0.8)',
    backdropBlur: '12px',
    linkFontSize: '14px',
    linkWeight: 500,
    linkOpacity: 0.7,
    linkHoverOpacity: 1,
  },
  input: {
    background: colors.surface1,
    border: `1px solid ${borders.subtle}`,
    borderRadius: radii.input,
    focusRing: `2px solid ${colors.gold}`,
    padding: '12px 16px',
  },
} as const

// ── 9. Animation ────────────────────────────────────────────

export const animation = {
  micro: { duration: '150ms', easing: 'ease-out' },
  entrance: { duration: '500ms', easing: 'ease-out' },
  pageTransition: { duration: '300ms', easing: 'ease-in-out' },
  staggerDelay: '100ms',
  hover: {
    scale: 1.03,
    duration: '150ms',
    easing: 'ease-out',
  },
} as const

// ── 10. Logo ────────────────────────────────────────────────

export const logo = {
  horizontal: '/logo.svg',
  minWidth: 150,  // px
  navHeight: 32,  // px
} as const

// ── Tailwind-Compatible Exports ─────────────────────────────
// These are structured for direct use in tailwind.config.js

export const tailwindColors = {
  navy: {
    DEFAULT: colors.navy,
    light: colors.surface1,
  },
  red: {
    DEFAULT: colors.red,
    light: colors.redLight,
  },
  blue: {
    DEFAULT: colors.blue,
    light: colors.blueLight,
  },
  gold: {
    DEFAULT: colors.gold,
    light: colors.goldLight,
  },
  surface: {
    1: colors.surface1,
    2: colors.surface2,
    3: colors.surface3,
  },
  gray: {
    100: colors.offWhite,
    500: colors.midGray,
    900: colors.darkGray,
  },
  semantic: {
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
  },
} as const

// ── Full Brand Export ───────────────────────────────────────

export const brand = {
  colors,
  borders,
  fonts,
  typeScale,
  darkTextRules,
  gradients,
  spacing,
  layout,
  radii,
  components,
  animation,
  logo,
  tailwindColors,
} as const

export default brand
