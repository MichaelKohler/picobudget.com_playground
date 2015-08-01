var gulp = require('gulp');
var jslint = require('gulp-jslint');
var serve = require('gulp-serve');

gulp.task('jslint', function () {
  return gulp.src([
      './api/*.js',
      './models/*.js',
      './controllers/*.js',
      './services/*.js',
      './router.js',
      './app.js'
      ])
      .pipe(jslint({
        node: true,
        vars: true,
        unparam: true,
        nomen: true,
        white: true,
        evil: true,
        errorsOnly: false,
        plusplus: true,
        bitwise: true,
        todo: true,
        stupid: true
      }));
});

gulp.task('serve', serve({
  root: ['./'],
  port: 5000,
}));

gulp.task('default', ['jslint']);
