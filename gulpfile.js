const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')

function scripts(){
    return gulp.src('src/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('dist/js'))
}

function styles(){
    return gulp.src('src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/css'))
}

function stylesRevisao(){
    return gulp.src('revisao/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('revisao'))
}

function disneyPlus(){
    return gulp.src('disney_plus/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('disney_plus'))
}

function images(){
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
}

/*function testeGulp(callback){
    console.log('Olá mundo')
    callback()
}
*/

exports.default = gulp.parallel(styles, images, stylesRevisao, disneyPlus, scripts)

exports.watch = function(){
    gulp.watch('src/styles/*.scss', {ignoreInitial: false}, gulp.series(styles))

    gulp.watch('src/scripts/*.js', {ignoreInitial: false}, gulp.series(scripts))

    gulp.watch('revisao/*.scss', {ignoreInitial: false}, gulp.series(stylesRevisao))

    gulp.watch('src/images/**/*', {ignoreInitial: false}, gulp.series(images))

    gulp.watch('disney_plus/*.scss', {ignoreInitial: false}, gulp.series(disneyPlus))
}