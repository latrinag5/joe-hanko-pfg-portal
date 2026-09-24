# Premium Finance Portal — Reuse Template

This project is the base template for LaTrina's Premium Finance advisory portals,
matching the Leonard Gregory / Mark Kelley reference design (dark navy/ivory,
copper accents, Waypoint 01–07 structure).

## To build a new prospect's portal, edit these files only:

| File | What to change |
|---|---|
| `components/hero-section.tsx` | Prospect name, business name, market, advisor name, "Waypoint 01 of 07" label |
| `components/overview-section.tsx` | "Client at a Glance" stats table + bio paragraphs + 3 highlight cards |
| `components/explanation-section.tsx` | Usually stays mostly the same — swap business name references and the pull-quote attribution if advisor changes |
| `components/recommendations-section.tsx` | The 5 waypoint cards — rewrite for the prospect's actual industry (cash flow, retention, growth, succession, exit concerns specific to their business type) |
| `components/benefits-section.tsx` | Usually stays mostly the same — swap business/name references |
| `components/call-prep-section.tsx` | Advisor name + accordion questions tailored to the prospect's business specifics |
| `components/faq-section.tsx` | Answers customized with prospect name/business/industry (questions themselves can stay the same) |
| `components/sources-section.tsx` | New Notes & Sources — confirmed/partial/not-confirmed per new LinkedIn + website research |
| `app/layout.tsx` | Page `<title>` and description |

## Do NOT touch (shared visual system):
- `app/globals.css` — fonts, colors, animations
- `components/waypoint-label.tsx` — the "Waypoint 0X — Section" header component
- `app/page.tsx` — section order

## Workflow for a new prospect
1. Give me the filled-in master prompt fields (name, LinkedIn, website, business, industry, market, advisor).
2. I research LinkedIn + website (flagging anything unconfirmed).
3. I rewrite only the 8 files above with new copy.
4. I restart the dev server and hand you a fresh preview link.

This keeps each new build cheap — no re-scaffolding, no rebuilding the design system,
just fresh prospect-specific copy dropped into the existing structure.
