import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  { ignores: ['dist/', '.vite-ssg-temp/', '.lighthouseci/'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      // Форматирование — забота Prettier
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-indent': 'off',
      // v-html используется только для статичной разметки из src/data
      'vue/no-v-html': 'off',
    },
  },
  {
    files: ['scripts/**', '*.config.js'],
    languageOptions: { globals: { ...globals.node } },
  },
]
