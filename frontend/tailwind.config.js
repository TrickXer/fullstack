/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/sk/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--bg-primary)",
        "primary-hover": "var(--bg-primary-hover)",
        "primary-disabled": "var(--bg-primary-disabled)",
        "primary-text": "var(--bg-primary-text)",
      },
    },
  },
  plugins: [],
}