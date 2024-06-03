/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif'],
      },
      scrollSnapType: {
        'inline-mandatory': 'inline mandatory',
      },
      colors: {
        "primary": "hsl(var(--primary) / <alpha-value>)",
        "on-primary": "hsl(var(--on-primary) / <alpha-value>)",
        "primary-light": "hsl(var(--primary-light) / <alpha-value>)",
        "Very-dark-blue": "hsl(var(--Very-dark-blue) / <alpha-value>)",
        "background": "hsl(var(--background) / <alpha-value>)",
        "Dark-grayish-blue": "hsl(var(--Dark-grayish-blue) / <alpha-value>)",
        "Grayish-blue": "hsl(var(--Grayish-blue) / <alpha-value>)",
        "White": "hsl(var(--White) / <alpha-value>)",
        "modal-background": "hsl(var(--modal-background) / <alpha-value>)",
      },
      width: {
        'custom-calc': 'calc(100% - 32px)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.snap-inline-mandatory': {
          scrollSnapType: 'inline mandatory',
        },
      }, ['responsive']);
    },
  ],
}
