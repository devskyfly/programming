const gulp = require('gulp'),
{ series } = require('gulp'),
gpug = require('gulp-pug'),
gRename = require('gulp-rename'),
gConcat = require('gulp-concat'),
gClean = require('gulp-clean'),
gTypescript = require('gulp-typescript'),
gSass = require('gulp-sass'), 
tsify = require('tsify'),
source = require('vinyl-source-stream'),
gBrowserify = require('gulp-browserify'),
lbrowserify = require('browserify'),
browserSync = require('browser-sync'),
browserReload = browserSync.reload;
gSass.compiler = require('node-sass');

const tsProject = gTypescript.createProject("tsconfig.json");

path = {
    src: "src",
    public: "public"
};

function clean(cb) {
    return gulp
    .src(path.public+"/*", {read: false, allowEmpty: true})
    .pipe(gClean());
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
   gulp.watch(path.src+"/**/*.sass", function(cb){
        pug(cb);
   });
   cb();
};

function build(cb)
{
    series(html, css, pug, sass, /*browserify,*/ /*typescript,*/ typescriptBrowser)();
    cb();
}

function typescriptNode(cb)
{
    gulp.src(path.src+"/**/script.ts").pipe(tsProject()).pipe(gulp.dest(path.public));
    if (browserSync.active) {
        browserReload();
    }
    cb();
    
}

function typescriptBrowser(cb)
{
    lbrowserify(
        {
            basedir: '.', 
            debug: true, 
            entries: [path.src+'/ts/script.ts'],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
        .bundle()
        .pipe(source("script.js"))
        .pipe(gulp.dest(path.public+"/ts/"));

    if (browserSync.active) {
        browserReload();
    }
    cb();
}

function browserify(cb)
{
    gulp.src(path.src+"/**/script.js")
    .pipe(gBrowserify())
    .pipe(gulp.dest(path.public));
    if (browserSync.active) {
        browserReload();
    }
    cb();
}

function sass(cb)
{
    gulp.src(path.src+"/**/*.sass")
    .pipe(gSass().on('error', gSass.logError))
    .pipe(gulp.dest(path.public));
    if (browserSync.active) {
        browserReload();
    }
   cb();
}

function pug(cb)
{
    gulp.src(path.src+"/**/*.pug")
    .pipe(gpug({}))
    .pipe(gulp.dest(path.public));
    if (browserSync.active) {
        browserReload();
    }
    cb();
}

function html(cb)
{
    gulp.src(path.src+"/**/*.html")
    .pipe(gulp.dest(path.public));
    if (browserSync.active) {
        browserReload();
    }
    cb();
}

function css(cb)
{
    gulp.src(path.src+"/**/*.css")
    .pipe(gulp.dest(path.public));
    if (browserSync.active) {
        browserReload();
    }
    cb();
}

exports.default = series(server, build, clean);

exports.sass = sass;
exports.build = build;
exports.clean = clean;
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

