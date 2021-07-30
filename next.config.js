const withImages = require('next-images')

module.exports = withImages({
  distDir: 'build',
  basePath: '/web/marketing',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/web/marketing/list/listInfo',
        permanent: false,
        basePath: false,
      },
      {
        source: '/web/marketing',
        destination: '/web/marketing/list/listInfo',
        permanent: false,
        basePath: false,
      },
    ]
  },
  sassOptions: {
    additionalData: '@import "./src/styles/_variables.scss";@import "./src/styles/mixins/mixins.scss";',
  },
  webpack(config, options) {
    return config
  },
})
