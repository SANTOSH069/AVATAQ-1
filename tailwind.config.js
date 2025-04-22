// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}", 
    "./components/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@magic-ui/**/*.{js,ts,jsx,tsx}" // or similar path for MagicUI
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(0, 0%, 89%)', // or a color that matches your design
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(0, 0%, 10%)',
        // Add any other design tokens you want
      }
    }
  },
  plugins: [require("tailwindcss-animate")], // if using animations
}
