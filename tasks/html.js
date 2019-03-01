var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

// gulp.task('html', function () {
//   return gulp.src(['app/index.html'])
//     .pipe(gulp.dest('dist/'))
//     .pipe(browserSync.reload({
//       stream: true
//     }));
// });


function htmlfiles() {
  return gulp
    .src(['app/index.html']) // get javascript files from 2 locations
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

// export tasks
exports.html = htmlfiles;