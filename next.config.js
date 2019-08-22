const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const path = require('path')
const withTypescript = require('@zeit/next-typescript') // remove


module.exports = withPlugins([
  [withTM, {
    transpileModules: ["gsap"], // make a better research
  }],
  [withTypescript , {
      distDir: '.next',
      webpack: config => {
        config.plugins = config.plugins || []
    
        config.resolve.alias = {
          ...config.resolve.alias,
          '@utils': path.resolve(__dirname, 'components/utils'),
          '@config': path.resolve(__dirname, 'config'),
          '@layouts': path.resolve(__dirname, 'components/layouts'),
          '@testdata': path.resolve(__dirname, 'config/test_data')

        }
        return config
      }
    }]

])