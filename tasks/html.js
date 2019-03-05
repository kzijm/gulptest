// var gulp = require('gulp');
// var sourcemaps = require('gulp-sourcemaps');
// var browserSync = require('browser-sync').create();
// var concat = require('gulp-concat');


// function htmlfiles() {
//   return gulp
//     .src(['app/index.html']) // get javascript files from 2 locations
//     .pipe(gulp.dest('dist/'))
//     .pipe(browserSync.reload({
//       stream: true
//     }));
// }

// // export tasks
// exports.htmlfiles = htmlfiles;


// gulp.task('html', function () {
//   return gulp
//     .src(['app/index.html'])
//     .pipe(gulp.dest('dist/'))
//     .pipe(browserSync.reload({
//       stream: true
//     }));
// });

// htmldingen = function (gulp, plugins) {
//     return function () {
//         console.log('html dingen hier');
//         return gulp
//             .src(['app/index.html']) // get javascript files from 2 locations
//             .pipe(gulp.dest('dist/'))
//             .pipe(browserSync.reload({stream: true}));
//     }
// }
// htmldingen2 = function (gulp, plugins) {
//     return function  () {
//         console.log('html dingen twee hier');
//         return gulp
//             .src(['app/index.html']) // get javascript files from 2 locations
//             .pipe(gulp.dest('dist/'))
//             .pipe(browserSync.reload({stream: true}));
//     }
// }

// module.exports {
//     htmldingen: htmldingen,
//     htmldingen2: htmldingen2
// }

