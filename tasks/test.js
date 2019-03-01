var gulp = require('gulp');

// gulp.task('test', function (done) {
//   console.log('test works ook nog');
//   done();
// });

function test(done) {
  console.log('test works ook nog');
  done();
}

// export tasks
exports.test = test;