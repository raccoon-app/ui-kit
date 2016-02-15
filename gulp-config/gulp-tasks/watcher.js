/* jshint node: true */

module.exports = function(gulp, options, plugins) {
	var path = require('path');

	gulp.task('watch', function() {
	  gulp.watch(path.HTML, ['copy']);

	  var watcher  = watchify(browserify({
		entries: [path.ENTRY_POINT],
		transform: [reactify],
		debug: true,
		cache: {}, packageCache: {}, fullPaths: true
	  }));

	  return watcher.on('update', function () {
		watcher.bundle()
		  .pipe(source(path.OUT))
		  .pipe(gulp.dest(path.DEST_SRC))
		  console.log('Updated');
	  })
		.bundle()
		.pipe(source(path.OUT))
		.pipe(gulp.dest(path.DEST_SRC));
	});
};
