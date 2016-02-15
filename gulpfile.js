/* jshint node: true */

var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

var plugins = require('gulp-load-plugins')(gulp);

require('./gulp-config/gulp-load-tasks')(gulp, {
    pattern: 'gulp-config/gulp-tasks/**/*.js'
}, plugins);

/**
 * Build all files (styles, sprites, templates, etc)
 */
gulp.task('build', function(done) {
    return runSequence(
		'scripts:compile',
        'sass:compile'
    );
});

/**
 * Default task
 */
gulp.task('default', function() {
    //return runSequence('build', 'watch');
	return runSequence('build');
});
