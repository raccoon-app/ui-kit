const webpack = require('webpack');
const plugins = require('./plugins');
const layout = require('../layout');
const devServer = require('./devServer');

module.exports = {
    devtool: 'eval',
    output: {
        path: layout.dist.buildDir,
        filename: 'index.js',
    },
    plugins: [].concat(
        new webpack.HotModuleReplacementPlugin(),
        plugins
    ),
    devServer,
};
