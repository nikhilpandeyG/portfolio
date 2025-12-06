# Portfolio - Security Architect Website

Enterprise Security Architect portfolio showcasing cloud security expertise, certifications, and professional experience.

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

## Deployment to Azure Static Web Apps

### Prerequisites
- Azure account
- Azure CLI or Azure Static Web Apps CLI
- Node.js 18+ installed

### Option 1: Deploy using Azure Static Web Apps CLI (Recommended)

1. **Install the Static Web Apps CLI:**
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

2. **Build the application:**
   ```bash
   npm run build
   ```

3. **Deploy to Azure:**
   ```bash
   npx swa deploy --env production
   ```

### Option 2: Deploy via GitHub Actions

1. Push your code to GitHub
2. In Azure Portal, create a new Static Web App
3. Connect to your GitHub repository
4. Azure will automatically create a GitHub Actions workflow
5. Configure build settings:
   - **App location:** `/`
   - **API location:** `` (leave empty)
   - **Output location:** `dist`

### Option 3: Deploy via Azure CLI

```bash
# Login to Azure
az login

# Create a resource group (if needed)
az group create --name portfolio-rg --location eastus

# Create Static Web App
az staticwebapp create \
  --name nikhil-portfolio \
  --resource-group portfolio-rg \
  --location eastus \
  --source . \
  --branch main \
  --app-location "/" \
  --output-location "dist"
```

## Configuration Files

- **vite.config.js** - Build configuration
- **tailwind.config.js** - Tailwind CSS styling
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
