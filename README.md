# Andromeda B2B Operating System & Platform

> Autonomous B2B Operating Fabric with decoupled static front-end hosted on GitHub Pages with custom domain and Cloudflare CDN support.

---

## 🏛 Architecture Overview

The front-end is completely decoupled and isolated from the backend:

- **Front-End Repository (Public):** [https://github.com/BJISTOSK/andromeda-b2b-landing-page](https://github.com/BJISTOSK/andromeda-b2b-landing-page)
- **Live Production URL:** [https://www.andromedab2b.com](https://www.andromedab2b.com)
- **Backend Repository (Private):** [https://github.com/BJISTOSK/andromeda-b2b-backend](https://github.com/BJISTOSK/andromeda-b2b-backend) (Convex Reactive Cloud)

```
andromeda-b2b/
├── src/                      # STATIC FRONT-END (Astro 5.x)
│   ├── components/           # Navbar, Footer, Hero, Features, PitchForm, BosConsole
│   ├── layouts/              # Master Layout with Cosmic Theme, SEO & Fonts
│   ├── lib/                  # Client API contracts
│   ├── pages/
│   │   ├── index.astro       # Landing Page (Ecosystem Overview & Solutions)
│   │   ├── startups-pitch.astro # Startups Pitch Track & Application Portal
│   │   └── bos.astro         # BOS (Business Operating System) Console
│   └── styles/               # Cosmic design tokens & glassmorphism CSS
├── ci/
│   └── ci-cd.yml             # CI/CD deployment configuration
├── public/
│   ├── CNAME                 # Custom domain: www.andromedab2b.com
│   ├── .nojekyll             # GitHub Pages asset routing
│   ├── _headers              # Cloudflare edge cache rules & security headers
│   └── favicon.svg           # Andromeda logo
├── astro.config.mjs          # Astro configuration (output: 'static')
└── wrangler.toml             # Cloudflare Pages configuration
```

---

## 🚀 Sections & Features

1. **Landing Page (`/`)**:
   - Hero with cosmic typography and live telemetry ticker.
   - Enterprise solutions grid (BOS, Startups Pitch, Cloudflare Edge, Decoupled Architecture).
   - Quick-jump ecosystem hub for founders and enterprise operators.

2. **Startups Pitch Portal (`/startups-pitch`)**:
   - 4 Venture Tracks: Pre-Seed Fast Track, Seed Acceleration, Enterprise Pilot, Growth Syndicate.
   - Interactive Pitch Submission Form with validation.

3. **BOS Operations Console (`/bos`)**:
   - Enterprise Business Operating System.
   - Live telemetry for B2B Ecosystem Volume, Active Nodes, SLA Uptime, and Gateway Throughput.
   - Active operational node management with live re-sync controls.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start Astro development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```
