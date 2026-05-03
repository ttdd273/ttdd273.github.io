# Changelog

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
