const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

const config = {
  shape: {
    dest: 'svg',
  },
  svg: {
    xmlDeclaration: false,
  },
};

gulp.task('default', ['copy'], () => gulp.src('src/svg/*.svg')
  .pipe(svgSprite(config))
  .pipe(gulp.dest('dist')));

gulp.task('copy', () => gulp.src('src/index.js')
  .pipe(gulp.dest('dist')));
