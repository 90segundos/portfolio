'use strict';

/* ---------------------[ packages ]----------------------- */

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    //uglify = require('gulp-uglify'),
    notify = require("gulp-notify");

/* ---------------------[ directories ]----------------------- */

var directories = {
  'pug_src':    ['src/pug/**/*.pug'],
  'pug_build':  'build',
  'sass_src':   ['src/scss/**/*.scss'],
  'sass_build': 'build/assets/css',
  'js_src':     ['src/js/**/*.js'],
  'js_build':   'build/assets/js',
  'img':        'build/assets/img'
}

/* ---------------------[ tasks ]----------------------- */

// pug
gulp.task('compile_pug', function buildHTML() {
  return gulp.src(directories.pug_src)
  .pipe(pug({
    'pretty':true
  }))
  .pipe(gulp.dest(directories.pug_build))
  .pipe(notify("HTML generated"));
});

// sass
gulp.task('compile_sass', function () {
  return gulp.src(directories.sass_src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest(directories.sass_build))
    .pipe(notify("CSS generated"));
});

// img_minify
gulp.task('img_minify', function () {
  return gulp.src(directories.img)
    .pipe(imagemin())
    .pipe(gulp.dest(directories.img))
    .pipe(notify("Images compressed"));
});

// watch
gulp.task('watch', function () {
  gulp.watch(directories.pug_src, ['compile_pug']);
  gulp.watch(directories.sass_src, ['compile_sass']);
  gulp.watch(directories.img, ['img_minify']);
});

// concat_scripts
gulp.task('scripts', function() {
  return gulp.src(directories.js_src)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(directories.js_build));
});

/* ---------------------[ task collections ]----------------------- */

// build
gulp.task('build', ['compile_pug','compile_sass','img_minify','scripts']);

// default
gulp.task('default', ['compile_pug', 'compile_sass', 'scripts', 'watch']);