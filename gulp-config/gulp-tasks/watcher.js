/* jshint node: true */

module.exports = function(gulp, options, plugins) {

	gulp.task('watch', function(){
		plugins.watch('./js/**/*.js', function (event, cb) {
			gulp.start('scripts:build');
		});

		plugins.watch('./scss/**/*.scss', function (event, cb) {
			gulp.start('sass:build');
		});
	});

};
