var gulp = require('gulp'),
  inject = require('gulp-inject'),
  gulpSequence = require('gulp-sequence'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  wiredep = require('wiredep').stream

gulp.task('inject', function () {
  var target = gulp.src('./index.html');
  var sources = gulp.src('./dist/client_scripts.js');

  return
    target
      .pipe(inject(sources))
      .pipe(gulp.dest('./'));
});

gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./'));
});

gulp.task('client_js', function() {
  return gulp.src('./app/**/*.js')
      // .pipe(uglify())
      .pipe(concat('client_scripts.js'))
      .pipe(gulp.dest('./dist'));
})

gulp.task('default', gulpSequence('client_js', 'bower', 'inject'));
