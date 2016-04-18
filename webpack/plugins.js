'use strict';

const
    webpack = require('webpack'),
    layout = require('../layout'),
    Html = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    new webpack.DefinePlugin({
        'process.env': JSON.stringify({
            NODE_ENV: 'dev'
        })
    }),
    new Html({
        template: layout.src.front.htmlEntry
    }),
    new ExtractTextPlugin('app.css', {
        allChunks: true
    })
];
