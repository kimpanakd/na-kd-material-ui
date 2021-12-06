// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware')

// eslint-disable-next-line prettier/prettier
module.exports = function (app) {
  app.use(
    '/connect/token',
    createProxyMiddleware({
      target: 'https://identity.integration.na-kd.com',
      changeOrigin: true,
    })
  )
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'https://api.integration.na-kd.com',
      changeOrigin: true,
    })
  )
}
