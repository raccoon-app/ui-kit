/* jshint node: true */

module.exports = function(gulp, options, plugins) {
	var livereload = require('gulp-livereload');

	gulp.task('watch', function(){
		livereload.listen();
		plugins.watch('./js/**/*.js', function (event, cb) {
			gulp.start('scripts:build');
		});

		plugins.watch('./scss/**/*.scss', function (event, cb) {
			gulp.start('sass:build');
		});
	});

};
