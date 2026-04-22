# SaaS Onboarding UI

A clean, production-ready starter for building modern SaaS onboarding flows with Next.js, TypeScript, and Tailwind CSS. The first screen models a focused onboarding product called OnboardKit while keeping the codebase small enough to reshape for real product work.

## Stack

- Next.js with the App Router
- TypeScript
- Tailwind CSS
- ESLint
- React

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
