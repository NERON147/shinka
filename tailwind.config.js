/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/UIComponents/UI/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        primary_2: 'var(--primary_2)',
        primary_light: 'var(--primary_light)',
        dim_dark: 'var(--dim_dark)',
        primary_blue: 'var(--primary_blue)',
        popup: 'rgba(51, 51, 51, 0.5)',
        light_gray: 'var(--light_gray)'
      },
      fontSize: {
        '7xl': '42px'
      }
    },
    screens: {
      xxs: '410px',
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1400px',
      xl: '1400px'
    }
  }
  // plugins: [
  //   require('@tailwindcss/forms')
  // ]
}
