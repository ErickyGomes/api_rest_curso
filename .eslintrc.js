module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'import/newline-after-import': 'off',
    'no-param-reassign': 'off',
  },
};
