# Next-Gen Learning Dashboard

A dark-mode, animated student dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js (App Router)** — Server Components for data fetching
- **Supabase** — Postgres database via `@supabase/ssr`
- **Tailwind CSS v4** — CSS-first theming (`@theme` in `globals.css`, no config file)
- **Framer Motion** — entrance staggering, spring hover states, `layoutId` nav highlight
- **Lucide React** — dynamic icon rendering

## Architecture

```
src/
  app/
    page.tsx          → main dashboard route
    loading.tsx        → route-level skeleton fallback
  components/
    Sidebar.tsx         → desktop nav (client)
    MobileNav.tsx        → bottom nav for small screens (client)
    HeroTile.tsx         → greeting + streak (client, for motion)
    ActivityTile.tsx     → mock activity chart (client)
    CourseSection.tsx    → async Server Component, fetches Supabase data
    CourseGrid.tsx        → staggered entrance wrapper (client)
    CourseTile.tsx         → individual course card (client)
    ProgressBar.tsx         → animated 0→value progress bar (client)
    TiltWrapper.tsx          → shared hover/spring/glow wrapper
    SkeletonCard.tsx          → pulsing loading placeholder
  utils/supabase/
    server.ts            → server-side Supabase client (cookies-based)
    client.ts             → browser Supabase client
  types/course.ts          → TypeScript interface for course rows
```

## Server / Client Split

- **`CourseSection.tsx`** is the only component that talks to Supabase, and it does so as an `async` **Server Component** — the database query runs on the server, so the Supabase URL/key never reach the browser bundle's logic (only the public anon key is exposed via `NEXT_PUBLIC_*`, by design).
- It's wrapped in `<Suspense fallback={<CourseGridSkeleton />}>` in `page.tsx`, so the rest of the dashboard (Hero, Activity, Sidebar) renders immediately while course data streams in.
- Everything that needs interactivity or animation (`Sidebar`, `TiltWrapper`, `ProgressBar`, etc.) is marked `"use client"`, since Framer Motion and `useState` require the browser runtime.
- This split keeps the data-fetching layer thin and secure while keeping the animation-heavy UI layer fully client-interactive.

## Animations

- **Stagger on load**: `CourseGrid.tsx` uses Framer Motion `variants` with `staggerChildren` so cards fade + slide up sequentially.
- **Hover**: `TiltWrapper.tsx` applies `whileHover={{ scale: 1.02 }}` with spring physics (`stiffness: 300, damping: 20`), plus a CSS opacity-transition glow — no layout-affecting properties are touched, only `transform` and `opacity`.
- **Progress bars**: animate from `0%` to the fetched value on mount via `animate={{ width }}`.
- **Sidebar**: active nav item uses a shared `layoutId` so the highlight smoothly morphs between items instead of snapping.

## Challenges

- **Tailwind v4 migration**: the project scaffolded with Tailwind v4, which removes `tailwind.config.ts` in favor of CSS-based `@theme` tokens — had to move all custom colors (`surface`, `accent`, etc.) into `globals.css` instead of a JS config.
- **Dynamic icon resolution**: mapping a database string (`icon_name`) to an actual Lucide component required indexing into the `lucide-react` exports object and falling back to a default icon if the name doesn't match.
- **Avoiding layout shift**: kept all hover/entrance animations restricted to `transform` and `opacity` only, never animating `width`/`height`/`margin` directly (the progress bar width animation is the one intentional exception, scoped to a fixed-height track so it doesn't shift surrounding layout).

## Setup

```bash
npm install
cp .env.example .env.local   # add your Supabase URL + anon key
npm run dev
```

Run the SQL in `supabase/schema.sql` (or your Supabase SQL Editor) to create the `courses` table and seed sample rows before running locally.
