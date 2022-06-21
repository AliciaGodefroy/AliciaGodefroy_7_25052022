module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:vuejs-accessibility/recommended',
  ],
  parserOptions: {
    // parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vuejs-accessibility/label-has-for': [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    'import/no-extraneous-dependencies': 'error',
    'no-underscore-dangle':  ['error', { 'allow': ['_id'] }],
  },
};
