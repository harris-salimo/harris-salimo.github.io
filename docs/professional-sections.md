# Professional sections

Approved homepage Services and Technologies specification.

## Placement and purpose

The sections appear after Selected Work and before future Latest Articles and Contact content. Projects remain the primary proof of experience; these sections provide a concise, recruiter- and client-friendly summary without turning the portfolio into a generic skills résumé.

## Services

The Services section uses a dark petroleum engineering-grid surface and three numbered semantic articles:

1. **Web Application Development** — Full-stack applications built from product requirements to production-ready code.
2. **API & Backend Engineering** — Secure APIs, business logic, authentication, database design, and integrations.
3. **Application Modernization** — Refactoring, migrations, reliability improvements, testing, and developer tooling.

The articles form three columns on desktop and tablet, then stack on mobile. They make no claims about pricing, availability, guarantees, or unsupported specializations.

## Technologies

The Technologies section uses a semantic definition list on the ivory page surface:

- **Frontend** — TypeScript, React
- **Backend** — Node.js, AdonisJS, PHP, Laravel, Python
- **Data** — PostgreSQL, MySQL
- **Systems** — Linux, Bash

The presentation is deliberately text-based. Do not add percentages, proficiency levels, skill meters, logo clouds, or decorative badge collections.

## Implementation

- Typed content: `src/data/portfolio.ts`
- Services component: `src/components/ServicesSection.astro`
- Technologies component: `src/components/TechnologiesSection.astro`
- Responsive styles: `src/styles/global.css`
- Stable anchors: `#services` and `#technologies`

The production Astro build succeeds. Browser renders were verified at 375px, 1024px, and 1440px with three service cards, four technology groups, no horizontal overflow, no broken images, and no console errors.
