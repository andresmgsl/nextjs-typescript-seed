const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const path = require('path')
const withTypescript = require('@zeit/next-typescript')


module.exports = withPlugins([
  [withTM, {
    transpileModules: [],
  }],
  [withTypescript , {
      webpack: config => {
        config.plugins = config.plugins || []
    
        config.resolve.alias = {
          ...config.resolve.alias,
          '@utils': path.resolve(__dirname, 'components/utils'),
          '@config': path.resolve(__dirname, 'config')
        }
        return config
      }
    }]

])