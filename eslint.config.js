const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const sonarjs = require('eslint-plugin-sonarjs');

module.exports = [
  {
    plugins: {
      prettier: prettierPlugin,
      sonarjs: sonarjs,
    },
    rules: {
      'prettier/prettier': 'error',
      'sonarjs/no-duplicate-string': 'warn',
      // Add your custom rules here
      complexity: ['warn', { max: 10 }],
      'max-lines': ['warn', 300],
      'max-depth': ['warn', 4],
      'max-params': ['warn', 4],
    },
  },
  prettierConfig,
];
