var webpack = require('webpack');
const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'docs'),
        publicPath: 'dist/',
        filename: 'app.min.js'
    },
    devServer: {
        contentBase: 'docs/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
