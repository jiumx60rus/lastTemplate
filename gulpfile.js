var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var stylus = require('gulp-stylus');

gulp.task('script', function() {
    gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./site/'));
});

gulp.task('style', function() {
  gulp.src('./src/css/main.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('./site'));
 
});

// connect
gulp.task('connect', function() {
    connect.server({
        port: 8888,
        root: 'site',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('./site/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./site/**'], ['html']);
});
// end connect

gulp.task('default', ['connect', 'watch'], function() {
    gulp.run('script');
    gulp.run('style');

    gulp.watch("./src/js/*", function(event) {
        gulp.run('script');
    });

    gulp.watch("./src/css/*", function(event) {
        gulp.run('style');
    });
});
