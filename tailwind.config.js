/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '10rem'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  // ...
  ]
}
