const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
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
  }
};