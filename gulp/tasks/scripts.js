import babelify from 'babelify';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import getScriptEntry from '../getScriptEntry';
import getTaskConfig from '../getTaskConfig';
import gulp from 'gulp';
import is from 'gulp-if';
import path from 'path';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import strip from 'gulp-strip-debug';
import tap from 'gulp-tap';
import uglify from 'gulp-uglify';
import util from 'gulp-util';

const config = getTaskConfig('scripts');
const inProduction = util.env.production;

export function scriptsTask () {
    let entry = getScriptEntry(config.task);

    return gulp.src(entry, { read: false })
        .pipe(tap(file => {
            file.contents = browserify(file.path, config.addons.browserify)
                .transform(babelify, config.addons.babelify)
                .bundle().on('error', e => util.log(e))
        }))
        .pipe(buffer())
        .pipe(is(!inProduction, sourcemaps.init()))
        .pipe(gulp.dest(config.paths.dest))
        .pipe(is(inProduction, rename({ suffix: '.min' })))
        .pipe(is(inProduction, strip()))
        .pipe(is(inProduction, uglify()))
        .pipe(is(!inProduction, sourcemaps.write()))
        .pipe(gulp.dest(config.paths.dest))
}

gulp.task('scripts', scriptsTask)
