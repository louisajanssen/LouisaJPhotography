const path = require('path');
const { merge } = require('webpack-merge')
const common = require('./common.js')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

const paths = {
    DIST: path.join(__dirname, '..', 'dist'),
    SRC: path.join(__dirname, '..', 'client')
  }

module.exports = merge(common(), {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin()
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        '__IsLocal__': false,
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
    ],
    output: {
      filename: '[name]_[contenthash].min.js',
      path: paths.DIST,
      publicPath: 'https://louisawebdeployment.azureedge.net/louisajphotography/',
    },
  });