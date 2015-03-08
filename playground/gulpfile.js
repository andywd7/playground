//include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');

var paths = {
    imgSrc: 'images/**',
    imgDest: 'images'
};


// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('css/*.scss')
		.pipe(sass({
		    lineNumbers: true,
		    sourcemap: true,
		    sourcemapPath: 'css'
		}))
        .pipe(gulp.dest('css'))
		.on('error', function (err) { console.log(err.message); });
});


// Optimise Images
gulp.task('imgs', function () {
    'use strict';
    return gulp.src(paths.imgSrc, { base: 'images' })
      .pipe(imagemin({
          progressive: true,
          interlaced: true,
          svgoPlugins: [{ removeViewBox: false }]
      }))
    .pipe(gulp.dest(paths.imgDest));
});


// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
});



// Default Task
gulp.task('default', ['sass', 'imgs', 'watch']);

// Optimise
gulp.task('optimise', ['imgs']);
