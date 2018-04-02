

var 
  gulp = require("gulp"),
  del = require("del"),
  sync = require("browser-sync").create(),
  plugins = require("gulp-load-plugins")({
    scope: ["devDependencies"]
  });

  gulp.task("html", function() {
    return gulp.src("src/views/*.html")
    .pipe(gulp.dest("dist"));
  });

  gulp.task("styles:app", function() {
    return gulp.src([
      "src/styles/app.less",
      "node_modules/slick-carousel/slick/slick-theme.less",
      "node_modules/slick-carousel/slick/slick.less",
      
      // "slick/slick.less",
      // "slick/slick-theme.less"
    ])
    .pipe(plugins.plumber())
    .pipe(plugins.less())
    .pipe(plugins.rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/css"))
    .pipe(sync.stream());
  });
  gulp.task("js", function () {
      return gulp.src("src/scripts/**/*.js")
        .pipe(plugins.concat("app.min.js"))
        // .pipe(plugins.uglify())
        .pipe(gulp.dest("dist/js"));
    });

  gulp.task("styles:vendor", function() {
    return gulp.src([
      "node_modules/bootstrap/dist/css/bootstrap.min.css"
      
    ])
    .pipe(plugins.concat("vendor.min.css"))
    .pipe(gulp.dest("dist/css"))
  });

  gulp.task("fonts:vendor", function() {
    return gulp.src([
      "node_modules/bootstrap/dist/fonts/*",
      "node_modules/slick-carousel/slick/fonts/*/**"
      // "slick/fonts/*/**"
    ])
    .pipe(gulp.dest("dist/fonts"))
  });

  gulp.task("NMjs", function () {
    return gulp.src([
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/knockout/build/output/knockout-latest.js",
      "node_modules/slideout/dist/slideout.min.js",
      "node_modules/slick-carousel/slick/slick.min.js",
      "node_modules/jquery-validation/dist/jquery.validate.min.js"
      // "slick/slick.min.js"
      // "node_modules/lightbox/dist/bundle-main.js"
      
    ])
    .pipe(plugins.concat("PlugDev.min.js"))
    .pipe(gulp.dest("dist/js"))
    });

  gulp.task("images", function(){
    return gulp.src("./images/*")
      .pipe(gulp.dest("dist/images"));
  });
  // gulp.task("slick", function(){
  //   return gulp.src("./slick/*")
  //     .pipe(gulp.dest("dist/slick"));
  // });

  gulp.task("clean", function(cb) {
    del.sync("dist");
    cb();
  });

  gulp.task("build", ["clean"], function() {
    gulp.start 
    (["html", "styles:app", "images", "js", "styles:vendor", "NMjs", "fonts:vendor"]);
  });

  gulp.task("watch", ["build"], function() {
    sync.init({
      server: "dist"
    });

    
    gulp.watch("src/styles/**/*.less", ["styles:app"]);


    gulp.watch("src/views/**/**.html", ["html"]);
    gulp.watch("dist/**/**.html").on("change", sync.reload);


  });

  gulp.task("default", ["watch"]);



































