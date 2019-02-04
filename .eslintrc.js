module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      ecmaVersion: 2018,
      jsx: true,
    },
  },
};
