const gulp = require('gulp');
const avif = require('gulp-avif');
const webp = require('gulp-webp');

module.exports = function images(){
    return gulp.src(['src/img/**/*.{png,jpg,jpeg}', '!src/img/sprite/*.*'])
        .pipe(gulp.src(['src/img/**/*.{png,jpg,jpeg,gif,ico}', '!src/img/sprite/*.*']))
        .pipe(gulp.dest('build/img'))
};