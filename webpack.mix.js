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

mix.styles([
    'public/css/bootstrap.css',
    'public/css/propeller.css',
    'public/admin_assets/vendor/font-awesome/css/all.min.css',
    'public/admin_assetscss/fontastic.css',
    'public/admin_assets/css/style.default.css',
], 'public/css/all.css');

mix.js([
    'public/js/jquery-3.4.1.min.js',
    'public/js/popper.min.js',
    'public/js/bootstrap.js',
    'public/js/propeller.js',
    //'public/admin_assets/vendor/chart.js/Chart.min.js',
    //'public/js/charts-home.js',
    'public/admin_assets/js/front.js',
], 'public/js/all.js');




/*
mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

*/
