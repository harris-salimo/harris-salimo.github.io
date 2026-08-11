# Portfolio personalization

Approved visual direction that supersedes the Odin-inspired typography, palette, portrait treatment, project colors, and contact composition in `docs/design-system.md`.

## Positioning

The portfolio uses an “editorial engineering” identity: restrained, technical, readable, and project-first. The responsive About, Projects, and Contact architecture remains, while the visual language is distinct from the original exercise reference.

Hero statement:

> I build reliable web applications from interface to infrastructure.

## Identity

- Display typeface: Space Grotesk, locally hosted at `src/assets/fonts/space-grotesk-500.woff2`.
- Content typeface: Roboto, locally hosted in regular and medium weights.
- Page: ivory `#F7F3EA`.
- Ink: near-black `#101820`.
- Primary: petroleum `#0B4F5C`.
- Dark surface: `#122A32`.
- Accent: amber `#E3A33C`.
- Muted copy: `#536168`.
- Geometry: a restrained engineering grid, square corners, strong borders, and offset shadows.

The abstract `HMS` monogram in `src/assets/identity/monogram.svg` replaces the fictional hero portrait. The contact graphic in `src/assets/identity/contact-graphic.svg` carries the same grid and monogram language. Both render decoratively with empty HTML alternatives because the surrounding text already communicates the identity.

The favicon at `public/favicon.svg` uses the same petroleum, amber, and ivory identity.

## Projects

The six placeholders retain their 4:3 replacement contract but use a coherent personalized palette rather than the Odin rainbow. Each card displays a compact text-based technology line; no skill meters, percentage claims, logo cloud, or decorative badge collection is used.

Technology lines:

- Expense Tracker — TypeScript · AdonisJS · React · Inertia
- Manager — PHP · Laravel · React · Inertia
- Message App — TypeScript · AdonisJS · React · SSE
- Inventory — TypeScript · AdonisJS · React · Monorepo
- Face Detector — Python · OpenCV · CLI · Pytest
- eShop Starter — TypeScript · AdonisJS · React · TanStack

## Contact

LinkedIn remains the public contact channel. The section includes the explicit action `Start a conversation on LinkedIn`, while GitHub, LinkedIn, and GitLab remain accessible icon links. No email address, phone number, or physical address is exposed.

## Verification

- Production Astro build succeeds.
- Browser renders were inspected at 375px, 1024px, and 1440px.
- No horizontal overflow or broken image was found at those widths.
- Motion remains subtle and honors `prefers-reduced-motion`.
- The identity and graphics remain replaceable without changing project or social-link data contracts.
