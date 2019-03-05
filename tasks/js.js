// var gulp = require('gulp');
// var sourcemaps = require('gulp-sourcemaps');
// var concat = require('gulp-concat');
// var browserSync = require('browser-sync').create();


// function jsfiles() {
//   return gulp
//     .src(['../app/_base/js/**/*.js', '../app/_site/js/**/*.js'], {base: 'app'}) // get javascript files from 2 locations
//     .pipe(sourcemaps.init()) // Process the original sources
//     .pipe(plugins.concat('build.js'))
//     .pipe(plugins.sourcemaps.write()) // Add the map to modified source.
//     .pipe(gulp.dest('dist/js'))
//     .pipe(browserSync.reload({
//       stream: true
//     }));
// }

// // export tasks
// exports.jsfiles = jsfiles;



// gulp.task('js', function () {
//   return gulp
//     .src(['../app/_base/js/**/*.js', '../app/_site/js/**/*.js'], { base: 'app' }) // get javascript files from 2 locations
//     .pipe(sourcemaps.init()) // Process the original sources
//     .pipe(concat('build.js'))
//     .pipe(sourcemaps.write()) // Add the map to modified source.
//     .pipe(gulp.dest('dist/js'))
//     .pipe(browserSync.reload({ stream: true }));
// });