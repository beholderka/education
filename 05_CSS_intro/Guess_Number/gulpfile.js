const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const copy = require('gulp-copy');
const replace = require('gulp-replace');
const through = require('through2');
const fileInclude = require('gulp-file-include');


const SRC = './src';
const DIST = './dist';

const paths = {
    DIST: {
        root: `${DIST}/`,
        css: `${DIST}/css/`,
        img: `${DIST}/img/`,
        js: `${DIST}/js/`,
        html: `${DIST}/`
    },
    src: {
        scss: `${SRC}/style/**/*.scss`,
        js: `${SRC}/js/*.js`,
        img: `${SRC}/img/**/*`,
        public: `${SRC}/**/*`
    },
    compileWatch: {
        scss: `${SRC}/style/**/*.scss`,
        js: `${SRC}/js/**/*.js`,
        img: `${SRC}/img/**/*`,
        html: `${SRC}/html/*.html`,
    },
};

const verify = () => {
    const write = (file, enc, cb) => {
        console.log('file', file.path);
        cb(null, file);
    };

    const end = (cb) => {
        console.log('done');
        cb();
    };

    return through({objectMode: true}, write, end);
};

const scripts = (paths, outputFilename, outputPath) => {
    return gulp
        .src(paths)
        .pipe(concat(outputFilename))
        .pipe(replace(/((?!require).*)/, '//replace'))
        .pipe(replace(/((module.exports).*)/g, '//replace'))
        .pipe(debug({title: 'jsconcat:'}))
        .pipe(gulp.dest(outputPath));
};

gulp.task('clean', (cb) => {
    del.sync([paths.DIST.root]/*, { dot: true }*/)
    cb()
});

gulp.task('copy', (cb) => {
    gulp
        .src([paths.src.public, `!${SRC}/html/*.*`, `!${SRC}/js/*.*`,`!${SRC}/style/*.*`, `!${SRC}/test/*.*`])
        .pipe(copy(paths.DIST.root, {prefix: 1}))
        .pipe(verify());
    cb()
});


gulp.task('scripts', (cb) => {
    scripts([paths.src.js], 'index.js', paths.DIST.js, false);
    cb();
});

gulp.task('fileInclude', (cb) => {
    gulp.src([SRC + '/html/index.html'])
        .pipe(fileInclude({prefix: '@@', basepath: '@file'}))
        .pipe(gulp.dest(DIST));
    cb();
});

gulp.task('scss', function (cb) {
    gulp.src('./src/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
    cb();
});

gulp.task('build', gulp.series('clean', 'fileInclude', gulp.parallel('copy', 'scripts','scss')));

gulp.task('watch', () => {
    gulp.watch(paths.compileWatch.html, gulp.series('fileInclude'));
    gulp.watch(paths.compileWatch.js, gulp.series('scripts'));
    gulp.watch(paths.compileWatch.scss, gulp.series('scss'));
});

gulp.task('default', gulp.series('build', gulp.parallel('watch')));

