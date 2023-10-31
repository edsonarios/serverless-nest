import { path } from 'path'
import nodeExternals from 'webpack-node-externals'

module.exports = {
  entry: './src/serverless.ts',
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, '.webpack'),
    filename: 'serverless.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
}
