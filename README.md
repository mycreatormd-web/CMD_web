# CreatorMD Website

A Next.js website for CreatorMD - Medical Content Acceleration System.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([Download here](https://nodejs.org/))
- npm 9+ (comes with Node.js)

### Installation & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 📦 Deployment

### Deploy to Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

**Simple Steps:**
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically detects settings
4. Done! ✨

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.**

### Build for Production

```bash
# Build the project
npm run build

# Test production build locally
npm start
```

## Project Structure

```
CMD_Website/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx    # Animated hero section with particles
│   │   ├── ValueProps.tsx      # Value propositions section
│   │   └── SocialProof.tsx     # Testimonials section
│   ├── globals.css             # Global styles with Tailwind
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.js
```

## Features

- ✨ Animated hero section with particle effects
- 🎨 Gradient backgrounds and smooth animations using Framer Motion
- 📱 Fully responsive design with Tailwind CSS
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 🎭 Interactive UI elements with Lucide icons

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## Development

To build for production:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

## Customization

You can customize the hero section by editing `app/components/HeroSection.tsx`. The component includes:
- Rotating hero words
- Animated particles
- Canvas background effects
- Video modal
- Stats section
- CTA buttons

## License

All rights reserved - CreatorMD™
