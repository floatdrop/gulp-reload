'use strict';

var gutil = require('gulp-util'),
	Duplex = require('stream').Duplex,
	path = require('path'),
	spawn = require('child_process').spawn;

module.exports = function () {
	var duplex = new Duplex({ objectMode: true, allowHalfOpen: true });

	duplex._write = function _write(file, encoding, done) {
		gutil.log('gulp-reload saw',
			gutil.colors.magenta(path.basename(file.path)),
			'and reloading now');

		duplex.unpipe();

		spawn(process.argv.shift(), process.argv, { stdio: 'inherit' });

		process.exit(0);

		done();
	};

	duplex._read = function _read() { };

	return duplex;
};
