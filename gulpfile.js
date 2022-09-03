'use strict'; //Using a strong mode

const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass')(require('sass'));
const rename       = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');
const htmlmin      = require('gulp-htmlmin');
const imagemin     = require('gulp-imagemin');
const sourcemaps   = require('gulp-sourcemaps');

// Static server
gulp.task('server', function() {
  browserSync.init({
    open: false,
    server: {
      baseDir: './build',
    }
  });
});

//Compress, add min prefix to css file, add autoprefix then clean css, put its in css folder and reload browsersync plugin
gulp.task('styles', function() {
  return gulp.src('./source/sass/**/*.+(scss|sass)')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({
      prefix: '',
      suffix: '.min',
    }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream())
});

//Wath for changes of sass/scss files and html
gulp.task('watch', function() {
  gulp.watch('./source/sass/**/*.+(scss|sass|css)', gulp.parallel('styles'));
  gulp.watch('./source/*.html').on('change', browserSync.reload);
  gulp.watch('./source/*.html').on('change', gulp.parallel('html'));
  gulp.watch('./source/js/**/*.js').on('change', gulp.parallel('scripts'));
});

gulp.task('html', function () {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function () {
  return gulp.src('./source/**/*.js')
    .pipe(gulp.dest('./build/'));
});

gulp.task('fonts', function () {
  return gulp.src('./source/fonts/**/*')
    .pipe(gulp.dest('./build/fonts'));
});

gulp.task('img', function () {
  return gulp.src('./source/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
});


//To run all tasks with only one command "gulp"
gulp.task('default', gulp.parallel('server', 'styles', 'watch', 'html', 'scripts', 'fonts', 'img'));
