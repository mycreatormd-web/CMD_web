# CreatorMD Website

A Next.js website for CreatorMD - Medical Content Acceleration System.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

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
