const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

gulp.task('clean', function (cb) {
    del(['dist/*']);
    cb();
})

gulp.task('sass', function (cb) {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
    cb();
});

gulp.task('copy:all', function (cb) {
    gulp.src('./src/**/*.{js,html,otf}')
        .pipe(gulp.dest('./dist'))
    cb()

});
gulp.task('watch', function () {
    gulp.watch(['./src/**/*.scss', './src/**/*.html'], gulp.series(['clean', 'sass', 'copy:html']));
});


gulp.task('default', gulp.series(['clean', 'sass', 'copy:all']))