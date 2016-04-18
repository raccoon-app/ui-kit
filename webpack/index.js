'use strict';

const
    layout = require('../layout'),
    loaders = require('./loaders'),
    autoprefixer = require('autoprefixer');


module.exports = Object.assign({
    target: 'web',
    entry: layout.src.front.jsEntry,
    module: {
        preloaders: [{
            test: /\.scss$/,
            loaders: 'import-glob-loader'
        }],
        loaders
    },
    postcss: () => ([
        autoprefixer({ browsers: ['last 2 versions'] })
    ])

}, getConfigForEnv());

function getConfigForEnv(environment) {
    //if (environment.NODE_ENV === 'production') {
    //    return require('./config.production');
    //}
    //return require('./config.production');
    return require('./config.development');
}
