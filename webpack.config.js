const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

let mode = 'development'
if (process.env.NODE_ENV === "production") {
    mode = 'production'
}

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|json|xml|ico|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                            publicPath: '/'
                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
        },
        liveReload: true,
        hot: false,
        compress: false,
        port: 9000,
    },
    optimization: {
        minimize: false,
    },
}
