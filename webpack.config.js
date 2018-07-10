const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    filename: 'petMatcherBundle.js',
    path: path.join(__dirname, '/client/public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        exclude: path.join(__dirname, '/node_modules/'),
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'es2015'],
          plugins: ['transform-class-properties', 'babel-plugin-styled-components', {
            "displayName": true
          }],
        },
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ],
  },
};