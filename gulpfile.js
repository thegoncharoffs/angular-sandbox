const gulp = require('gulp'); // npm install gulp -g
const svgstore = require('gulp-svgstore'); // npm install gulp-svgstore --save-dev
const svgmin = require('gulp-svgmin'); // npm install gulp-svgmin --save-dev
const inject = require('gulp-inject'); // npm install gulp-inject --save-dev
const path = require('path'); // installed with npm install gulp -g

gulp.task('svgstore', function () {
    const svgs = gulp
        .src('./src/assets/**/*.svg')
        .pipe(svgmin(function (file) {
            const prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [
                    {
                        removeTitle: true
                    },
                    {
                        removeAttrs: {
                            attrs: "(fill|stroke)"
                        }
                    },
                    {
                        removeStyleElement: true
                    },
                    {
                        cleanupIDs: {
                            prefix: prefix,
                            minify: true
                        }
                    }
                ]
            }
        }))
        .pipe(svgstore({inlineSvg: true}));

    function fileContents(filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src('./src/index.html')
        .pipe(inject(svgs, {transform: fileContents}))
        .pipe(gulp.dest('./src'));
});
