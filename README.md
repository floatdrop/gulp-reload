# gulp-reload
[![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url]
> reload plugin for [gulp](https://github.com/wearefractal/gulp)

__Experimental__ plugin, that will restart the current task (I hope so).

## Usage

```javascript
var reload = require('gulp-reload');
var _if = require('gulp-if');

gulp.src(['gulpfile.js', './src/*.ext'])
	.pipe(watch({ passThrough: false }))
	.pipe(_if(/gulpfile.js/, reload()))
	.pipe(gulp.dest('./dist'));
```

## API

### reload()

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-reload
[npm-image]: https://badge.fury.io/js/gulp-reload.png

[depstat-url]: https://david-dm.org/floatdrop/gulp-reload
[depstat-image]: https://david-dm.org/floatdrop/gulp-reload.png
