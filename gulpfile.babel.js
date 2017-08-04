'use strict';

import gulp from 'gulp';
import path from 'path';
import gulpInject from 'gulp-inject';
import angularFileSort from 'gulp-angular-filesort';


const PATHS = {
    ROOT: path.join(__dirname, "src/main/webapp"),
    DIST: path.join(__dirname, "src/main/webapp/dist/")
};


gulp.task('default', [], () => {
    gulp.src(PATHS.ROOT + '/index.jsp')
        .pipe(gulpInject(
            gulp.src([PATHS.DIST + '/*.js', PATHS.DIST + '/*.css'])
                .pipe(angularFileSort())
        ))
        .pipe(gulp.dest(PATHS.ROOT));
});

