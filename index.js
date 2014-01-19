'use strict';

var gutil = require('gulp-util'),
	through2 = require('through2'),
	path = require('path');

module.exports = function () {
	return through2.obj(function (file, encoding, done) {
		gutil.log('gulp-reload saw',
			gutil.colors.magenta(path.basename(file.path)),
			'and reloading now');

		if (!process.env.RELOAD) {
			while (true) {
				require('shelljs').exec('RELOAD=true ' + process.argv.join(' '));
			}
		}

		process.exit(0);
	});
};
