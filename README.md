# ForestPro Company Website

<img src="dist/assets/Logo/Fpr%20-%20Logo%20HiRes.png" alt="ForestPro" width="240">

ForestPro's company website presents the company as a strategic forestry partner for permit holders and landowners. The one-page experience connects forest potential, responsible management, operational capabilities, and sustainable outcomes in a single editorial narrative.

[![Deploy GitHub Pages](https://github.com/Veetrah/forestpro-company-website-prototype/actions/workflows/pages.yml/badge.svg)](https://github.com/Veetrah/forestpro-company-website-prototype/actions/workflows/pages.yml)

## Website structure

The homepage follows this sequence:

1. Hero
2. From Potential to Practice
3. Who We Are
4. Our Direction
5. Corporate Values
6. What We Do
7. Our Focus Areas
8. Sustainable Outcomes
9. Contact and footer

The site uses English by default and includes an authored Bahasa Indonesia version. The language choice is stored in the visitor's browser. The brand line "Towards Greener Future" remains in English in both versions.

## Main features

- Responsive editorial layouts for phones, foldables, tablets, laptops, and large desktop monitors
- Scroll-driven chapter transitions with a reduced-motion fallback
- English and Bahasa Indonesia language controls
- Keyboard-accessible navigation and labelled contact actions
- ForestPro photography, logos, and a self-hosted Aileron headline font
- Automatic deployment to GitHub Pages from the `main` branch
- No application framework or production build step

## Technology

| Layer | Implementation |
| --- | --- |
| Markup | Semantic HTML5 |
| Styling | Custom responsive CSS |
| Interaction | Vanilla JavaScript |
| Icons | Iconify web component through CDN |
| Headline font | Self-hosted Aileron Semibold |
| Body font | Tahoma system font |
| Hosting | GitHub Pages and GitHub Actions |

## Local preview

The production-ready website lives in `dist/`. No compilation is required.

```bash
git clone https://github.com/Veetrah/forestpro-company-website-prototype.git
cd forestpro-company-website-prototype
npx serve dist -l 4173
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173) in a browser.

Any static file server can serve the `dist/` directory. Opening `dist/index.html` directly also works for basic inspection, although a local HTTP server gives a closer match to GitHub Pages.

## Project files

```text
.
|-- .github/
|   `-- workflows/
|       `-- pages.yml
|-- dist/
|   |-- assets/
|   |-- app.js
|   |-- index.html
|   `-- styles-light.css
|-- DESIGN.md
`-- README.md
```

| File | Purpose |
| --- | --- |
| `dist/index.html` | Page structure, English fallback copy, metadata, and accessible labels |
| `dist/styles-light.css` | Layout, responsive rules, visual system, and reduced-motion states |
| `dist/app.js` | Bahasa Indonesia copy, language state, navigation, and scroll choreography |
| `dist/assets/` | ForestPro logos, field photography, and the Aileron font file |
| `DESIGN.md` | Design direction and the reasons behind major interface decisions |
| `.github/workflows/pages.yml` | GitHub Pages deployment workflow |

## Editing content

English copy is written directly in `dist/index.html`. Bahasa Indonesia translations are stored in the `translations.id` map inside `dist/app.js`.

When changing website copy:

1. Update the English source in `dist/index.html`.
2. Update the matching Indonesian translation in `dist/app.js`.
3. Keep existing `data-i18n`, `data-i18n-html`, and accessible-label keys intact.
4. Check both language modes at phone and desktop widths.

The current language is stored under the `forestpro-language` local storage key.

## Responsive QA targets

The layout has been checked at these CSS viewport sizes:

| Viewport | Coverage |
| --- | --- |
| 344px wide | Narrow foldable cover stress test |
| 380px wide | Phone portrait |
| 416 x 657 | Galaxy Z Fold8 cover profile |
| 480px wide | Large Android phone |
| 616 x 816 | Galaxy Z Fold8 rotated open profile |
| 768px wide | Small tablet |
| 816 x 616 | Galaxy Z Fold8 open profile |
| 884px wide | Open foldable stress test |
| 1024px wide | iPad and tablet portrait |
| 1280 x 720 | Short laptop viewport |
| 1280 x 800 | Laptop viewport |
| 1920 x 1080 | Large desktop monitor |

Responsive checks cover horizontal overflow, content visibility, motion completion, navigation mode, image composition, and touch-target sizing.

## Motion and accessibility

The desktop experience uses scroll-linked chapter sequences. Smaller screens keep the same narrative order with shorter native-scroll reveals. Visitors who enable reduced motion receive the full content without clipping or transform-dependent states.

Navigation, language controls, contact links, and footer actions retain accessible names. Footer contact controls remain at least 52 by 52 CSS pixels across the tested viewports.

## Deployment

The GitHub Actions workflow at `.github/workflows/pages.yml` deploys the contents of `dist/` whenever a commit reaches `main`. It can also be started manually from the Actions tab.

GitHub Pages must use **GitHub Actions** as its deployment source. The workflow does not run a build command because the files in `dist/` are already production-ready.

## Project use

The repository contains ForestPro brand assets and field photography. No open-source license is currently provided for the source or supplied assets.

ForestPro is part of [Arara Semesta Group](https://ararasemestagroup.id).

Contact: [contact@forestpro.id](mailto:contact@forestpro.id) · [Instagram](https://www.instagram.com/forestpro.id/) · [LinkedIn](https://www.linkedin.com/company/forestpro/)

Copyright © 2024 ForestPro.
