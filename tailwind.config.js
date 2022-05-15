module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Alata: ['Alata', 'sans-serif'],
        JosefinSans: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        whiteClr: 'hsl(0, 0%, 100%)',
        blackClr: 'hsl(0, 0%, 0%)',
        darkGray: 'hsl(0, 0%, 55%)',
        veryDarkGray: 'hsl(0, 0%, 41%)',
      },
      backgroundImage: {
        'header-bg': "url('/src/images/mobile/image-hero.jpg')",
        'header-desktop': "url('/src/images/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
