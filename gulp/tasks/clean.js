import config from '../config';
import del from 'del';
import gulp from 'gulp';

export function cleanTask(cb) {
    del([config.root.dest]).then(paths => cb());
}

gulp.task('clean', cleanTask);
