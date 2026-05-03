# Changelog

## 2026-05-03

### Refactors

- Replaced hamburger nav with always-visible inline nav
  - Removed all hamburger/overlay CSS (~80 lines) and the `nav-open` body class.
  - Removed state and toggle logic from `Header`; component is now a pure render function.
  - Collapsed the `.logo` div + `#nav__title` h2 wrapper into a single `<a class="site-logo">`.

- Removed unused images
  - Deleted `billsplitter.png`, `handtracking.jpg`, `myself.jpg`, `person.jpg`, `pong.jpg`, `school.png`.
  - Only `background.jpg` remains (used in the Resume section CSS).

- Removed unused dependencies
  - Uninstalled `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event` — no tests exist.
  - Uninstalled `gh-pages` — site deploys via Cloudflare Workers, not GitHub Pages.
  - Removed leftover `predeploy`, `deploy` scripts and `homepage` field from `package.json`.
  - Removed `--ff-secondary` CSS variable — defined but never referenced.

- Simplified intro section
  - Removed profile image from `intro.jsx`; section is now a clean text-only hero.
  - Removed two-column grid layout and `.intro__img` styles from `site.css`.

### Bug Fixes

- Fixed Google Fonts loading wrong weights
  - Was loading `wght@300` but CSS uses `400` (regular) and `700` (bold).
  - Updated to `wght@400;700`.

- Fixed intro section excessive whitespace
  - `min-height: calc(100vh - 76px)` forced the intro to fill the viewport even when content was short.
  - Removed `min-height` so section height is determined by content.

- Fixed About Me section alignment
  - Missing `margin: 0 auto` caused the content block to sit flush left on wide screens.

- Fixed resume section max-width inconsistency
  - `.resumes` was `1100px` while intro and portfolio used `1120px`; aligned to `1120px`.

- Updated `.gitignore` to exclude `.playwright-mcp/`

## 2026-05-02 (session 2)

### Refactors

- Consolidated CSS into a single file
  - Removed `App.css`, `index.css`, and the orphaned `style.css`.
  - Merged font-smoothing rules and `.App { min-height: 100vh }` into `site.css`.
  - All styles now live in `src/assets/css/site.css`.

- Removed dead CSS from `site.css`
  - Deleted the original design layer (lines 1–529) that was fully overridden by the redesign layer beneath it.
  - Removed unused selectors: `.section__titleBegin`, `.section__title--introBegin`, `.about-me__img`, `.portfolio__img`, `.portfolio__item:focus`, `.footer__link`, `.portfolio-item-individual`, `.portfolio-item-indivdual p`, and duplicated `.portfolio-item--header`.
  - Removed commented-out CSS blocks (`about-me` grid layout, `.portfolio__name`).

- Converted class components to functional
  - `App`, `Header`, `Home`, and `Footer` were class components; all converted to functions.
  - `Header` now uses `useState` instead of `this.state`.
  - `Home` was a passthrough wrapper with no logic; deleted it and inlined its sections directly into `App`.

### Bug Fixes

- Removed dead `ref` in `App`
  - `ref={(el) => (this.div = el)}` was set on the root div but never read.

- Removed dead `reportWebVitals` boilerplate from `index.js`
  - Commented-out import and call were leftover CRA scaffolding.

## 2026-05-02

### Bug Fixes

- Navbar menu close behavior
  - What was wrong: every hamburger click added another click listener to each nav link.
  - Why it mattered: opening the menu repeatedly caused duplicate listeners to build up.
  - Fix: moved the menu-close behavior into React `onClick` handlers on the nav links.

- Global `box-sizing` selector
  - What was wrong: `*::before *::after` targeted an `::after` inside a `::before`, not both pseudo-elements.
  - Why it mattered: pseudo-elements were not reliably included in `box-sizing: border-box`.
  - Fix: changed the selector to `*, *::before, *::after`.

- Secondary font CSS variable
  - What was wrong: `var(-ff-secondary)` was missing one dash.
  - Why it mattered: CSS ignored the invalid custom property reference.
  - Fix: changed it to `var(--ff-secondary)`.

- Resume heading class mismatch
  - What was wrong: JSX used `section__title--resumes`, while CSS targeted `section__title-resumes`.
  - Why it mattered: the resume heading styles never applied.
  - Fix: updated the CSS selector to match the JSX class name.

- Resume divider margin
  - What was wrong: `0.5 em` had a space between the number and unit.
  - Why it mattered: CSS treated the margin value as invalid.
  - Fix: changed it to `0.5em`.

- Footer icon link labels
  - What was wrong: footer links contained icons hidden from screen readers, but the links had no accessible labels.
  - Why it mattered: assistive technology could announce vague or empty links.
  - Fix: added `aria-label` values for email, GitHub, and LinkedIn links.

- Portfolio metadata
  - What was wrong: default Create React App metadata was still present.
  - Why it mattered: browser and search preview metadata did not describe the portfolio site.
  - Fix: updated the page description, manifest name, short name, and icon reference.
