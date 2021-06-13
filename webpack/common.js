const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = env => {
  return {
    entry: {
      louisajphotography: path.resolve(__dirname, 'client', 'index.tsx')
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: './client/index.html'
      }),
      new ESLintPlugin({
        extensions: ['ts','tsx'],
        exclude: ['node_modules', 'test'],
      }),
      new ScriptExtHtmlWebpackPlugin({
        custom: [
          {
            test: /\.js$/,
            attribute: 'crossorigin',
            value: 'anonymous'
          }
        ]
      }),
    ],
    // output: {
    //   path: path.resolve(__dirname, 'public'),
    //   filename: 'bundle.js'
    // },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            }
          ]
        },
        {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.(png|jpg|jpeg|gif)$/i,
              type: "asset/resource",
            },
          ],
        }
      ]
    },
    mode: 'development',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
  }
};