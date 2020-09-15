const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "production",
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lazy-ng-zone.js',
        library: 'lazyNgZone',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: [/.*\.tsx?$/],
                loader: 'awesome-typescript-loader?source-map=true'
            },
        ],
    },
    externals: [
        '@angular/core',
        'rxjs',
        'rxjs/operators',
        'zone.js/dist/zone'
    ],
};