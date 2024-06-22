/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'rgb(225, 78, 52)',
        },
      },
    },
  },
  plugins: [],
}
