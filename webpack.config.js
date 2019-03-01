const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, './dist')]),
        new HtmlWwebpackPlugin({
            title: 'advancor',
            filename: 'index.html'
        })
    ]
}
