import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ignores: ['node_modules', 'dist', 'public'],
    rules: {
      'no-unused-vars': 1,
    },
  },
  eslintConfigPrettier,
]
