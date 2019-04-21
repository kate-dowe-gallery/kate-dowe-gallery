const mix = require('laravel-mix');

mix.sass('src/app.scss', 'docs/css')
    .js('src/app.js', 'docs/js')
    .sourceMaps();
