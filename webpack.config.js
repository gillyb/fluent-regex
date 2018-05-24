const path = require('path');

module.exports = {
  mode: 'development',
  entry: './RegexLiteral.ts',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      include: path.resolve(__dirname),
      exclude: /node_modules/
    },{
      test: /\.js$/,
      use: 'babel-loader',
      include: path.resolve(__dirname),
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'regexer.bundle.js'
  }
};