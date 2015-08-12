var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minCSS = require('gulp-minify-css');

gulp.task('default', function() {
	console.log('gulp!')
});

gulp.task('build-js', function(){
	gulp.src('./js/**/*.js')
		.pipe(concat('allScripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'))
});

gulp.task('build-css', function(){
	gulp.src('./css/**/*.css')
		.pipe(concat('allStyles.css'))
		.pipe(minCSS())
		.pipe(gulp.dest('./css'))
});

gulp.task('build', ['build-js', 'build-css'], function(){
	console.log('BUILT!')
});

gulp.task('watch', function() {
  gulp.watch('./js/**/*.js', ['build-js']);
  gulp.watch('./css/**/*.css', ['build-css']);
});



