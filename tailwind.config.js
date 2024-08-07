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
        primary2: 'var(--primary2)',
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
      sxxs: '350px',
      xxs: '410px',
      xs: '480px',
      ss: '620px',
      sm: '770px',
      md: '1060px',
      lg: '1450px',
      xl: '1600px',
      xxl: '5000px'
    }
  }
  // plugins: [
  //   require('@tailwindcss/forms')
  // ]
}
