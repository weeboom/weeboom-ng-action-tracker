const path = require('path');

module.exports = env => ({
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
    modules: [
      'node_modules',
      'src',
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: 'ts-loader',
      }
    ]
  },
});
