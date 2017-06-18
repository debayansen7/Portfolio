// 'use strict';
var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browsersync  = require('browser-sync').create(),
    watch        = require('gulp-watch'),
    ejs          = require('gulp-ejs')
    ;

//For Styles
gulp.task('dev-styles', function(){
    gulp.src('assets/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browsersync.reload({stream:true}));
    console.log("styles finished");
});

//For Watch Task
gulp.task('watch', function(){
    browsersync.init({
        server:{
            baseDir: './'
        }
    });
    gulp.watch('assets/sass/*.scss',['dev-styles']);
    gulp.watch('./*.html').on('change', browsersync.reload);
    console.log("Watch finihed");
});

//For Default Task
gulp.task('default', ['watch']);
