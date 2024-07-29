/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@bottlesteam/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  rules: {
    ...vitest.configs.recommended.rules,
  },
};
