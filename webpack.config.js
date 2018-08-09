var webpack = require('webpack');
const path = require('path');

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
    }
};
