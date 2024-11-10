/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@bottlesteam/eslint-config/next.js', 'eslint-config-vitest-globals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  globals: {
    Kakao: 'readonly',
  },
};
