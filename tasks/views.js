var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// gulp.task('views', function () {
//     return gulp.src(['../app/_base/views/*.html','../app/_site/views/*.html'])  // get html files from 3 locations
//         .pipe(gulp.dest('dist/views/'))
//         .pipe(browserSync.reload({
//             stream: true
//         }))
// });

function viewfiles() {
  return gulp.src(['../app/_base/views/*.html', '../app/_site/views/*.html']) // get html files from 3 locations
    .pipe(gulp.dest('dist/views/'))
    .pipe(browserSync.reload({
      stream: true
    }))
}

// export tasks
exports.views = viewfiles;