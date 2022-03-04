var gulp = require('gulp');
const { series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var rename = require('gulp-rename');
var cleanCss = require('gulp-clean-css')

function compassSCSS() {
  return gulp
    .src('./scss/**')
    .pipe(sass().on('error', sass.logError)) // 会将scss文件处理为css文件
    .pipe(
      rename((path) => {
        // 将css后缀名改为css文件
        path.extname = '.css';
      })
    )
    .pipe(gulp.dest('css')) // 将css文件放在dist目录下
    .pipe(cleanCss()) // 将css文件下的css文件进行压缩处理
    .pipe(
      rename((path) => {
        // 将dist/css后缀名改为**.min.css文件
        path.extname = '.min.css';
      })
    )
    .pipe(gulp.dest('css')); // 将**.min.css问价放在dist文件中
}

// function vendor() {
//   return gulp
//     .src([
//       './bower_components/pagepiling.js/jquery.pagepiling.min.js',
//       './bower_components/pagepiling.js/jquery.pagepiling.css',
//     ])
//     .pipe(gulp.dest('./vendor'));
// }

exports.build = series(compassSCSS);
