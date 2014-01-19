'use strict';

var gutil = require('gulp-util'),
	through2 = require('through2'),
	path = require('path');

module.exports = function () {
	return through2.obj(function (file, encoding, done) {
		this.push(file);

		if (!(/gulpfile.js/).test(file.path)) { return; }

		gutil.log('gulp-reload saw',
			gutil.colors.magenta(path.basename(file.path)),
			'and reloading now');

		this.unpipe();

		if (!process.env.RELOAD) {
			while (true) {
				require('shelljs').exec('RELOAD=true ' + process.argv.join(' '));
			}
		}

		process.exit(0);

		done();
	});
};
