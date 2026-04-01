var gulp              = require('gulp');
var concat            = require('gulp-concat');
var minifycss         = require('gulp-minify-css')
var removeSourcemaps  = require('gulp-remove-sourcemaps');
var rename            = require("gulp-rename");
var sourcemaps        = require('gulp-sourcemaps');
var sass              = require('gulp-sass');
var uglify            = require('gulp-uglify');
sass.compiler         = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(removeSourcemaps())
    .pipe(gulp.dest('./css'));
});

gulp.task('cssrename', function () {
  return gulp.src('./css/style.css')
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('cssmin', function () {
  return gulp.src('./css/style.min.css')
    .pipe(minifycss({keepSpecialComments : 0}))
    .pipe(gulp.dest('./css'));
});

gulp.task('cssbuild', gulp.series([
  'sass',
  'cssrename',
  'cssmin',
]));

var js_scripts = [
  'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
  'js-src/*'
];

gulp.task('js', function () {
  return gulp.src(js_scripts)
    .pipe(concat('javascript.js'))
    .pipe(removeSourcemaps())
    .pipe(gulp.dest('./js/'));
});

gulp.task('jsrename', function () {
  return gulp.src('./js/javascript.js')
    .pipe(rename('javascript.min.js'))
    .pipe(gulp.dest('./js/'));
  });

  gulp.task('jsmin', function () {
    return gulp.src('./js/javascript.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});

gulp.task('jsbuild', gulp.series([
  'js',
  'jsrename',
  'jsmin',
]));

gulp.task('build', gulp.series([
  'cssbuild',
  'jsbuild'
]));

gulp.task('sass:watch', function () {
  gulp.watch([
    './scss/*.scss',
    './scss/**/*.scss',
  ], gulp.series(['build']));
});

gulp.task('default', gulp.series(['sass:watch']));
