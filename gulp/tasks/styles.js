import getTaskConfig from '../getTaskConfig';
import gulp from 'gulp';
import is from 'gulp-if';
import nano from 'gulp-cssnano';
import newer from 'gulp-newer';
import prefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import util from 'gulp-util';

const config = getTaskConfig('styles');
const inProduction = util.env.production;

export function stylesTask() {
    return gulp.src(config.paths.src)
        .pipe(is(!inProduction, sourcemaps.init()))
        .pipe(newer(config.paths.dest))
        .pipe(sass(config.addons.sass)).on('error', sass.logError)
        .pipe(prefixer(config.addons.autoprefixer))
        .pipe(is(!inProduction, sourcemaps.write()))
        .pipe(is(inProduction, nano(config.addons.nano)))
        .pipe(gulp.dest(config.paths.dest))
}

gulp.task('styles', stylesTask);
