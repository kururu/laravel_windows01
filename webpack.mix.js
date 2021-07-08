const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
   'resources/ngapp/dist/ngapp/runtime.bbfb57b8daa2fca80e25.js',
   //'resources/ngapp/dist/ngapp/vendor.js',
   'resources/ngapp/dist/ngapp/styles.31d6cfe0d16ae931b73c.css',
   'resources/ngapp/dist/ngapp/polyfills.9cecb7ad41f1b7dfcce5.js',
   'resources/ngapp/dist/ngapp/main.ae607e80ae94e30839db.js'
 ], 'public/js/app.js');


mix.sass(
   'resources/sass/app.scss', 
   'public/css/app.css'
);

