const layout = require('../layout');
const preloaders = require('./preloaders');
const loaders = require('./loaders');
const autoprefixer = require('autoprefixer');
const eslint = require('../.eslintrc');
const environment = require('./config.production');

module.exports = Object.assign({
    target: 'web',
    entry: layout.src.front.jsEntry,
    module: {
        preloaders,
        loaders,
    },
    postcss: () => ([
        autoprefixer({ browsers: ['last 2 versions'] })
    ]),
    eslint,

}, environment);
