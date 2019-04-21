var webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'production',
    devServer: {
        contentBase: 'docs/'
    }
};
