'use strict';

const
    webpack = require('webpack'),
    plugins = require('./plugins'),
    layout = require('../layout'),
    devServer = require('./devServer');

module.exports = {
    devtool: 'eval',
    output: {
        path: layout.dist.buildDir,
        filename: 'index.js'
    },
    plugins: [].concat(
        new webpack.HotModuleReplacementPlugin(),
        plugins
    ),
    devServer
};
