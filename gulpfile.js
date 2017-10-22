var gulp = require('gulp')

gulp.task('task-name',()=>{
    return gulp.src('source-file')  //get source-file with gulp.src
    .pipe(aGulpPlugin())    //使用gulp插件
    .pipe(dest())
});

gulp.task('sass',()=>{
    return gulp.src()
})

gulp.task('series',() => {
    
})