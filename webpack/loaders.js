const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
    },
    {
        test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]?[hash]',
    },
    {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!csscomb!postcss!sass!import-glob-loader'),
    },
];
