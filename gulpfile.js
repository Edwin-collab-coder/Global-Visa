var gulp              = require('gulp');
var concat            = require('gulp-concat');
<<<<<<< HEAD
var minifycss         = require('gulp-minify-css')
=======
var minifycss         = require('gulp-minify-css');
>>>>>>> 9add2d4 (Ya gulpifico)
var removeSourcemaps  = require('gulp-remove-sourcemaps');
var rename            = require("gulp-rename");
var sourcemaps        = require('gulp-sourcemaps');
var sass              = require('gulp-sass');
var uglify            = require('gulp-uglify');
<<<<<<< HEAD
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
=======

sass.compiler = require('node-sass');

// Compilar SCSS
gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(removeSourcemaps())
    .pipe(gulp.dest('./css'));
});

// Renombrar CSS
gulp.task('cssrename', function () {
  return gulp.src('./css/style.css')
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./css'));
});

// Minificar CSS
gulp.task('cssmin', function () {
  return gulp.src('./css/style.min.css')
    .pipe(minifycss({ keepSpecialComments: 0 }))
    .pipe(gulp.dest('./css'));
});

// Build CSS
gulp.task('cssbuild', gulp.series(
  'sass',
  'cssrename',
  'cssmin'
));

// JS
var js_scripts = [
  'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
  'js-src/*.js'
];

// Concatenar JS
gulp.task('js', function () {
  return gulp.src(js_scripts)
    .pipe(concat('javascript.js'))
    .pipe(removeSourcemaps())
    .pipe(gulp.dest('./js/'));
});

// Renombrar JS
gulp.task('jsrename', function () {
  return gulp.src('./js/javascript.js')
    .pipe(rename('javascript.min.js'))
    .pipe(gulp.dest('./js/'));
});

// Minificar JS
gulp.task('jsmin', function () {
  return gulp.src('./js/javascript.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});

// Build JS
gulp.task('jsbuild', gulp.series(
  'js',
  'jsrename',
  'jsmin'
));

// Build general
gulp.task('build', gulp.series(
  'cssbuild',
  'jsbuild'
));

// Watch
gulp.task('sass:watch', function () {
  gulp.watch([
    './scss/**/*.scss'
  ], gulp.series('build'));
});

// Default
gulp.task('default', gulp.series('sass:watch'));
>>>>>>> 9add2d4 (Ya gulpifico)
