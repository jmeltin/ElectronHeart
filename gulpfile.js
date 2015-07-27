var gulp   = require('gulp');
	run    = require('gulp-run'),
	uglify = require('gulp-uglify'),
	sass   = require('gulp-sass'),
	reload = require('gulp-livereload');


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
gulp.task('default', ['watch'], function() {
	return run('electron ./build').exec();
});

gulp.task('watch', ['produce'], function() {
	reload.listen();
	gulp.watch('./src/view/scss/*.scss', ['sass']);
	gulp.watch('./src/view/js/**/*', ['compress']);
	gulp.watch('./src/view/html/**/*', ['html']);
});

//////////////////////////////////////////////////////////////////////////

gulp.task('build', ['clean'], function() {
	gulp.src('./build/**/*')
		.pipe(gulp.dest('./electron/Electron.app/Contents/Resources/app/'));
});

gulp.task('clean', ['produce'], function() {
	return run('rm -rf ./electron/Electron.app/Contents/Resources/app').exec();
});

//////////////////////////////////////////////////////////////////////////

gulp.task('produce', ['haxe'], function() {
	return gulp.src('./src/*.*')
		.pipe(gulp.dest('./build'));
});

gulp.task('haxe', ['sass', 'compress', 'html'], function() {
	return run('haxe -cp ./src/haxe/ -js ./src/main.js -main Main.hx').exec();
});


gulp.task('sass', function () {
	gulp.src('./src/view/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./build/css'))
		.pipe(reload());
});

gulp.task('compress', function() {
	return gulp.src('./src/view/js/**/*')
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'))
		.pipe(reload());
});

gulp.task('html', function() {
	return gulp.src('./src/view/html/**/*')
		.pipe(gulp.dest('./build'))
		.pipe(reload());
});

//////////////////////////////////////////////////////////////////////////
gulp.task('compile', function() {
	return run('haxe -cp ./src/haxe/ -js ./src/main.js -main Main.hx').exec();
});