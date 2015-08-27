/*eslint-env node */
/* eslint-disable no-var, no-process-env */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var exampleDir = path.resolve(__dirname, '..', 'src');
var webpack = require('webpack')

const DEBUG = 'app:*'

module.exports = {
    cwd: path.resolve(__dirname, '..'),
    cache: true,
    debug: true,
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        filename: 'app.js'
    },
    entry: path.join(exampleDir, 'index.js'),
    module: {
        loaders: [
            {
                test: /\.json$/,
                loaders: ['json-loader']
            },
            {
                test: /\.(?:jsx?|es6)$/,
                include: /(?:src)|(?:lib)/,
                exclude: /(?:node_modules|bower_components)/,
                loaders: ['babel-loader'] // 'react-hot-loader'
            },
            {
                test: /\.(?:png|jpg|gif|ico)$/,
                loader: 'file?name=assets/[name].[ext]'
            },
            {
                test: /\.(?:eot|woff|woff2|ttf|svg)(?:\?v\=[\d\w\.]+)?$/,
                loader: 'file?name=assets/[name].[ext]'
            },
            {
                loader: 'style-loader?singleton!css-loader!autoprefixer-loader?browsers=last 2 version!stylus',
                test: new RegExp('\\.(styl)$')
            }
        ]
    },
    resolve: {
        alias: {
            'app': path.resolve(__dirname, '..', 'src')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                IS_BROWSER: true,
                DEBUG: JSON.stringify(DEBUG)
            }
        }),
        new HtmlWebpackPlugin()
    ]
}
