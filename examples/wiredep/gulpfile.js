var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var options = {
    bowerJson: require('./bower.json'),
    directory: './bower_components/',
    ignorePath: '../..'
};

gulp.task('default', function () {
    
    return gulp 
        .src('./index.html')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./'));
});
