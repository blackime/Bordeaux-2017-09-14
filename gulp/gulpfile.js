'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');


//creer la tache
gulp.task('sass', function(){
	return gulp.src('src/scss/global.scss')
	.pipe(sass())
	.pipe(gulp.dest('src/css'))

});

gulp.task('concatJs', function() {
  return gulp.src('./src/javascript/*.js')
    .pipe(concat('production.js'))
    .pipe(gulp.dest('./src/js/'));
});

gulp.task('watch',['browser-sync','sass','concatJs'], function () {
    gulp.watch('src/scss/**/*.scss',['sass']);
    gulp.watch('srcjavascript/**/*.js',['concatJs']); 
    gulp.watch('src/*.html', browser-sync.reload);
    gulp.watch('src/js/**/*.js', browser-sync.reload);


});
gulp.task('browser-sync', function(){
	browser-sync({
		server : ".src"
	})
})