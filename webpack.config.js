module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    watch: true,
    output: {
        filename: './public/scripts/bundle.js',
        sourceMapFilename: './public/scripts/bundle.js.map'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015' ]
            }
        }, {
            test: /\.sass$/,
            loader: 'style-loader!css-loader?-url!sass-loader'
        }]
    }
};