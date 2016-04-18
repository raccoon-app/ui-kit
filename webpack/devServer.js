'use strict';

const
    layout = require('../layout');

module.exports = {
    //contentBase: layout.target.buildDir,
    hot: true,
    inline: true,
    progress: true,
    host: 'localhost',
    port: 8080
};
