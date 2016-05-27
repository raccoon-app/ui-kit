const webpack = require('webpack');
const plugins = require('./plugins');
const layout = require('../layout');

module.exports = {
    output: {
        path: layout.dist.releaseDir,
        filename: 'index.js',
    },
    plugins: [].concat(
        new webpack.optimize.UglifyJsPlugin(),
        plugins
    ),
};
