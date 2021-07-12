const withImages = require('next-images')

module.exports = withImages({
  sassOptions: {
    additionalData: '@import "./src/styles/_variables.scss";@import "./src/styles/mixins/mixins.scss";',
  },
  webpack(config, options) {
    return config
  },
})
