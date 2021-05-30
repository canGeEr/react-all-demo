const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

const resolve = (...args) => path.resolve(__dirname, ...args);

module.exports = override(
  addWebpackAlias({
    '@': resolve('./src'),
  }),
);
