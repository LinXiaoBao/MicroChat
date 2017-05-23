const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
        }, {
            test: /\.(css|less)$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: 'dist/',
        hot: true,
        inline: true,
        port: 4001,
        host: 'localhost',
        historyApiFallback: true,
        proxy: {
            '/api/**': {
                target: 'http://localhost:3001',
                changeOrigin: true
            }
        },
    },
};
