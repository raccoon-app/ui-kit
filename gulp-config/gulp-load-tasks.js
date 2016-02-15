/* global require, module */

var path = require('path');
var glob = require('glob');

module.exports = function(gulp, options, plugins) {
    var pattern;
    var cwd;

    options = options || {};

    cwd = options.cwd = options.cwd || process.cwd();
    pattern = options.pattern = options.pattern || 'tasks/**/*.js' ;

    glob.sync(pattern).forEach(function(file) {
        var taskConfig = require(path.join(cwd, file));

        if (typeof taskConfig === 'function') {
            taskConfig(gulp, options, plugins);
        }
    });
};
