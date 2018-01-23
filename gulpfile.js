var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    sourcemaps   = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),

    onError = function (err) {
  console.log(err);
 };


 var css_path  = 'css/',
     sass_path = 'scss/**/*.scss';


gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch(sass_path, ['sass']);
  gulp.watch("/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(sass_path)
  .pipe(sass())
  .pipe(gulp.dest(css_path))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
