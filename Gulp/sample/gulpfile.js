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
    return gulp.src(path.public+"/*", {read: false, allowEmpty: true})
    .pipe(gClean());
    //cb();
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
        sass(cb);
   });
   
};

function build(cb)
{
    series(html, css, pug, sass, bootstrap, /*browserify,*/ /*typescript,*/ /*typescriptBrowser*/)();
    cb();
}

function bootstrap(cb)
{
    return gulp.src("./node_modules/bootstrap/dist/css/bootstrap.*", {allowEmpty: true})
    .pipe(gulp.dest(path.public));
    //cb();
}

function typescriptNode(cb)
{
    return gulp.src(path.src+"/**/script.ts", {allowEmpty: true}).pipe(tsProject()).pipe(gulp.dest(path.public));
    /*if (browserSync.active) {
        browserReload();
    }
    cb();*/
    
}

function typescriptBrowser(cb)
{
    return lbrowserify(
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

    /*if (browserSync.active) {
        browserReload();
    }*/
    //cb();
}

function browserify(cb)
{

    return gulp.src(path.src+"/**/script.js", {allowEmpty: true})
    .pipe(gBrowserify())
    .pipe(gulp.dest(path.public));
    /*if (browserSync.active) {
        browserReload();
    }
   cb();*/
}

function sass(cb)
{
    return gulp.src(path.src+"/**/*.sass", {allowEmpty: true})
    .pipe(gSass().on('error', gSass.logError))
    .pipe(gulp.dest(path.public));
    /*if (browserSync.active) {
        browserReload();
    }
   cb();*/
}

function pug(cb)
{
    return gulp.src(path.src+"/**/*.pug", {allowEmpty: true})
    .pipe(gpug({}))
    .pipe(gulp.dest(path.public));
    /*if (browserSync.active) {
        browserReload();
    }
    cb();*/
}

function html(cb)
{
    return gulp.src(path.src+"/**/*.html", {allowEmpty: true})
    .pipe(gulp.dest(path.public));
    /*if (browserSync.active) {
        browserReload();
    }
    cb();*/
}

function css(cb)
{
    return gulp.src(path.src+"/**/*.css", {allowEmpty: true})
    .pipe(gulp.dest(path.public));
    /*if (browserSync.active) {
        browserReload();
    }
    cb();*/
}

exports.default = series(clean, build, server);

exports.sass = sass;
exports.build = build;
exports.clean = clean;
exports.html = html;