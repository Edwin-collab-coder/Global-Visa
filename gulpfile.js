const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Compilar Sass
function styles() {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
}

// Watch
function watchFiles() {
    gulp.watch('src/scss/**/*.scss', styles);
}

exports.styles = styles;
exports.watch = watchFiles;
exports.default = gulp.series(styles, watchFiles);