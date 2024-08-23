/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@bottlesteam/eslint-config/react-internal.js', 'eslint-config-vitest-globals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
