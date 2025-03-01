const mix = require('laravel-mix');

mix
    .js('resources/js/app.js', 'public/js')
    .js('resources/js/serviceworker.js', 'public')
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ])
    .copyDirectory('resources/images', 'public/images')
    .copyDirectory('vendor/filament/filament/dist', 'public/vendor/filament/assets')
    .version();
