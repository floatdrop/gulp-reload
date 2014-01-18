'use strict';

var gutil = require('gulp-util'),
	Duplex = require('stream').Duplex,
	path = require('path');

module.exports = function () {
	var duplex = new Duplex({ objectMode: true, allowHalfOpen: true });

	duplex._write = function _write(file, encoding, done) {
		if (!(/gulpfile.js/).test(file.path)) { return; }

		gutil.log('gulp-reload saw',
			gutil.colors.magenta(path.basename(file.path)),
			'and reloading now');

		duplex.unpipe();

		require('shelljs').exec(process.argv.join(' '));

		process.exit(0);

		done();
	};

	duplex._read = function _read() { };

	return duplex;
};
