# Bhavana K G · Portfolio

Personal portfolio of Bhavana K G, Software Developer II at MultiplexEV.

Built with **React 18 + Vite**, plain CSS and **lucide-react** icons. No UI framework.

## Run

```bash
npm install
npm run dev      # http://localhost:4000
npm run build    # production build in dist/
npm run preview  # serve the build
```

## Structure

```
src/
  data/portfolio.js        all content: profile, roadmap, experience, projects, skills, education
  components/              one component per section (Sidebar, Hero, RouteMap, About, Work, ...)
  hooks/                   useTheme (light/dark), useActiveSection (sidebar highlight)
  styles/global.css        design tokens, layout and responsive rules
  assets/                  profile photo and project screenshots (webp)
public/Bhavana-K-G-Resume.pdf   resume served by the Resume button
```

To update content, edit `src/data/portfolio.js` only. To swap the resume, replace the PDF in `public/` and keep the file name.

## Features

- Sidebar navigation with active-section highlight; slide-out drawer on tablet and mobile
- Animated career roadmap: a vehicle drives stop to stop and reveals each role (respects reduced motion)
- Light and dark mode (follows the OS, toggle remembered)
- Project filters, copy-email, mailto contact form, back-to-top
- Responsive from 360px phones to large desktops
