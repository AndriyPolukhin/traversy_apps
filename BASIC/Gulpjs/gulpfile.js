
/*
== GULP TOP LEVEL FUNCTOIN ==

    gulp.task - Define task
    gulp.src - Point to files to use
    gulp.dest - Point to the output folder
    gulp.watch - Watch files and folders for changes

*/

// 1. Require gulp or extensions used with gulp tasks
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");   
const uglify = require("gulp-uglify");
const pump = require("pump");
const sass = require('gulp-sass');
const slim = require("gulp-slim");
const concat = require("gulp-concat");

// 2. Logs Message to check
gulp.task('message', function() {
    return console.log("Gulp is running");
});

// 3. Create a task to COPY html files!
gulp.task('copyHtml', function() {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// 4. Create a task to OPTIMIZE image files!
gulp.task('imageMin', function() {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// 5. Create a task to Minify the JS files!
gulp.task('minify', function(cb) {
    pump([
        gulp.src('src/js/*.js'),
        concat('main.js'), // 5.1 Added here!!!!
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
    );
});

// 5.1 Create a task that Collects js files into One!
gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});



// 6. Create a task for SASS to CSS files!
gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});


// 7. Create a task for SLIM to HTML files!
gulp.task('slim', function () {
    gulp.src("src/slim/*.slim")
        .pipe(slim({
            pretty: true
        }))
        .pipe(gulp.dest("dist/html"));
});



// 8. Default task of the Gulp!
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'minify', 'sass', 'slim']);


// 9. Create a Watch funciton so it would update everything 
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['minify']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/slim/*.slim', ['slim']);
});