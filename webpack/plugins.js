const webpack = require('webpack');
const layout = require('../layout');
const env = require('../env');
const Html = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    new webpack.DefinePlugin({
        'process.env': JSON.stringify({
            NODE_ENV: 'dev',
            API_BASE_URL: env.API_BASE_URL
        }),
    }),
    new Html({
        template: layout.src.front.htmlEntry,
    }),
    new ExtractTextPlugin('app.css', {
        allChunks: true,
    }),
];