module.exports = {
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    parserOptions: { project: ['./tsconfig.json'] },
  }],
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint/eslint-plugin',
    'import',
  ],
  rules: {
    'no-shadow': 'off',
    'linebreak-style': 0,
    'no-use-before-define': 'off',
    'max-len': ['error', { code: 130 }],
    'no-param-reassign': ['error', { props: false }],

    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],

    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-shadow': ['error'],

    'import/no-named-as-default': 0,
    'import/extensions': [
      'error',
      'ignorePackages', {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
