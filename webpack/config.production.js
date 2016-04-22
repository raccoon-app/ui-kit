'use strict';

const
    webpack = require('webpack'),
    plugins = require('./plugins'),
    layout = require('../layout');

module.exports = {
    output: {
        path: layout.dist.releaseDir,
        filename: 'index.js'
    },
    plugins: [].concat(
        new webpack.optimize.UglifyJsPlugin(),
        plugins
    )
};
