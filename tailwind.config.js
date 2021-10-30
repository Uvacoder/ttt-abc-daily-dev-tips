module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      dark: '#061019',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      dark: '#061019',
    }),
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.blue.800'),

            // ...
          },
        },
      }),
    },
  },
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ],
};
