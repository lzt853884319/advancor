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
          test: /\.ts(x)?$/,
          use: ['babel-loader', 'ts-loader'],
          exclude: /node_modules/
        },
        {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
      ]
    },
    resolve: {
        alias: {
            config: path.resolve(__dirname, './src/config/'),
            views: path.resolve(__dirname, './src/views/')
        },
        extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, './dist')]),
        new HtmlWwebpackPlugin({
            title: 'advancor',
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html')
        }),
        // new webpack.HotModuleReplacementPlugin()
    ]
}
