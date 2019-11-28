const gulp = require('gulp'),
{ series } = require('gulp'),
gpug = require('gulp-pug'),
gRename = require('gulp-rename'),
gConcat = require('gulp-concat'),
gClean = require('gulp-clean'),
gBrowserify = require('gulp-browserify'),
browserSync = require('browser-sync'),
browserReload = browserSync.reload;

path = {
    src: "src",
    public: "public"
};

function clean(cb) {
    gulp.src(path.public+"/**/*").pipe(gClean());
    cb();
}

function server(cb){
   browserSync.init({server: path.public});
   
   gulp.watch(path.src+"/**/*.html",function(cb){
        html(cb);
   });
   gulp.watch(path.src+"/**/*.css", function(cb){
        css(cb);
   });
   gulp.watch(path.src+"/**/*.pug", function(cb){
        pug(cb);
   });

   cb();
};



function build(cb)
{
    series(html, css, pug, browserify)();
    cb();
}

function browserify(cb)
{
    gulp.src(path.src+"/**/script.js").pipe(gBrowserify()).pipe(gulp.dest(path.public));
    if (browserSync.active) {
        browserReload();
    }
    cb();
}

function pug(cb)
{
    gulp.src(path.src+"/**/*.pug").pipe(gpug({})).pipe(gulp.dest(path.public));
    if (browserSync.active) {
        browserReload();
    }
    cb();
}

function html(cb)
{
    gulp.src(path.src+"/**/*.html").pipe(gulp.dest(path.public));
    if (browserSync.active) {
        browserReload();
    }
    cb();
}

function css(cb)
{
    gulp.src(path.src+"/**/*.css").pipe(gulp.dest(path.public));
    if (browserSync.active) {
        browserReload();
    }
    cb();
}

exports.default = series( server, html, build);

exports.html = html;


//gulp.task('default', ['server', 'build', 'clean']);

//gulp.task('server', function(){
//   browserSync.init({server: path.public});
//   g.watch(path.src+"/**/*.html",['html']);
//   g.watch(path.src+"/**/*.css",['css']);
//});

//gulp.task('build', ['clean' ,'html', 'css']);

//gulp.task('clean',function(){
//    g.src(path.public+"/**").pipe(gClean());
//});

//gulp.task('html',function(){
//    g.src(path.src+"/**/*.html").pipe(dist(path.public));
//    browserReload();
//});

//gulp.task('css',function(){
//    g.src(path.src+"/**/*.css").pipe(dist(path.public));
//    browserReload();
//});

