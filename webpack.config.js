const path = require('path');

module.exports = {
  entry: './src/answer.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  watch: true,
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'answer.js',
    path: path.resolve(__dirname, 'dist'),
  },
};