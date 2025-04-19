module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'import'],
  rules: {
    // JS/TS
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    eqeqeq: 'error',

    // TypeScript
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',

    // react
    'react/jsx-no-undef': 'error',
    'react/jsx-key': 'error',
    'react/react-in-jsx-scope': 'off', // Для React 17+ не требуется импорт React

    // imports
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
