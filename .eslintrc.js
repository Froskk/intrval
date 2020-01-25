module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
    serviceworker: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {
    console: 'readonly',
    document: 'readonly',
    window: 'readonly',
  },
  plugins: ['prettier', '@typescript-eslint', 'react'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
  },
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
