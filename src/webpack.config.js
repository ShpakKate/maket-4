const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { template } = require('babel-core')
/*const ENV = process.env.NODE_ENV === "production" ? "production" : "development"*/

let mode = 'development'
if (process.env.NODE_ENV === "production") {
    mode = 'production'
}
console.log( mode + 'mode')

module.exports = {
    mode: 'mode',
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
  ],
 
}