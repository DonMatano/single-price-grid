module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      karla: ['Karla', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-cyan': 'hsl(179, 62%, 43%)',
        'primary-cyan-light': 'hsl(179, 48%, 52%)',
        'primary-bright-yellow': 'hsl(71, 73%, 54%)',
        'neutral-grayish-blue': 'hsl(218, 22%, 67%)',
        'neutral-light-gray': 'hsl(204, 43%, 93%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
