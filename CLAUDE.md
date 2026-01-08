# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint checks
```

## Architecture

This is a Next.js App Router project. Key structure:

- `app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts and global metadata
  - `page.tsx` - Home page (server component by default)
  - `globals.css` - Tailwind import + CSS custom properties for theming
- `public/` - Static assets (SVGs, favicon)

## Key Patterns

- **Server Components**: Default in App Router; add `"use client"` directive for client components
- **Styling**: Tailwind utility classes with dark mode support via `dark:` prefix
- **Path Alias**: Use `@/*` to import from project root
- **Theming**: CSS custom properties in globals.css for background/foreground colors with light/dark mode support

## Design

- Always try to use a shadcn/ui component before building your own (`npx shadcn@latest add <component>`)
- Always prefer using Tailwind utility classes for styling over inline styles (colors, spacing, typography, etc.). If a variable is needed, add it to `globals.css`.
-

## Documentation

See [PROJECT_SPECS.md](./.claude/PROJECT_SPECS.md) for project overview, design style, and tech stack.
