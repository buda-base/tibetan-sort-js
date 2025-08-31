// eslint.config.cjs
const babelParser = require('@babel/eslint-parser');

module.exports = [
  {
    ignores: ['dist/**'], // don't lint build artifacts
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: { presets: ['@babel/preset-env'] },
        sourceType: 'module',
      },
    },
    // add rules here if you want
    rules: {},
  },
];