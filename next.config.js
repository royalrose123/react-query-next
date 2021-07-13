const withImages = require('next-images')

module.exports = withImages({
  basePath: '/web/marketing',
  sassOptions: {
    additionalData: '@import "./src/styles/_variables.scss";@import "./src/styles/mixins/mixins.scss";',
  },
  webpack(config, options) {
    return config
  },
})
