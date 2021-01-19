const mix = require('laravel-mix');

require('dotenv').config();

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

mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/'),
            '@forms': path.resolve(__dirname, 'resources/js/components/forms'),
        }
    }
});
mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
});

mix.js('resources/js/app.js', 'public/js')
    // .sass('resources/sass/app.scss', 'public/css')
    .extract();

