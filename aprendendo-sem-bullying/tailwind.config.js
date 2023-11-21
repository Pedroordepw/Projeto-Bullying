/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#e0f2f1',
        'button': '#80cbc4',
        'color-text': '#004d40'
      },
      borderRadius: {
        'custom': '18px',
      },
      fontFamily: {
        'custom': ['Quicksand', 'serif'],
      },
    },
  },
  plugins: [],
}

