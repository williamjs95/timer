module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    '@rocketseat/eslint-config/node',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'camelcase': 'off',
    'no-useless-constructor': 'off',
    'indent': ['error', 2],
    'no-tabs': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off', 
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
