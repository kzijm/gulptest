var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
// var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

function htmlfiles() {
  return gulp
    .src(['app/index.html']) // get javascript files from 2 locations
    .pipe(gulp.dest('dist/'));
    // .pipe(browserSync.reload({
    //   stream: true
    // }));
}

function jsfiles() {
  return gulp
    .src(['app/_base/js/**/*.js', 'app/_site/js/**/*.js'], {
      base: 'app'
    }) // get javascript files from 2 locations
    .pipe(sourcemaps.init()) // Process the original sources
    .pipe(concat('build.js'))
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('dist/js'));
    // .pipe(browserSync.reload({
    //   stream: true
    // }));
}

function sassfiles() {
  var plugins = [
    precss(),
    autoprefixer({browsers: ['last 1 version']}),
  ];
  return gulp
    .src(['app/_base/scss/**/*.scss', 'app/_site/scss/**/*.scss'], {base: 'app'})
    .pipe(sourcemaps.init()) // Process the original sources
    .pipe(sass()) // Converts all Sass files to CSS with gulp-sass
    .pipe(postcss(plugins))
    .pipe(concat('build.css'))
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('dist/css'));
    // .pipe(browserSync.reload({
    //   stream: true
    // }));
}

function viewfiles() {
  return gulp.src(['app/_base/views/*.html', 'app/_site/views/*.html']) // get html files from 3 locations
    .pipe(gulp.dest('dist/views/'));
    // .pipe(browserSync.reload({
    //   stream: true
    // }))
}

exports.htmlfiles = htmlfiles;
exports.jsfiles = jsfiles;
exports.sassfiles = sassfiles;
exports.viewfiles = viewfiles;
