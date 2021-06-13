const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = merge(common(), {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        crossOriginLoading: 'anonymous',
        publicPath: 'http://localhost:3040/'
      },
})