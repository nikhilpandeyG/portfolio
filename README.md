# Nikhil Pandey | Security Architect Portfolio

Personal portfolio for **Nikhil Pandey**, an Enterprise Security Architect focused on cloud security, cyber defense, and DevSecOps.

**Live site:** https://nikhilpandeyG.github.io/portfolio/

## What is included

- Security architecture and cloud expertise
- Professional experience and selected projects
- Certifications and technical capabilities
- Responsive React interface for desktop and mobile

## Tech Stack

- React 18
- Vite (Build Tool)
- Tailwind CSS
- Lucide React (Icons)

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment

Every push to `master` builds and deploys the site through GitHub Actions and GitHub Pages. The workflow is defined in `.github/workflows/deploy-pages.yml`.

To enable it for a new repository:

1. Open **Settings > Pages** on GitHub.
2. Set **Source** to **GitHub Actions**.
3. Push to `master` and open the Pages URL shown in the workflow summary.

## Configuration Files

- **vite.config.js** - Build configuration
- **tailwind.config.js** - Tailwind CSS styling
- **.github/workflows/deploy-pages.yml** - GitHub Pages deployment
- **staticwebapp.config.json** - Azure Static Web Apps routing and security headers
- **package.json** - Dependencies and scripts

## Security Headers

The application includes production-ready security headers:
- Content Security Policy (CSP)
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy

## Features

- ✅ Responsive design (mobile-first)
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth scroll navigation
- ✅ SEO optimized
- ✅ Fast loading with Vite
- ✅ Production-ready security headers

## License

© 2025 Nikhil Pandey. All rights reserved.
