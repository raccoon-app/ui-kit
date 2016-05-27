const layout = require('../layout');
const preloaders = require('./preloaders');
const loaders = require('./loaders');
const autoprefixer = require('autoprefixer');
const eslint = require('../.eslintrc');
const environment = process.env.NODE_ENV;

function getConfigForEnv(env) {
    return (env === 'production') ? require('./config.production') : require('./config.development');
}

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

}, getConfigForEnv(environment));
