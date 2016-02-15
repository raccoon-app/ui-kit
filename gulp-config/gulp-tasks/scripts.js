/* jshint node: true */

module.exports = function(gulp, options, plugins) {
    var browserify = require('browserify');
	var source = require('vinyl-source-stream');
var watchify = require('watchify');
var reactify = require('reactify');

	gulp.task('scripts:clean', function() {
		var srcOptions = {
			read: false
		};

		return gulp.src('./build/**/*.js', srcOptions)
			.pipe(plugins.clean());
	});

	gulp.task('scripts:compile', function() {
		return browserify({
				entries: ['./js/app.js'],
				transform: [reactify],
				debug: true,
				cache: {}, packageCache: {}, fullPaths: true
			  })
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('./build'));
    })


    gulp.task('scripts:build', ['scripts:clean', 'scripts:compile']);

};
