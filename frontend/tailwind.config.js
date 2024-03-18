/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/sk/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--bg-sandle)",
      },
    },
  },
  plugins: [],
}