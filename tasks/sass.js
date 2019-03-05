// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');
// var concat = require('gulp-concat');



// function sassfiles() {
//   return gulp.src(['../app/_base/scss/**/*.scss', '../app/_site/scss/**/*.scss'], {
//       base: 'app'
//     })
//     .pipe(sourcemaps.init()) // Process the original sources
//     .pipe(sass()) // Converts all Sass files to CSS with gulp-sass
//     .pipe(concat('build.css'))
//     .pipe(sourcemaps.write()) // Add the map to modified source.
//     .pipe(gulp.dest('dist/css'))
//     .pipe(browserSync.reload({
//       stream: true
//     }));
// }

// // export tasks
// exports.sassfiles = sassfiles;


// gulp.task('sass', function () {
//   return gulp
//     .src(['../app/_base/scss/**/*.scss', '../app/_site/scss/**/*.scss'], { base: 'app' })
//     .pipe(sourcemaps.init()) // Process the original sources
//     .pipe(sass()) // Converts all Sass files to CSS with gulp-sass
//     .pipe(concat('build.css'))
//     .pipe(sourcemaps.write()) // Add the map to modified source.
//     .pipe(gulp.dest('dist/css'))
//     .pipe(browserSync.reload({
//       stream: true
//     }));
// }