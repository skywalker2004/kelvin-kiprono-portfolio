
# Kelvin Kiprono — Developer Portfolio

A premium, single-page portfolio built on the existing Lovable stack (React + Vite + TypeScript + Tailwind + shadcn). Frontend-only, no backend server. The contact form opens the user's email client via a `mailto:` link with prefilled subject and body. A stylized avatar and a templated PDF CV are generated as static assets.

## Scope adjustments from the original brief
- **Stack:** React + Vite + **TypeScript** (project default) instead of plain JS. Tailwind, Framer Motion, React Router, React Hook Form + Zod all included.
- **Backend removed:** No Express, MongoDB, Nodemailer, or rate-limiting. Contact form validates client-side and submits via `mailto:`. No `.env`, no `vercel.json`/`render.yaml`.
- **Assets:** Generated stylized avatar PNG + generated placeholder CV PDF, both shipped in the repo.
- **Routing:** Single `/` page with smooth-scroll anchors + a `*` 404 page (already wired in `App.tsx`).

## Design system
- **Palette (HSL tokens in `index.css`):** deep navy `#0A0F1E` dark bg, electric blue `#3B82F6` accent + glow, clean white `#F8FAFC` light bg, slate text scales for both modes.
- **Fonts:** Inter (headings) + DM Sans (body) via Google Fonts in `index.html`.
- **Tokens:** semantic Tailwind tokens for `background`, `foreground`, `primary`, `accent`, `muted`, `card`, `border`, plus custom `--gradient-hero`, `--gradient-text`, `--shadow-glow`, `--shadow-elevated`.
- **Theme toggle:** custom hook persists to `localStorage`, defaults to `prefers-color-scheme`, toggles `.dark` on `<html>`.
- **Motion:** Framer Motion variants for fade-up, scale-in, stagger; scroll-reveal via `whileInView`. Respect `prefers-reduced-motion`.
- **Glassmorphism:** `backdrop-blur` + translucent `card` background + soft border-glow on hover (dark mode only).

## Sections (single page, in order)

1. **Navbar** — sticky frosted glass; logo "KK"; anchor links (About, Skills, Projects, Testimonials, Experience, Contact); active-section highlight via IntersectionObserver; theme toggle; mobile hamburger sheet.
2. **Hero** — animated gradient headline, typed-rotator subtitle (React Developer → Node.js Engineer → DevOps Enthusiast → Problem Solver), two CTAs, animated CSS blob background (dark) / soft mesh gradient (light), cursor glow on desktop, bouncing scroll arrow.
3. **About** — generated circular avatar with animated conic-gradient ring, bio copy, four animated count-up stat cards, **Download CV** button linking to `/kelvin-kiprono-cv.pdf`.
4. **Skills** — Tabs (Frontend / Backend / Databases / Tools & DevOps) of skill cards with Devicon SVGs from CDN + animated progress bars that fill on scroll into view.
5. **Projects** — 6 cards in a responsive grid. Cover images generated locally (no Unsplash API call needed at runtime — see Technical notes). Hover lift, image zoom, overlay tint. Tech badges, Live Demo + GitHub buttons.
6. **Testimonials** — auto-playing carousel (embla, already in deps via shadcn), pauses on hover, 5-star ratings, initials avatars.
7. **Experience & Education** — vertical alternating timeline (left/right desktop, single-column mobile) with the 6 entries from the brief.
8. **Contact** — split layout: info cards (Email, GitHub, Location, "Open to Work" badge) + React-Hook-Form/Zod-validated form. Submit builds a `mailto:kelvinkiprono659@gmail.com?subject=...&body=...` link and opens it; success state shows animated checkmark + "Message sent! I'll reply within 24 hours."
9. **Footer** — copyright, GitHub + Email + LinkedIn placeholder, back-to-top.
10. **Floating widgets** — Back-to-top button (appears after 300px scroll), initial KK loading screen with ≤1.5s fade-out.

## 404 page
Replace the existing `NotFound.tsx` with an on-brand animated 404 (floating gradient orb, "Go Home" button).

## SEO
- `react-helmet-async` for `<title>`, meta description, canonical, OG/Twitter tags.
- Single `<h1>` in Hero, semantic landmarks (`header`/`main`/`section`/`footer`), descriptive alt text, `loading="lazy"` on imagery.
- `public/robots.txt` (already exists, will be reviewed) + new `public/sitemap.xml`.

## Technical notes (collapsed for non-technical readers)

- **Project images:** Unsplash's API requires a key. To keep this purely frontend with no secrets, I'll generate 6 cover images at build time via Lovable's image tool (one per project, matching the requested moods) and import them as ES modules. They'll be optimized JPGs in `src/assets/projects/`.
- **Avatar + CV:** Generated once into `public/` (`kelvin-avatar.png`, `kelvin-kiprono-cv.pdf`). The CV is a clean templated PDF built from the brief's bio, skills, experience, and education using ReportLab.
- **New deps to add:** `framer-motion`, `react-helmet-async`, `react-hook-form`, `@hookform/resolvers`, `zod`. Embla carousel + shadcn primitives already present.
- **No backend:** removes the need for `express`, `mongoose`, `nodemailer`, `cors`, `express-rate-limit`, `express-validator`, `dotenv`, `axios`, `vercel.json`, `render.yaml`, `.env`.
- **File layout:**
  ```text
  src/
    components/
      layout/        Navbar, Footer, ThemeToggle, BackToTop, LoadingScreen
      sections/      Hero, About, Skills, Projects, Testimonials, Timeline, Contact
      ui/            (existing shadcn)
      shared/        SectionHeading, GlassCard, StatCounter, TypedRotator, Reveal
    hooks/           use-theme, use-active-section, use-count-up
    lib/             projects.ts, skills.ts, timeline.ts, testimonials.ts, seo.ts
    pages/           Index.tsx, NotFound.tsx
    assets/projects/ 6 generated cover images
  public/
    kelvin-avatar.png
    kelvin-kiprono-cv.pdf
    sitemap.xml
  ```

## Out of scope
- Real backend/database/email API.
- Real Unsplash API integration (replaced by locally generated imagery).
- Real CV content (placeholder PDF only — easy to swap later).
- Real LinkedIn URL (placeholder `#`).
