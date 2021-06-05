const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware(
      '/API', { // 带有api是需要转发的请求
        target: 'http://127.0.0.1:3001', // 这里是服务器地址
        changeOrigin: true, // 值为布尔值, 为true时, 本地就会虚拟一个服务器接收你的请求并代你发送该请求,
        pathRewrite: {
          '^/API': '',
        },
      },
    ),
  );
};
