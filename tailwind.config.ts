import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Make container use more screen width on mobile
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',    // 16px padding on smallest screens
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
