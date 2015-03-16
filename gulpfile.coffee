gulp = require('gulp')
babel = require('gulp-babel')

gulp.task 'build:babel', ->
  gulp.src('src/**/*.js')
  .pipe babel()
  .pipe gulp.dest('lib')
