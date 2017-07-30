    var gulp = require('gulp');
    var autoprefixer = require('gulp-autoprefixer');
    //var livereload = require('gulp-livereload');
    var sass = require('gulp-sass');
    var sourcemaps = require('gulp-sourcemaps');
    //var run = require('gulp-run');
     
    gulp.task('sass', function () {
        gulp.src('sass/**/*.scss')
        .pipe(sourcemaps.init({identityMap: true}))
        .pipe(sass()).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('../maps/'))
        .pipe(gulp.dest('css/'));
        //.pipe(livereload());
    });
     
    gulp.task('watch',function(){    
        //livereload.listen();
        gulp.watch('sass/**', function () {
            setTimeout(function () {
                gulp.start('sass');
            }, 2000);
        });
       // gulp.watch('css/*.css'); //.on('change', livereload.changed);
    });

    gulp.task('default', ['sass','watch']);
