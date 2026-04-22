# SaaS Onboarding UI

A polished frontend project that demonstrates how I design and structure conversion-focused SaaS onboarding experiences.

Built with Next.js, TypeScript, and Tailwind CSS, this project includes a responsive landing page, guided onboarding flow, and dashboard UI designed to feel like a real product rather than a generic template.# SaaS Onboarding UI


## Stack

- Next.js with the App Router
- TypeScript
- Tailwind CSS
- ESLint
- React

## What This Demonstrates

- Product-focused frontend architecture
- Responsive SaaS UI design
- Reusable component structure
- Clear onboarding UX patterns
- Maintainable styling with shared UI primitives

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Check types and linting:

```bash
npm run typecheck
npm run lint
```

Build for production:

```bash
npm run build
```

## Folder Structure

```text
app/
  globals.css       Global styles and design tokens
  layout.tsx        Root document shell and metadata
  page.tsx          Starter landing page
components/
  ui/               Reusable primitives
  *.tsx             Page sections and layout components
hooks/              Shared React hooks
lib/                Utilities and app constants
public/             Static assets
types/              Shared TypeScript types
```

## Design System Notes

- `container-page` sets consistent page width.
- `section-space` handles vertical section rhythm.
- `components/ui/button.tsx` centralizes button link variants.
- `components/ui/card.tsx` provides the base card treatment.
- Global color tokens live in `app/globals.css`.
