# Rule: Andromeda B2B Design System (Cruip Simple SaaS Aesthetic)

## Core Directive
Whenever building, modifying, or creating UI components or pages in this project (`andromeda-b2b-landing-page`), always follow the **Cruip "Simple" Design System** documented in [DESIGN_SYSTEM.md](file:///d:/front%20end%20andromeda/DESIGN_SYSTEM.md).

## Design Rules & Token Usage
1. **Color Tokens (`src/styles/global.css`)**:
   - Use `--bg-page` (`#ffffff`) and `--bg-subtle` (`#f8fafc`) for light surfaces.
   - Use `--text-primary` (`#0f172a`) for titles and `--text-secondary` (`#475569`) for body text.
   - Use `--brand-blue` (`#2563eb`) and `--brand-indigo` (`#4f46e5`) for brand accents and buttons.
   - Use `--bg-dark-section` (`#090d16`) and `--dark-card` for dark contrast sections (like the Features Planet).
   - Never use arbitrary inline color codes; always reference the CSS design tokens.

2. **Typography**:
   - Headings must use `--font-display` (`Plus Jakarta Sans` / `Inter`, 700 to 900 weight, tight tracking).
   - Body copy must use `--font-sans` (`Inter`, 400 to 500 weight).
   - Accentuate key headline phrases with `<span class="gradient-text">...</span>`.

3. **Components**:
   - **Navbar**: Keep the floating pill navbar minimal (`.floating-header`) with brand logo on the left and action buttons on the right.
   - **Buttons**: Use `.btn.btn-primary` (solid blue with right arrow) and `.btn.btn-secondary` (white with border).
   - **Cards**: Use `.cruip-card` for light elevated cards and `.dark-card` for dark contrast sections.
   - **Pill Badges**: Use `.pill-badge` with `.pill-highlight`.
   - **Footer**: Maintain the 4-column layout (`Brand`, `Product`, `Company`, `Resources`).

4. **Architecture & Constraints**:
   - Always keep Astro configured as static (`output: 'static'`).
   - Do NOT introduce any backend code, schemas, or server routes into this repository.
   - Preserve `public/CNAME` (`www.andromedab2b.com`) and `public/.nojekyll`.
