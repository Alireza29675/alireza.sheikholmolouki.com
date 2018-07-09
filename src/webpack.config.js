var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: '../server/public/app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            { test: /\.(woff|png|jpg|gif)$/, loader: 'url-loader?limit=1000000' },
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
       new webpack.optimize.UglifyJsPlugin({
         minimize: true,
         compress: { warnings: false }
       })
    ]
}