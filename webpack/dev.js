const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./common')

const paths = {
    DIST: path.join(__dirname, '..', 'dist'),
    SRC: path.join(__dirname, '..', 'client')
  }

module.exports = merge(common(), {
    mode: 'development',
    output: {
        path: paths.DIST,
        filename: 'bundle.js',
        crossOriginLoading: 'anonymous',
        publicPath: 'http://localhost:3040/'
      },
})