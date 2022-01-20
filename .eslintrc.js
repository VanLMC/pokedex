module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] },
    ],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'no-alert': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
  },

};
