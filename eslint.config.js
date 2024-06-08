import pkg from '@eslint/js'; // Standard ESLint configs
import reactThreePlugin from '@react-three/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

const { configs } = pkg;

export default [
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        es2020: true,
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@react-three': reactThreePlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      ...configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactThreePlugin.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
    },
    settings: {
      react: {
        version: '18.3',
      },
    },
  },
];
