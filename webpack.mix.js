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

//mix.copyDirectory('resources/images/', 'public/images');
//mix.js('resources/js/app.js', 'public/js');
//mix.sass('resources/sass/app.scss', 'public/css');
//mix.js('resources/js/scripts_web.js', 'public/js');

//Plataforma
//mix.js('resources/js/platform/scripts_platform.js', 'public/js');
mix.js('resources/js/platform/public.js', 'public/js');
//mix.sass('resources/sass/platform/app_platform.scss', 'public/css');
//mix.sass('resources/sass/platform/app_platform_custom.scss', 'public/css');

//Login
//mix.js('resources/js/scripts_login.js', 'public/js');
//mix.sass('resources/sass/styles_login.scss', 'public/css');
//.sourceMaps();
