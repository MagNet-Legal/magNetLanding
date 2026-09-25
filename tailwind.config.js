/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Extends magnet-app-front/tailwind.config.js verbatim — see landing DESIGN.md.
        'ink-black': '#1C1C1E', // Primary Text
        'midnight-navy': '#1A2E40', // Dark furniture — accent bands only, never a page background
        'band-top': '#263A52', // Priority-band gradient start
        'band-bottom': '#1C2B3D', // Priority-band gradient end
        'steel-gray': '#6B7280', // Secondary Text
        'ivory-white': '#FDFDFD', // Page ground
        'paper-white': '#FFFFFF', // Raised surfaces
        'cool-taupe': '#E6E6E6', // Borders, dividers, card BG
        'cobalt-blue': '#3A6EA5', // Taxonomy / kicker accent
        'brass-gold': '#E8C56A', // Urgent accent
        'brass-deep': '#E0B84D', // CTA fill
        'brass-ink': '#2E4862', // Text on any brass fill
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // New sections (landing DESIGN.md): Public Sans for display/body, IBM Plex Sans for meta.
        display: ['Public Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        plex: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        // Matches magnet-app-front/tailwind.config.js exactly, so `rounded-sm` etc.
        // resolve to the same pixel values on both surfaces (Tailwind's own
        // default `sm` is 2px, not the 4px the brass CTA is actually built for).
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        // Ported from magnet-app-front/tailwind.config.js — the product's real
        // depth vocabulary (soft lift on light surfaces, an embossed light top
        // edge on dark ones), unused on landing until now despite holding the
        // same palette.
        card: '0 1px 2px rgba(28, 28, 30, 0.04), 0 4px 12px -3px rgba(28, 28, 30, 0.08)',
        'card-dark':
          'inset 0 1px 0 rgba(255, 255, 255, 0.14), 0 2px 4px rgba(20, 24, 34, 0.16), 0 10px 24px -6px rgba(20, 24, 34, 0.32)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
};