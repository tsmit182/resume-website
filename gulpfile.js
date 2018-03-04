'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var log = require('fancy-log');

gulp.task('default', function(){
	log('Gulp Tasks:\n\
		gulp sass        : Compile and minify .scss files.\n\
		gulp js          : Minify .js files.\n\
		gulp sass-watch  : Runs `gulp-sass` on .scss file saves\n\
		gulp js-watch    : Runs `gulp-js` on .js file saves');
});
 
gulp.task('sass', function () {
  return gulp.src('./style/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('sass-watch', function () {
  gulp.watch('./style/*.scss', ['sass']);
});

gulp.task('js', function () {
    gulp.src('./script/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js-watch', function () {
  gulp.watch('./script/*.js', ['js']);
});