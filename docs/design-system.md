# Portfolio design system

Code-ready visual and responsive specification for the portfolio implementation.

## Source of truth

The approved design references are:

- Desktop: `/home/harris/Downloads/Images/portfolio.png` — 2880 × 5414 image, representing a 1440px CSS viewport at 2× density.
- Tablet: `/home/harris/Downloads/Images/portfolio tablet.png` — 2048 × 7032 image, representing a 1024px CSS viewport at 2× density.
- Mobile: `/home/harris/Downloads/Images/portfolio mobile.png` — 750 × 11444 image, representing a 375px CSS viewport at 2× density.

Treat these references as the approved production design. Do not add navigation, calls to action, badges, pills, extra sections, gradients, rounded containers, or decorative overlays.

## Technology and structure

- Render a static Astro page.
- Use the installed Tailwind CSS v4 integration and define shared theme tokens in the global stylesheet.
- Self-host Playfair Display and Roboto through project dependencies rather than runtime Google Fonts requests.
- Keep content data separate from presentation so projects and social links are rendered from typed data.
- Recommended component families:
  - `HeroAbout`
  - `SocialLinks`
  - `ProjectGrid`
  - `ProjectCard`
  - `ContactSection`

## Tokens

### Color

| Token | Value | Use |
| --- | --- | --- |
| `--color-page` | `#FFFFFF` | True-white page and card surfaces |
| `--color-text` | `#0B1009` | Primary text and icons |
| `--color-muted` | `#575655` | Body and project description text |
| `--color-brand` | `#0891B2` | Hero backdrop sampled from the reference |
| `--color-brand-accessible` | `#077D99` | Contact surface behind small white text |
| `--color-project-red` | `#9E1C1C` | Reference project palette |
| `--color-project-purple` | `#7C75CA` | Reference project palette |
| `--color-project-green` | `#5E8F4D` | Reference project palette |
| `--color-project-pink` | `#C363B4` | Reference project palette |
| `--color-project-orange` | `#D88F39` | Reference project palette |
| `--color-project-blue` | `#4BA2D2` | Reference project palette |

Use white project-thumbnail text only when the chosen background meets the large-text contrast requirement. For orange and blue placeholders, use dark text or an accessible darker tone while preserving the approved hue family. The final project-media choice belongs to the “Choisir les visuels des cartes projet” decision.

### Typography

- Display family: `"Playfair Display", Georgia, serif`.
- Content family: `"Roboto", system-ui, sans-serif`.
- Name: 72px desktop, 64px tablet, 48px mobile.
- Section headings: 48px desktop, 46px tablet, 40px mobile.
- About body: 20px desktop, 18px tablet, 16px mobile.
- Project-media label: approximately 48px desktop, 44px tablet, 42px mobile.
- Project title: 20px desktop, 18px tablet, 17px mobile.
- Project description: 14px at every breakpoint.
- Use compact, deliberate line heights and no browser-default control typography.

### Shape, elevation, and motion

- Cards and images use square corners.
- Card and About elevation: `0 4px 10px rgb(0 0 0 / 18%)`.
- Use an 8px base spacing rhythm, with fluid `clamp()` values for large section gaps.
- No essential animation. Restrict hover/focus transitions to roughly 150ms and honor `prefers-reduced-motion`.

## Responsive model

### Breakpoints

- Mobile: below 600px.
- Tablet: 600px through 1099px.
- Desktop: 1100px and above.

Target content widths:

- Mobile: approximately 330px with 22–24px page gutters.
- Tablet: approximately 850px.
- Desktop: approximately 1260px.

### Hero and About

- Use an absolutely positioned turquoise backdrop with a diagonal lower edge; no gradient.
- Desktop: portrait on the left, elevated white About panel overlapping on the right, name over the lower portrait, social icons at the panel's lower right.
- Tablet: the portrait floats into the elevated About composition; the About paragraph can continue beneath the portrait. Place the name across the upper turquoise area.
- Mobile: portrait first, name over its lower edge, professional title beneath the name, then an unframed About section with centered heading and no shadow.
- Display `Full-Stack Developer` as a restrained Roboto subtitle beneath the name.

Portrait behavior:

- Hero asset: `src/assets/portraits/hero-placeholder.png`.
- Render with `object-fit: cover` and start from `object-position: 50% 42%`.
- Preserve the face and chin-resting hand at every breakpoint.
- Do not place a tint or color overlay on the image.

### Project section

- Heading: `My work`.
- Desktop: three equal columns.
- Tablet: two equal columns.
- Mobile: one column.
- Reserve a project-media region close to a 4:3 ratio and a white information panel below it.
- Use roughly 48px desktop/tablet column gaps and larger vertical row gaps; use approximately 74px between mobile cards.
- Use one repository action per card, represented by the correct GitHub or GitLab icon.
- Do not render an empty or disabled demo action.

### Contact section

- Use `#077D99` behind white contact copy to preserve the turquoise direction while meeting small-text contrast.
- Desktop and tablet: content on the left, contact portrait on the right.
- Mobile: contact copy first, then the portrait full width.
- Contact asset: `src/assets/portraits/contact-placeholder.png`.
- Render with `object-fit: cover` and start from `object-position: 50% 42%`.
- Preserve the face, phone hand, and enough laptop context in narrow crops.
- Do not place a tint or color overlay on the image.

## Visible copy inventory

No visible text outside this inventory may be added without approval.

### Document metadata

- Title: `Harris Maïla Salimo — Full-Stack Developer`
- Description: `Full-stack developer building reliable, maintainable web applications from interface to infrastructure.`

### Hero and About

- `Harris Maïla Salimo`
- `Full-Stack Developer`
- `About me`
- `I’m a full-stack developer focused on building reliable, maintainable web applications from interface to infrastructure. I work across TypeScript, React, Node.js, AdonisJS, PHP, Laravel, and SQL databases, with Linux, Bash, and Python as part of my daily toolkit. I enjoy turning complex requirements into clear, practical software.`

### Projects

- Section heading: `My work`
- `Expense Tracker` — `A full-stack expense management app built with AdonisJS, React, Inertia, and TypeScript, with database migrations, tests, and deployment configuration.`
- `Manager` — `A project management platform for clients, projects, tasks, roles, and permissions, built with Laravel, React, and Inertia.`
- `Message App` — `A real-time messaging application built with AdonisJS and React in a type-safe TypeScript monorepo.`
- `Inventory` — `A type-safe inventory management application built as an AdonisJS monorepo with a React frontend.`
- `Face Detector` — `A configurable Python and OpenCV toolkit for face detection, recognition, training, and camera or CLI workflows.`
- `eShop Starter` — `An AdonisJS monorepo starter with an authenticated API backend, type-safe client generation, and a frontend workspace.`

### Contact

- `Contact me`
- `Interested in working together or discussing a project? Send me a message on LinkedIn. You can also explore my work on GitHub and GitLab.`
- Do not display an email address, physical address, or phone number.

## Links and icons

- LinkedIn: `https://www.linkedin.com/in/harris-ma%C3%AFla-salimo/` — contact channel.
- GitHub: `https://github.com/harris-salimo` — profile/work link.
- GitLab: `https://gitlab.com/HarrisSalimo` — profile/work link.
- Project cards link only to their approved GitHub or GitLab repository.
- Use crisp filled inline SVG brand icons with `currentColor`, matching the reference's visual weight.
- Suggested sizes: 22px on project cards, 28px in the hero, and 36–38px in the contact section.

## Accessibility

- Use semantic landmarks and a logical heading hierarchy.
- Give every icon-only link an explicit accessible name.
- Use visible keyboard focus styles that are not clipped by card overflow.
- Open external links safely with `rel="noreferrer"` when using a new browsing context.
- Use the approved portrait alternative text from the portrait decision.
- Keep decorative background geometry out of the accessibility tree.
- Do not rely on color alone to communicate an action or repository host.
- Prevent layout shifts by reserving image dimensions/aspect ratios.

## Fidelity checklist

1. Capture full-page browser renders at CSS widths 1440px, 1024px, and 375px, preferably at 2× density where supported.
2. Inspect the original references and latest renders with `view_image` in the same QA pass.
3. Compare section order, first-viewport balance, diagonal hero geometry, overlap model, section gaps, contact composition, and full-page rhythm.
4. Audit exact visible copy and ensure no unapproved text, demo icon, navigation, or CTA appears.
5. Audit Playfair Display/Roboto loading, font sizes, weights, line heights, and mobile wrapping.
6. Audit sampled colors, true-white surfaces, shadows, square corners, and the absence of gradients or photo overlays.
7. Audit every icon's brand, fill style, size, alignment, focus state, and accessible label.
8. Audit portrait crops and all final project media at each breakpoint.
9. Exercise every social and repository link and confirm no inert control is rendered.
10. Run the production build and remove temporary QA artifacts before handoff.

The final QA ticket owns any additional visual constraint or justified deviation that only becomes apparent during native-size browser comparison.
