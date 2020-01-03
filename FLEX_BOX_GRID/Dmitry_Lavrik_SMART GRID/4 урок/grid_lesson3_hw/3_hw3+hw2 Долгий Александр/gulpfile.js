const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');

/* gulp-group-css-media-queries */

const config = {
    src: './src',
    css: {
        src: '/precss/**/*.css',
        dest: '/css'
    },
      html: {
        src: '/index.html'
    }
};

gulp.task('build', function(){
    gulp.src(config.src + config.css.src)
        .pipe(sourcemaps.init())
        // .pipe(autoprefixer({
        //     browsers: ['> 5%'],
        //     cascade: false
        // }))
        .pipe(cleanCSS())
        .pipe(gcmq())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(config.src + config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('buildh', function(){
    gulp.src(config.src + config.html.src)
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function(){
    gulp.watch(config.src + config.css.src, ['build']);
    gulp.watch(config.src + config.html.src, ['buildh']);
});
/*второй вариант, не делать таск buildh, 
а добавить в функцию  
gulp.watch(config.src + config.html.src, browserSync.reload);
заменить 46-ю строку*/
gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: config.src
        }
    });
});