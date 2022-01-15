module.exports = {
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '768px',
        lg: '768px',
        xl: '768px',
      },
    },
    extend: {
      aspectRatio: {
        19: '1.91',
      },
      colors: {
        barbie: '#DA0060',
        ken: {
          light: '#55e3f2',
          dark: '#439ca6',
        },
        flash: {
          light: '#f2e585',
        },
        dark: '#061019',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              transition: 'all 0.1s ease-in-out',
              textDecorationColor: theme('colors.barbie'),
              textUnderlineOffset: '2px',
              textDecorationStyle: 'decoration-solid',
              color: theme('colors.slate.900'),
              '&:hover': {
                backgroundColor: theme('colors.barbie'),
                color: '#FFF!important',
              },
            },
          },
        },
      }),
    },
  },
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
