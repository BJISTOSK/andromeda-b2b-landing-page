# Andromeda B2B — Design System Reference Guide

> **Architecture & Theme**: Cruip "Simple" Modern SaaS Aesthetic  
> **Framework**: Astro 7.x (Static Generation)  
> **Styling**: Vanilla CSS Design Tokens (`src/styles/global.css`)  
> **Production Target**: GitHub Pages with Custom Domain (`www.andromedab2b.com`)

---

## 1. Overview & Core Philosophy

The Andromeda B2B Platform design system is modeled after Cruip's **"Simple"** landing page template. It provides a clean, premium, high-converting SaaS user experience through:
1. **Light / Slate Base Palette**: Crisp white (`#ffffff`) and slate-50 (`#f8fafc`) backgrounds paired with high-contrast slate-900 (`#0f172a`) headings and slate-600 (`#475569`) body copy.
2. **Signature Focal Contrast**: Dark contrast sections (such as the **Features Planet** section) using deep slate-950 (`#090d16`) with radial indigo/blue spotlights and glowing 3D spheres.
3. **Micro-Interactions**: Subtle button translations (`translateY(-1px)`), right-arrow hover nudges (`translateX(2px)`), pulsing status dots, and floating orbiting badges.
4. **Floating Navigation**: A floating pill header pinned to the viewport top with glassmorphic backdrop blur and clean action buttons.
5. **Decoupled Speed**: Zero runtime JavaScript overhead on static presentation pages, guaranteeing 100/100 Core Web Vitals.

---

## 2. Color Tokens

All colors are centralized as CSS custom properties in `src/styles/global.css`:

### Surface & Background Tokens
| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `--bg-page` | `#ffffff` | Primary page background |
| `--bg-subtle` | `#f8fafc` | Subtle slate surface (slate-50) for alternating sections |
| `--bg-surface` | `#ffffff` | White surface for cards and dropdowns |
| `--bg-dark-section` | `#090d16` | Deep dark slate for contrast sections (e.g. Planet) |
| `--bg-dark-card` | `#0f172a` | Dark card surface (slate-900) |
| `--bg-dark-card-hover` | `#1e293b` | Hover state for dark cards (slate-800) |

### Typography Tokens
| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `--text-primary` | `#0f172a` | Slate-900 for titles and headings |
| `--text-secondary` | `#475569` | Slate-600 for body copy and descriptions |
| `--text-muted` | `#64748b` | Slate-500 for metadata, timestamps, and subtitles |
| `--text-inverse` | `#ffffff` | Pure white text on dark surfaces |
| `--text-dark-muted` | `#94a3b8` | Slate-400 for secondary copy on dark backgrounds |

### Brand Accents
| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `--brand-blue` | `#2563eb` | Primary brand action color (blue-600) |
| `--brand-blue-hover` | `#1d4ed8` | Primary button hover state (blue-700) |
| `--brand-blue-light` | `#eff6ff` | Light blue tint for badges & icon backgrounds |
| `--brand-indigo` | `#4f46e5` | Secondary brand accent (indigo-600) |
| `--brand-cyan` | `#06b6d4` | Cyan accent for highlights |
| `--brand-emerald` | `#10b981` | Emerald for active status dots and success states |
| `--brand-pink` | `#ec4899` | Pink accent for venture badges |
| `--brand-amber` | `#f59e0b` | Amber for warnings and ratings |

### Borders & Dividers
| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `--border-subtle` | `#e2e8f0` | Standard 1px border for cards, inputs, and dividers |
| `--border-light` | `#f1f5f9` | Very light divider for section borders |
| `--border-strong` | `#cbd5e1` | Hover/focus border state |
| `--border-dark` | `rgba(255, 255, 255, 0.1)` | Subtle border for dark contrast cards |

### Shadows & Glows
| Token | Value | Description |
| :--- | :--- | :--- |
| `--shadow-xs` | `0 1px 2px rgba(0, 0, 0, 0.05)` | Subtle elevation for badges and pills |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | Standard button and small card shadow |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.08), ...` | Elevated card hover shadow |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.08), ...` | Dropdown and modal shadow |
| `--shadow-2xl` | `0 25px 50px -12px rgba(15, 23, 42, 0.18)` | Large hero mockup shadow |
| `--shadow-blue` | `0 4px 14px 0 rgba(37, 99, 235, 0.35)` | Glowing primary button elevation |

---

## 3. Typography Scale

Fonts are imported via Google Fonts:
- **Display / Headings**: `Plus Jakarta Sans`, `Inter`, sans-serif (`--font-display`)
- **Body & Controls**: `Inter`, system-ui, sans-serif (`--font-sans`)

```css
h1 {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5.5vw, 4.25rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.035em;
  color: var(--text-primary);
}

h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: var(--text-primary);
}

h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

p.lead {
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  color: var(--text-secondary);
  line-height: 1.6;
}

p.body {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

### Gradient Text Utility
Used for accentuating key words within headlines:
```html
<span class="gradient-text">scaled B2B commerce</span>
```
```css
.gradient-text {
  background: linear-gradient(135deg, #2563eb 0%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
```

---

## 4. Reusable UI Components

### 4.1. Floating Navbar (`src/components/Navbar.astro`)
Pinned floating header with glassmorphism backdrop blur:
```html
<header class="floating-header">
  <div class="floating-header-inner">
    <!-- Brand Logo -->
    <a href="/" class="brand-logo" aria-label="Andromeda Home">
      <div class="logo-mark">
        <svg viewBox="0 0 32 32" fill="none">...</svg>
      </div>
      <span class="brand-name">Andromeda<span class="brand-dot">.</span></span>
    </a>

    <!-- Action Buttons -->
    <div class="nav-actions">
      <a href="#signin" class="nav-link-subtle">Sign In</a>
      <a href="#trial" class="btn btn-primary btn-sm">
        <span>Start Free Trial</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  </div>
</header>
```

### 4.2. Buttons (`.btn`)
Standard button classes:
- **Primary Button**: Solid blue with subtle drop glow and arrow hover transition.
- **Secondary Button**: White surface with slate-200 border and subtle hover tint.
- **Hero Sizing**: Extra padding for hero CTAs (`.btn-hero`).

```html
<!-- Primary Hero Button -->
<a href="#trial" class="btn btn-primary btn-hero">
  <span>Start Free Trial</span>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
</a>

<!-- Secondary Hero Button -->
<a href="#features" class="btn btn-secondary btn-hero">
  <span>Learn More</span>
</a>
```

### 4.3. Cards (`.cruip-card` & `.dark-card`)
- **Light Cards (`.cruip-card`)**:
  - Background: `#ffffff`
  - Border: `1px solid var(--border-subtle)` (`#e2e8f0`)
  - Border Radius: `1rem` (16px)
  - Hover: `transform: translateY(-2px); box-shadow: var(--shadow-lg); border-color: var(--border-strong);`
- **Dark Cards (`.dark-card`)**:
  - Background: `rgba(15, 23, 42, 0.7)` with `backdrop-filter: blur(16px)`
  - Border: `1px solid rgba(255, 255, 255, 0.08)`
  - Hover: `border-color: rgba(99, 102, 241, 0.4); transform: translateY(-3px);`

### 4.4. Pill Badges (`.pill-badge`)
Used for category headers, announcement tags, and status indicators:
```html
<div class="pill-badge">
  <span class="pill-highlight">Core Pillars</span>
  <span>&bull; Enterprise B2B Platform</span>
</div>
```

### 4.5. Status Dots (`.status-dot`)
Live indicator dot with pulsating animation:
```html
<span class="status-dot status-dot-active"></span>
```

### 4.6. Testimonials (`src/components/Testimonial.astro`)
Centered quotation with stylized SVG quote marks, author avatar initials, and 5-star rating:
```html
<blockquote class="testimonial-quote">
  “Andromeda has transformed our enterprise operations in more ways than one...”
</blockquote>
<div class="testimonial-author">
  <div class="author-avatar"><span>MK</span></div>
  <div class="author-info">
    <span class="author-name">Marcus Vance</span>
    <span class="author-title">Chief Technology Officer at Enterprise Partner</span>
  </div>
</div>
```

### 4.7. Call-to-Action Banner (`.cta-banner`)
Dark container with radial spotlight glow and dual action buttons:
```html
<div class="cta-banner">
  <div class="cta-content">
    <h2 class="cta-title">Create your next project with <span class="gradient-text">Andromeda</span></h2>
    <p class="cta-desc">Deploy your static front-end globally across Cloudflare edge locations...</p>
    <div class="cta-actions">
      <a href="#trial" class="btn btn-primary btn-hero">Start Free Trial</a>
      <a href="#features" class="btn btn-secondary btn-hero">Learn More</a>
    </div>
  </div>
  <div class="cta-glow" aria-hidden="true"></div>
</div>
```

### 4.8. Footer (`src/components/Footer.astro`)
4-column clean layout matching Cruip Simple:
1. **Brand Block**: Logo mark, tagline, and copyright.
2. **Product**: Features, Integrations, Pricing & Plans, Changelog.
3. **Company**: About us, Diversity & Inclusion, Blog, Careers.
4. **Resources**: Community, Terms of service, Report a vulnerability.
5. **Bottom Bar**: Domain tag (`www.andromedab2b.com`) and legal links.

---

## 5. Spacing & Responsive Grid

The layout container is strictly constrained for readability:
- Max Width: `1152px` (`max-w-6xl`)
- Centered: `margin-left: auto; margin-right: auto;`
- Horizontal padding: `1.25rem` (20px)

### Grid Utilities:
- `.grid-2`: 2 equal columns (collapses to 1 column at `<= 640px`)
- `.grid-3`: 3 equal columns (collapses to 1 column at `<= 960px`)
- `.grid-4`: 4 equal columns (collapses to 2 columns at `<= 960px`, 1 column at `<= 640px`)

---

## 6. Architecture & Deployment Constraints

1. **Pure Static Generation**: Astro must remain configured with `output: 'static'` in `astro.config.mjs`.
2. **Zero Backend Leakage**: Never place backend server logic, secret keys, or database schemas in this front-end repository. Decoupled client contracts reside strictly in `src/lib/api.ts`.
3. **GitHub Pages & Porkbun DNS**:
   - `public/CNAME` must always specify `www.andromedab2b.com`.
   - `public/.nojekyll` must remain present so GitHub Pages serves `_astro/` bundled static assets.
   - Deployment command: `npm run deploy` (`astro build && npx gh-pages -d dist -b gh-pages -t`).
