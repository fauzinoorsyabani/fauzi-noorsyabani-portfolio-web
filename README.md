# Fauzi Noorsyabani — Signal Ledger Portfolio

This repository contains Fauzi Noorsyabani’s single-page professional portfolio. It presents applied AI, data science, full-stack engineering, leadership, awards, certifications, and contact information in the **Signal Ledger** visual system: a warm editorial paper canvas, midnight-navy research fields, and cobalt-blue data signals.

> **Primary editing rule:** personal content, URLs, project information, and managed image references are centralized in [`client/src/data/portfolio.ts`](client/src/data/portfolio.ts). Update this file first before changing layout components.

## Product Scope

The portfolio is a client-side React experience built for recruiters, collaborators, technology communities, and potential clients. It provides a clear professional narrative from the hero through to a contact form that prepares a safe email fallback. The page includes smooth in-page navigation, active navigation state, mobile navigation, reduced-motion support, accessible form validation, a scroll-to-top control, SEO metadata, and a dedicated 404 route.

| Area | What it communicates | Primary implementation |
| --- | --- | --- |
| Hero | Fauzi’s professional focus, availability, identity, and key actions | `Home.tsx` + `person`, `links`, and `assetUrls` |
| About | A concise narrative with Build, Analyze, and Lead focus areas | `person`, `focusAreas`, `facts` |
| Tech Stack | Applied-AI, product-engineering, and infrastructure capabilities | `skillGroups` |
| Projects | Featured case studies plus a compact working index | `featuredProjects`, `otherProjects` |
| Experience | Evidence-led career and community timeline | `experience` |
| Recognition | Awards and credentials with only verified outbound links | `awards`, `certifications` |
| Contact | Direct contact details and mailto form fallback | `person`, `links`, form logic in `Home.tsx` |

## Design System: Signal Ledger

The page intentionally avoids a generic technology-portfolio card layout. Its visual language is influenced by research dossiers and product annual reports: large editorial headings, numerical section rails, mono-spaced metadata, hard rules, and evidence-oriented project visuals. The recurring **FN signal mark** pairs stepped navy forms with a cobalt node and appears in the navigation, hero evidence field, and footer.

| Token | Value | Intended use |
| --- | --- | --- |
| Warm paper | `#FAF9F5` | Main reading canvas and quiet content surfaces |
| Midnight navy | `#0B1735` | Hero, experience, contact, and footer sections |
| Cobalt Signal | `#246BFD` | Primary CTA, active navigation, decisive proof points, indices, and data nodes |
| Display font | Space Grotesk | Headlines, names, project titles, and major statements |
| Body font | Manrope | Long-form content and interface labels |
| Metadata font | IBM Plex Mono | Dates, categories, labels, tags, and numeric rails |

Global tokens, typography imports, texture utilities, and motion preferences are declared in [`client/src/index.css`](client/src/index.css). Any new component should preserve this direction by favoring ruled layouts and asymmetry over oversized rounded panels.

## Repository Structure

```text
fauzi-noorsyabani-portfolio/
├── client/
│   ├── index.html                 # SEO metadata, font loading, favicon, social preview
│   └── src/
│       ├── data/portfolio.ts      # Single source of truth for content and assets
│       ├── pages/Home.tsx         # Entire portfolio page and interaction behavior
│       ├── pages/NotFound.tsx     # Branded 404 experience
│       └── index.css              # Signal Ledger tokens and global styles
├── ideas.md                       # Chosen design direction and style decisions
├── todo.md                        # Current update tasks and completion states
├── verification.md                # Completed verification notes
└── README.md                      # This documentation
```

The app uses React 19, TypeScript, Vite, Tailwind CSS 4, Lucide icons, Wouter routing, and pre-installed UI primitives. The portfolio itself uses a static frontend architecture, so it does not rely on a public backend or database.

## Local Development

Install the project dependencies with the package manager already specified in `package.json`, then run the development server. The following commands should be run from the project root.

```bash
pnpm install
pnpm dev
```

Before saving a major revision, validate type safety and the production bundle.

```bash
pnpm check
pnpm build
```

The `pnpm build` command may show a non-blocking bundle-size advisory from Vite. Treat TypeScript errors, build failures, runtime console errors, broken managed asset URLs, and horizontal overflow as release blockers.

## Editing Portfolio Content

Open [`client/src/data/portfolio.ts`](client/src/data/portfolio.ts) to update the portfolio. The file is intentionally organized by the order in which content appears on the page, reducing the risk that a layout edit is needed for an ordinary content update.

| Need to update | Configuration field or collection | Notes |
| --- | --- | --- |
| Name, title, bio, contact details | `person` | The `email` and `phone` values support both display and contact fallback behavior. |
| Resume, GitHub, LinkedIn | `links` | Use full URLs; leave a value blank if it is not yet verified. Blank values show an accessible pending state rather than a broken link. |
| Hero and About portrait | `assetUrls.profilePhoto` | Current managed portrait: `/manus-storage/fauzi-noorsyabani-portrait_5eb3cca1.jpg`. |
| Generated editorial artwork | `assetUrls.heroData`, `tuitionArt`, `productSystemsArt` | Use these only as project illustration; never represent generated art as a real product screenshot. |
| Technical skills | `skillGroups` | Place priority skills in `featured` and supporting skills in `skills`. |
| Featured work | `featuredProjects` | Add a verified `caseStudy`, `demo`, or `source` URL inside `links` when available. |
| Compact project index | `otherProjects` | Keep entries short and outcome-focused. |
| Roles and community work | `experience` | Preserve source-date uncertainty with an explicit `note` instead of guessing. |
| Awards and credentials | `awards`, `certifications` | Do not add unsupported awards, credential IDs, issuer links, or rankings. |

### Adding or Replacing the Portrait

The supplied professional photograph is now displayed naturally in the hero and again in the About spread, using a responsive `object-fit: cover` treatment and the required accessible alt text, **“Portrait of Fauzi Noorsyabani.”** Its original source is not stored inside the frontend project; instead, it has been uploaded to managed project storage and referenced in the data configuration.

To replace the portrait later, put the original image in `/home/ubuntu/webdev-static-assets/`, upload it as a managed web asset, and replace only the `profilePhoto` value.

```bash
manus-upload-file --webdev /home/ubuntu/webdev-static-assets/new-portrait.jpg
```

Use the exact returned `/manus-storage/...` URL in `assetUrls.profilePhoto`. Do not add large photos or media files to `client/public/` or `client/src/assets/`, because that can delay or prevent a static deployment.

### Adding a Resume or External Link

Store the final PDF in managed project storage, then place the returned URL in `links.resume`. For external profiles such as GitHub or LinkedIn, use a verified HTTPS URL. Avoid placeholder domains, shortened links that cannot be audited, or incomplete URLs.

```ts
export const links = {
  resume: "/manus-storage/fauzi-noorsyabani-resume.pdf",
  github: "https://github.com/your-verified-handle",
  linkedin: "https://linkedin.com/in/fauzinoorsyabani",
  email: "mailto:fauzinoorsyabani05@gmail.com",
  phone: "tel:+6281310641534",
} as const;
```

## Contact Form Behavior

The site currently has no backend email service by design. After client-side validation succeeds, the contact form creates a formatted `mailto:` message for Fauzi’s email address. This provides a safe contact path without exposing a service key in browser code.

If a future version requires submissions to be stored, delivered automatically, or routed through a CRM, upgrade the site to a backend-enabled architecture first. Keep all provider secrets on the server side and retain the mailto fallback for users whose scripts or third-party integrations are unavailable.

## Accessibility and Quality Standards

The portfolio includes semantic landmarks, a skip link, keyboard-accessible controls, visible focus states, native labels for every form field, live feedback for pending links and form submission, descriptive image alt text, and a `prefers-reduced-motion` fallback. When adding sections or interactions, maintain those patterns rather than replacing them with mouse-only controls or non-semantic clickable containers.

### Motion System

The Signal Ledger motion system is intentionally evidence-led. The hero is choreographed in a short sequence, proof figures resolve once, the active navigation item receives a cobalt data-rule signal, section rails enter before their editorial copy, project evidence visualizations resolve in place, and timeline nodes illuminate as readers reach each career moment. The system favors `transform` and `opacity` to avoid layout-heavy animation.

Motion is controlled by the shared rules in [`client/src/index.css`](client/src/index.css) and the stateful hero/count-up behavior in [`client/src/pages/Home.tsx`](client/src/pages/Home.tsx). Use the existing classes—such as `hero-sequence`, `motion-card`, `motion-row`, `motion-index-row`, `motion-timeline`, `motion-award`, and `motion-contact`—when adding new content. Motion should clarify narrative order, proof, and feedback rather than introduce unnecessary visual noise.

The primary positioning is **Full Stack AI Engineer**. It is maintained in `person.role`, the supporting biographical content in `portfolio.ts`, the hero metadata rail, and `client/index.html`. When adding copy, preserve the same end-to-end framing: applied AI, data systems, model integration, backend logic, full-stack experiences, and delivery.

Two continuous primitives are available for controlled background movement: `SignalStream` provides a seamless right-to-left technical data track, while `SignalOrbit` creates a slow orbital signal around a visual anchor. These primitives are used selectively in the hero, projects, and contact areas. They are intentionally low contrast, use transform-only animation, do not sit over interactive content, and are omitted at runtime for users who prefer reduced motion. Do not place them in every section; the authored restraint is part of the Signal Ledger system.

The continuous stream is intentionally paced at 46 seconds per loop and uses a larger mono-spaced data label for a calmer premium reading rhythm. Supporting motion includes the hero scan pass, portrait-rule tracing, breathing dossier nodes, and project evidence scans. Preserve their low contrast and background placement; their purpose is to give the dossier a live systems feel without competing with content.

### Professional Links and Theme Control

`links.resume` points to the managed PDF generated from the supplied resume source, and `links.github` points to Fauzi’s verified public GitHub profile. The resume CTA uses the native `download` attribute. Replace either destination only in `client/src/data/portfolio.ts` after the new URL is verified.

The application’s `ThemeProvider` is switchable and persists the selected light or dark mode in browser storage. `Home.tsx` contains the navigation controls, including a compact desktop icon toggle and a clearly labeled mobile-menu action. Dark mode is styled through the `.dark .theme-root` system in `index.css`; maintain high contrast in evidence panels, form surfaces, and text if extending the theme.

For users who request reduced motion, the page exposes the entire experience without animation. This behavior is handled both in CSS and in React, including the hero counters and smooth-scroll behavior. Any new motion behavior must preserve that static, fully readable fallback.

Use the following release checklist for every content or design revision.

| Check | Expected result |
| --- | --- |
| Desktop layout | Hero, project spreads, timeline, navigation, and footer display without overlap at approximately 1280–1440px. |
| Mobile layout | Navigation remains usable, no horizontal scroll appears, and all content remains readable at approximately 390px. |
| Links | Every visible external link is verified; missing links use the page’s pending-link behavior. |
| Images | Managed URLs load correctly, meaningful photos have appropriate alt text, and generated project art is not represented as an authentic screenshot. |
| Forms | Validation messages remain associated with their fields and the mailto fallback still opens properly. |
| Motion | Scroll reveals and hover motion remain subtle, and reduced-motion preferences remove nonessential animation. |
| Code quality | `pnpm check` and `pnpm build` complete successfully with no client-console errors. |

## Search and Social Metadata

The document title, description, Open Graph title, Open Graph description, Open Graph image, theme color, and favicon are set in [`client/index.html`](client/index.html). When the public production domain is known, update the Open Graph URL and confirm the preview image is appropriate for social sharing. Use a real project-domain URL and a managed image URL; do not publish a temporary local path.

## Current Items Still Requiring Input

The supplied portrait is integrated. The remaining items are intentionally marked as editable: a final resume PDF, verified GitHub profile, individual case-study/demo/source links, credential URLs, a confirmed final date statement for the additional Global Game Jam effort, and an optional production-grade contact form provider. These pending values are all tracked in [`client/src/data/portfolio.ts`](client/src/data/portfolio.ts) and [`todo.md`](todo.md).

## Publishing

After a checkpoint has been created and the preview has been reviewed, publish directly from the project interface using the **Publish** control. The publishing UI supports a managed public address and later custom-domain configuration. Before publishing, update the resume, verified professional links, and social preview URL so that shared traffic lands on complete and trustworthy contact information.

## References

[1] [React documentation](https://react.dev/)

[2] [Vite documentation](https://vite.dev/)

[3] [Tailwind CSS documentation](https://tailwindcss.com/docs)
