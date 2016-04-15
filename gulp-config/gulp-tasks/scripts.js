/* jshint node: true */

module.exports = function(gulp, options, plugins) {
    var browserify = require('browserify');
	var source = require('vinyl-source-stream');
var watchify = require('watchify');
var reactify = require('reactify');
	var livereload = require('gulp-livereload');

	gulp.task('scripts:clean', function() {
		return gulp.src('./build/**/*.js')
			.pipe(plugins.clean());
	});

	gulp.task('scripts:build', ['scripts:clean'], function() {
			return browserify({
				entries: ['./js/app.js'],
				transform: [reactify],
				debug: true,
				fullPaths: true
			  })
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('./build'))
			.pipe(livereload());
	});

};
