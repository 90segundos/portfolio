'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    notify = require("gulp-notify");

var directories = {
  'pug_src':['src/pug/**/*.pug'],
  'pug_build':'build',
  'sass_src':['src/scss/**/*.scss'],
  'sass_build':'build/assets/css'
}


// pug
gulp.task('compile_pug', function buildHTML() {
  return gulp.src(directories.pug_src)
  .pipe(pug({
    'pretty':true
  }))
  .pipe(notify("HTML generated"));
});
// sass
gulp.task('compile_sass', function () {
  return gulp.src(directories.sass_src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(directories.sass_build))
    .pipe(notify("CSS generated");
});
// watch
gulp.task('watch', function () {
  gulp.watch(paths.pug_src, ['compile_pug']);
  gulp.watch(directories.sass_src, ['compile_sass']);
});
// default
gulp.task('default', ['compile_pug', 'compile_sass', 'watch']);
