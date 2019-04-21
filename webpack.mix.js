const mix = require('laravel-mix');

// Disables the mix-manifest.json file
Mix.manifest.refresh = _ => void 0;

mix.sass('src/app.scss', 'docs/assets')
    .setPublicPath('docs/assets')
    .js('src/app.js', 'docs/assets');
