import config from '../config';
import getTaskSourcePaths from '../getTaskSourcePaths';
import gulp from 'gulp';
import sync from 'browser-sync';
import util from 'gulp-util';

const tasks = config.tasks
const paths = getTaskSourcePaths()

export function serverTask () {
    sync.init(tasks.server.browserSync);

    gulp.watch(
        [`${paths.scripts}/**/*.{${tasks.scripts.extensions}}`],
        ['scripts', sync.reload]
    );

    gulp.watch(
        [`${paths.styles}/**/*.{${tasks.styles.extensions}}`],
        ['styles', sync.reload]
    );

    gulp.watch(
        [`${paths.images}/**/*.{${tasks.images.extensions}}`],
        ['images', sync.reload]
    );
}

gulp.task('server', serverTask);
