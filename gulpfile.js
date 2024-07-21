// Import necessary Gulp modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Function to compile SCSS/Sass to CSS
function compileSass() {
    return src('src/sass/**/*.{sass,scss}') // Source folder containing the SCSS/Sass files
        .pipe(sass().on('error', sass.logError)) // Compile SCSS/Sass to CSS and log errors if any
        .pipe(dest('assets/css')); // Destination folder for the compiled CSS files
}

// Function to watch SCSS/Sass files for changes
function watchTask() {
    watch('src/sass/**/*.{sass,scss}', compileSass); // Watch for changes in SCSS/Sass files and run compileSass on change
}

// Default Gulp task
// series() runs tasks in sequential order: first compileSass, then watchTask
exports.default = series(compileSass, watchTask);
