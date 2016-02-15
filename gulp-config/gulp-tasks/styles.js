/* jshint node: true */

module.exports = function(gulp, options, plugins) {
	var path = require('path');
	var autoprefixerConfig = require('../autoprefixer');

	gulp.task('sass:clean', function() {
		var srcOptions = {
			read: false
		};

		return gulp.src('./build/**/*.css', srcOptions)
			.pipe(plugins.clean());
	});


	gulp.task('sass:compile', function() {
		var fileToDest = function(file) {
			file.dirname = file.dirname.replace('scss', 'css');
		};

		var handleError = function(error) {
			console.log(error);

			this.emit('end');
		};

		return gulp.src('./scss/**/!(_*).scss')
			.pipe(plugins.cached('sass'))
			.pipe(plugins.sass())
			.on('error', handleError)
			.pipe(plugins.autoprefixer(autoprefixerConfig))
			.pipe(plugins.rename(fileToDest))
			.pipe(gulp.dest('./build'));
    });

    gulp.task('sass:build', ['sass:clean', 'sass:compile']);

};
