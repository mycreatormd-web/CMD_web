import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Add xs breakpoint for extra-small screens
    screens: {
      'xs': '375px',      // Extra small devices (iPhone SE, small phones)
      'sm': '640px',      // Small devices
      'md': '768px',      // Medium devices (tablets)
      'lg': '1024px',     // Large devices (laptops)
      'xl': '1280px',     // Extra large devices
      '2xl': '1536px',    // 2X large devices
    },
    // Make container use more screen width on mobile
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',    // 16px padding on smallest screens
        xs: '1rem',         // 16px on xs screens
        sm: '1.5rem',       // 24px on small screens
        md: '2rem',         // 32px on medium
        lg: '2rem',         // 32px on large
        xl: '2rem',         // 32px on xl
        '2xl': '2rem',      // 32px on 2xl
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
