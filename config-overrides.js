// addWebpackAlias 更改别名项
const { override, addWebpackAlias } = require('customize-cra');

// 集成路径函数
const path = require('path');

const resolve = (dir) => path.join(__dirname, '.', dir);

// override 覆写函数
module.exports = override(
  addWebpackAlias({
    '@': resolve('src'),
  }),
);
