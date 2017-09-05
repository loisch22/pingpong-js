var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var buildProduction = utilities.env.production;

gulp.task('jshint', function() {
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function() {
  return gulp.src('./build/js/app.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});

gulp.task('clean', function() {
  return del(['build', 'tmp']);
});
//telling it to delete build and tmp folders

//goes last since it will use other tasks
gulp.task('build', ['clean'], function() {
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
//array of dependencies at the top, we added 'concat..'. In this case, it tells it to run the concatInterface task to pull all client-side jS into one file before browserifying it
//change browserify to tmp route to use the concatenated js files (both pingpong and signup)

//put at very bottom since it will run seperately from the chain of build tasks

//gulp will look for a file called gulpfile.js in the top level of our proj directory
//top two codes allow pingpong-interface.js to be shown in browser
// var browserify = require('browserify');
// var source = require('vinyl-source-stream');
// var gulp = require('gulp');
//use require to load the gulp pkg into a gulp variable that can be used in our code
//using `require` is standard practice to have a var name be the same as the pkg name

//more dependencies will be added here

//practice writing gulp task
// gulp.task('myTask', function() {
//   console.log('hello gulp');
// });
//task method is defined in the gulp pkg
//string 'myTask' reps the name of the task so we can refer to it later
//the function to run when we tell gulp to run this task

//add task to call browserify function
// gulp.task('jsBrowserify', function() {
//   return browserify({ entries: ['./js/pingpong-interface.js']})
//   .bundle()
//   .pipe(source('app.js'))
//   .pipe(gulp.dest('./build/js'));
// });
