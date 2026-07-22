# Portfolio Repo Map

Read this file first when working in this repository. It is the shortest path to the important control flow and styling conventions, so future changes should not require scanning the whole app.

## What This App Is

A Vite + React portfolio site for a security architect. The app is mostly static content with a shared layout, route-based pages, theme switching, and a global visual style defined in Tailwind plus `src/index.css`.

## Fast Read Order

1. `package.json` for scripts and dependencies.
2. `src/main.jsx` for the app bootstrap.
3. `src/App.jsx` for routing.
4. `src/components/Layout.jsx` for shared shell, theme, navigation, and global event handling.
5. `src/index.css` for global styles and theme overrides.
6. The page in `src/pages/` that matches the change.

## Entry Flow

- `src/main.jsx` mounts `App` into `#root`.
- `src/App.jsx` wraps the app in `BrowserRouter`.
- `src/components/Layout.jsx` provides the shared nav, theme toggle, footer, scroll behavior, and global event suppression.
- Routes render the page components inside the layout.

## Routes

- `/` -> `src/pages/Home.jsx`
- `/projects` -> `src/pages/Projects.jsx`
- `/expertise` -> `src/pages/Expertise.jsx`
- `/experience` -> `src/pages/Experience.jsx`
- `/certifications` -> `src/pages/Certifications.jsx`

## Shared Layout Behavior

`src/components/Layout.jsx` is the controlling UI shell. It:

- tracks scroll state for the sticky nav styling,
- stores the selected theme in `localStorage` under `portfolio-theme`,
- sets `document.documentElement.dataset.theme` to `light` or `dark`,
- closes the mobile menu and scrolls to top on route changes,
- disables right-click, copy, cut, drag start, and some developer keyboard shortcuts.

If a change affects navigation, theme, or global browser behavior, this is the first file to inspect.

## Styling Conventions

- Tailwind utilities are used heavily inside components.
- `src/index.css` defines the reusable glassmorphism classes, gradient text, scrollbar styling, and light-theme overrides.
- The default visual direction is dark, with a `theme-light` override on the root wrapper.
- Keep new UI consistent with the existing purple/pink/blue accent palette unless there is a deliberate redesign.

## Page Roles

- `Home.jsx` is the landing page with hero content, metrics, and quick links.
- `Projects.jsx` is a card grid of project and role highlights.
- `Expertise.jsx` is a categorized skill matrix.
- `Experience.jsx` is a detailed career timeline with achievements and tech tags.
- `Certifications.jsx` shows certifications and education, with remote badge images and fallback handling.

## Assets And Data

- Profile image is expected at `/public/images/profile.jpg`.
- Several certification cards load remote badge images and fall back to generated badges if an image fails.
- The site uses `lucide-react` icons throughout.

## Common Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Editing Guidance

- Prefer the smallest change that fits the existing structure.
- If a task touches routing, theme, or global behavior, check `Layout.jsx` first.
- If a task touches the visual system, check `src/index.css` before rewriting component styles.
- If a task is page-specific, edit only that page and avoid re-reading unrelated pages.
