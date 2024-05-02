module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  plugins: [],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-v-html': 0,
    'import/no-named-as-default': 0
  }
}
