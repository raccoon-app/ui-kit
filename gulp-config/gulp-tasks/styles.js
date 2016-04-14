/* jshint node: true */

module.exports = function(gulp, options, plugins) {
	var path = require('path');
	var autoprefixerConfig = require('../autoprefixer');
	var livereload = require('gulp-livereload');

	gulp.task('sass:clean', function() {
		return gulp.src('./build/**/*.css', {read: false})
			.pipe(plugins.clean());
	});

	gulp.task('sass:build', ['sass:clean'], function () {
		return gulp.src('./scss/**/*.scss')
			.pipe(plugins.sass()
			.on('error', plugins.sass.logError))
			.pipe(plugins.autoprefixer(autoprefixerConfig))
			.pipe(gulp.dest('./build'))
			.pipe(livereload());
	});
};
