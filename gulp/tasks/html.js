const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const bs = require('browser-sync');
const rename = require('gulp-rename');

module.exports = function html() {
    return gulp.src('src/*.html')
        .pipe(fileInclude())
        .pipe(gulp.dest('build'))
};