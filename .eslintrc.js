module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/no-cycle': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'class-methods-use-this': 'off',
    'eol-last': 0,
    'prettier/prettier': 'off',
    'no-unused-vars': 'warn',
    'prefer-destructuring': 'warn',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
  },
};
