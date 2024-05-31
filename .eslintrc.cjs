module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'postcss.config.js', 'tailwind.config.js', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'simple-import-sort', 'prettier'],

  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['state'],
    }],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
  }
}
