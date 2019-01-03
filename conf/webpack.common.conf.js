const path = require('path')

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.join(__dirname, '..', 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
