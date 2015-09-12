var webpack = require('webpack');

var plugins = [];

var production = false;

if (production) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        path: './assets/js/',
        filename: 'theme.js'
    },
    module: {
        loaders: [
            {test: /\.js$/     , loaders: ['babel-loader'], exclude: /node_modules/},
        ]
    },
    devtool: 'inline-source-map',
    plugins: plugins
};
