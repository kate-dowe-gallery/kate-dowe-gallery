const mix = require('laravel-mix');

// Disables the mix-manifest.json file
Mix.manifest.refresh = _ => void 0;

mix.webpackConfig({
    devServer: {
        contentBase: 'docs/'
    }
});

mix.sass('src/app.scss', 'docs/assets')
    .setPublicPath('docs/assets')
    .copy('src/app.js', 'docs/assets/app.js');
