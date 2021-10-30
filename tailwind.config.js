module.exports = {
  theme: {
    extend: {
      colors: {
        barbie: {
          light: '#f16cb6',
          dark: '#a73a75',
        },
        ken: {
          light: '#55e3f2',
          dark: '#439ca6',
        },
        flash: {
          light: '#f2e585',
        },
        dark: '#061019',
      },
    },
  },
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  plugins: [require('@tailwindcss/typography')],
};
