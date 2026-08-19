# Fauzi Noorsyabani Portfolio — Design Directions

## Three Possible Approaches

### 1. Signal Ledger
**Very Brief Intro:** A warm editorial portfolio that reads like a well-designed research journal, using inky navy fields and cobalt signals to frame technical credibility. It feels composed, analytical, and human rather than futuristic for its own sake.

**Probability:** 0.07

### 2. Studio Circuit
**Very Brief Intro:** A tactile digital-studio direction built around fine circuit lines, soft graphite panels, and precise modular cards. The atmosphere is contemporary and systems-minded, with emphasis on product craft.

**Probability:** 0.04

### 3. Field Notes / Future Work
**Very Brief Intro:** A documentarian approach combining clean field-note typography with muted maps, data markers, and project artifacts. It highlights community impact and learning in a more approachable, grounded way.

**Probability:** 0.08

## Chosen Direction — Signal Ledger

### Design Movement
Contemporary **editorial minimalism** informed by research journals, information design, and high-end product annual reports. The site should feel like an intelligent professional dossier rather than a conventional developer template.

### Core Principles
1. **Evidence before ornament:** Use measured facts, project outcomes, and clear information hierarchy as the primary visual material.
2. **Asymmetric calm:** Compose sections like spreads, with deliberate offsets, oversized type, and anchored side notes instead of repeated centered cards.
3. **Technical warmth:** Balance a tactile cream paper ground with deep navy ink and one precise electric-blue signal.
4. **Progressive disclosure:** Let navigation, expandable visual hierarchy, and restrained motion reward exploration without concealing essential information.

### Color Philosophy
The principal canvas is a warm mineral white that avoids sterile startup-page brightness. Deep midnight navy creates authority and contrast for the pivotal hero, experience, and contact moments. **Cobalt Signal (#246BFD)** marks navigation, data points, CTAs, and active states; a sparse iris-violet undertone is reserved for a few chart and hover accents. The resulting mood is confident and analytical, while still open and personable.

### Layout Paradigm
The page is arranged as a **vertical research dossier**: a headline-heavy hero, then alternating editorial spreads with a narrow metadata rail and a wide content field. Project work uses an intentional feature spread plus a compact index, while experience uses a long-stemmed timeline. This avoids a generic, uniformly gridded landing page.

### Signature Elements
1. A small **FN signal mark** formed from interlocking vertical bars and a single cobalt data node.
2. Fine **data-rule lines**, dots, and numeric index labels that recur as section anchors, not decoration.
3. A tailored **monospace metadata system** for dates, tags, availability, and category labels.

### Interaction Philosophy
Interactions behave like navigating a well-organized report: clear, quiet, and immediate. Links gain a cobalt underline draw, cards raise only slightly, and the active section is visibly indexed. The mobile menu is explicit, keyboard-reachable, and never hides the current page state.

### Animation
Section content enters with a short 18–28px upward reveal and 40–80ms stagger; cards use transform and opacity only, with a strong ease-out under 300ms. The hero data line has a restrained dash offset animation while in view. Navigation and buttons respond in 120–180ms and compress subtly on press. Every nonessential motion is removed under `prefers-reduced-motion`.

### Typography System
**Space Grotesk** provides muscular, contemporary display typography for headings and the name. **Manrope** supports long-form readability, facts, and project narratives. **IBM Plex Mono** handles dates, tags, metadata, and data labels at controlled small sizes. Headings retain tight tracking and an asymmetric line measure; body copy stays generous and quiet.

### Brand Essence
**An applied-AI and data-product portfolio for organizations seeking a technically grounded builder who turns complexity into useful systems.**

Personality: **analytical, inventive, civic-minded**.

### Brand Voice
Headlines are direct and specific, while CTAs invite a concrete professional next step. Microcopy is clear, credible, and measured; it avoids inflated claims and generic startup language.

> Example headline: “Turning data, product thinking, and applied AI into systems people can use.”

> Example CTA: “Start a practical conversation.”

### Wordmark & Logo
The wordmark is a letterspaced **FAUZI / NOORSYABANI** lock-up paired with the FN signal mark: two stepped navy uprights, a cobalt junction dot, and a negative-space diagonal that implies forward movement. The mark must remain legible at favicon scale and can stand alone in the navigation.

### Signature Brand Color
**Cobalt Signal — #246BFD**

## Style Decisions

- The FN signal mark is a recurring structural device: navy stepped uprights and a single cobalt node paired with a letterspaced **FAUZI / NOORSYABANI** lock-up. It appears in the navigation, hero evidence field, section rails, and footer rather than functioning as a small generic logo.
- Cobalt Signal is reserved for primary actions, active navigation, section indices, decisive proof points, and key data nodes. Passive UI uses graphite rules, midnight navy, and warm paper instead.
- Project imagery should behave as analytical evidence: annotated charts, report fragments, maps, and data artifacts rather than generic glowing technology imagery.
- Each major section is organized as a visible dossier spread: a narrow metadata rail, numeric index, fine data rule, and a small FN/cobalt-node signal. This structure is functional rather than decorative.
- Rounded cards are reserved for genuine evidence artifacts. Editorial spreads, rules, report rows, indexes, and timeline blocks are the default composition.
