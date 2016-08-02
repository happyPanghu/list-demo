var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');
 
gulp.task('less', function () {
    gulp.src('less/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('css'));
});

gulp.task('com',function(){
	 gulp.watch('less/*.less', ['less']);
});