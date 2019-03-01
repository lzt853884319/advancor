const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWwebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    devServer: {
        contentBase: './dist',
        port: 8888
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, './dist')]),
        new HtmlWwebpackPlugin({
            title: 'advancor',
            filename: 'index.html'
        }),
        // new webpack.HotModuleReplacementPlugin()
    ]
}
