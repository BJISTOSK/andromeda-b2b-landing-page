# Andromeda — Design system

The current visual direction is an editorial identity: warm paper, near-black ink, vermilion, precise linework, and a small set of geometric illustrations. This replaces the earlier Cruip and cosmic-glass styling following the requested redesign.

## Foundations

All shared values live in src/styles/global.css.

| Role | Token | Value |
| --- | --- | --- |
| Paper | --bg | #f5f3ed |
| Inset paper | --bg-raised | #eeece5 |
| Ink | --fg | #242620 |
| Secondary ink | --fg-2 | #5d6057 |
| Accent | --accent | #b63d20 |
| Clay illustration | --surface-clay | #e4b29a |
| Sage illustration | --surface-sage | #d9dfd0 |
| Lilac illustration | --surface-lilac | #dedbea |
| Product canvas | --dark-bg | #242a24 |

Use Geist for interface and display type, Geist Mono for short labels and indexes, and Instrument Serif sparingly for expressive words. Keep paragraphs readable; reserve tiny type for nonessential figure annotations.

## Composition

- Maximum container width: 1344px, with 48px desktop gutters, 30px tablet gutters, and 22px phone gutters.
- Breakpoints: 1050px and 760px, with additional component adjustments where necessary.
- Left-aligned, asymmetric compositions. Use hierarchy, spacing, hairline rules, and numbering instead of repeated bordered cards.
- Small, nearly square corners. No ambient glows, gradients, spotlight effects, fake telemetry, or floating glass navigation.
- Use the shared BrandMark and Arrow components. The favicon follows the same identity.
- Use code-native SVG/CSS illustrations for the orbital figure and framework covers.
- Keep all actions connected to real content or an explicitly labeled preview. Avoid invented customers, security certifications, performance claims, and simulated account creation.

## Files

- src/styles/global.css: tokens, reset, shared type, navigation, footer, buttons, forms, accessibility.
- src/styles/home.css: homepage and workspace preview.
- src/styles/library.css: search/filter directory.
- src/styles/pitch-deck.css: shared article reading system.
- src/components/home/OrbitDiagram.astro: connected-business illustration.
- src/components/home/ProductPreview.astro: three sample workspace views, keyboard accessible.
- src/components/pitch-deck/: reader progress, copy link, and previous/next navigation.

The previous space-theme.css and unused legacy home components remain in the repository but are not imported by the active pages.

## Accessibility and behavior

Maintain one H1 per page, labeled controls, visible keyboard focus, a skip link, reduced-motion support, and native hidden states. Workspace tabs support arrow keys, Home, and End. The mobile menu supports Escape. Search and category filters combine and announce result counts. Article tables scroll inside their container on small screens.

## Architecture

Keep Astro static output and the existing domain and deployment setup. No server code or backend dependencies are required by this design. Google Fonts have local system fallbacks. The workspace uses sample data; the Field Notes page clearly indicates that the first edition is in preparation.
