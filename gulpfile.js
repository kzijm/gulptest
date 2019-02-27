var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('sass', function () {
     // get scsss files from 2 locations
     // provide common {base: location} for sourcemaps if you have duplicate names fron different locations
    return gulp.src(['app/_base/scss/**/*.scss', 'app/_site/scss/**/*.scss'],  { base: 'app' })
        .pipe(sourcemaps.init())  // Process the original sources
        .pipe(sass()) // Converts all Sass files to CSS with gulp-sass
        .pipe(concat('build.css'))
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
    }))
});

gulp.task('js', function () {
    return gulp.src(['app/_base/js/**/*.js', 'app/_site/js/**/*.js'], { base: 'app' })  // get javascript files from 2 locations
        .pipe(sourcemaps.init())  // Process the original sources
        .pipe(concat('build.js'))
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
    }))
});

gulp.task('html', function () {
    return gulp.src(['app/index.html'])
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
            stream: true
    }))
}),

gulp.task('views', function () {
    return gulp.src(['app/_base/views/*.html','app/_site/views/*.html'])  // get html files from 3 locations
        .pipe(gulp.dest('dist/views/'))
        .pipe(browserSync.reload({
            stream: true
    }))
}),


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        },
    })
})

gulp.task('watch', gulp.series('browserSync', 'sass', 'js', 'html', 'views', function () {
    // Reloads the browser whenever SCSS HTML or JS files change
    gulp.watch('app/_base/scss/**/*.scss', ['sass']);
    gulp.watch('app/_site/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', ['html']);
    gulp.watch('app/_base/views/*.html', ['views']);
    gulp.watch('app/_site/views/*.html', ['views']);
    gulp.watch('app/_base/js/**/*.js', ['js']);
    gulp.watch('app/_site/js/**/*.js', ['js']);
}));