var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./app/*.html").on('change', browserSync.reload);
});

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {

  var props = {
    entries: ['./app/' + file],
    debug : true,
    transform:  [babelify.configure({
      presets: ["es2015", "react"]
    })]
  };

  // watchify() if watch requested, otherwise run browserify() once
  var bundler = watch ? watchify(browserify(props)) : browserify(props);
  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source('app.js'))
      .pipe(gulp.dest('./app/js'))
      .pipe(browserSync.reload({
          stream: true,
      }));
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}


gulp.task('bundle', function() {
  return buildScript('main.jsx', false);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve'],  function() {
  return buildScript('main.jsx', true);
});
