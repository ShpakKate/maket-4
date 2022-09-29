const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { template } = require('babel-core')
/*const ENV = process.env.NODE_ENV === "production" ? "production" : "development"*/

let mode = 'development'
if (process.env.NODE_ENV === "production") {
    mode = 'production'
}
console.log(mode + 'mode')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {   test: /\.svg$/, use: 'svg-inline-loader' },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'dist/images',
                },
              },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: './index.html'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        liveReload: true,
        hot: false,
        compress: true,
        port: 9000,
    },

}
