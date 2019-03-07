var gulp = require('gulp');
// var plugins		= require('gulp-load-plugins')();
// var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

// var requireDir = require('require-dir');
// var dir = requireDir('./tasks');

// var HubRegistry = require('gulp-hub');
// /* load some files into the registry */
// var hub = new HubRegistry(['tasks/*.js']);
// /* tell gulp to use the tasks just loaded */
// gulp.registry(hub);

var tasks = require('./tasks/all');

console.log('htmlfiles ', tasks.htmlfiles);
console.log('sassfiles ',  tasks.sassfiles);
console.log('jsfiles ', tasks.jsfiles);
console.log('viewfiles ', tasks.viewfiles);


gulp.task('test', gulp.series(tasks.sassfiles, tasks.jsfiles, tasks.htmlfiles, tasks.viewfiles), function (done) {
    console.log('test works');
    done();
})

// Logging
gulp.on('task_stop', function(e) {
    gutil.log('Finished', '\'' + e.task + '\'');
});

function reload(done) {
    browserSync.reload();
    done();
}

function stream(done) {
    browserSync.stream();
    done();
}

function serve(done) {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        },
    });
    done();
}

function watch() {
    // Reloads the browser whenever SCSS HTML or JS files change
    gulp.watch('app/*/scss/**/*.scss', gulp.series(tasks.sassfiles, reload));
    gulp.watch('app/*.html', gulp.series(tasks.htmlfiles, reload));
    gulp.watch('app/*/views/*.html', gulp.series(tasks.viewfiles, reload));
    gulp.watch('app/*/js/**/*.js', gulp.series(tasks.jsfiles, reload));
}

gulp.task('compile', gulp.series(tasks.sassfiles, tasks.jsfiles, tasks.htmlfiles, tasks.viewfiles));

// gulp.task('testing', gulp.series('test'));
gulp.task('default', gulp.series('compile', serve, watch));