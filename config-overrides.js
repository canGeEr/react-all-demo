const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
/* eslint import/no-extraneous-dependencies: 'off' */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const resolve = (...args) => path.resolve(__dirname, ...args);

module.exports = override(
  addWebpackAlias({
    '@': resolve('./src'),
  }),
  (config) => {
    if (process.env.NODE_ENV !== 'development') {
      /* eslint no-param-reassign: 'off' */
      config.plugins = [...config.plugins, new BundleAnalyzerPlugin()];
    }
    return config;
  },
);
