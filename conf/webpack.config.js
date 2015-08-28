import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const DEBUG = 'app:*'

export default {
    cwd: path.resolve(__dirname, '..'),
    cache: true,
    debug: true,
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        filename: 'app.js'
    },
    entry: path.resolve(__dirname, '..', 'src', 'index.js'),
    module: {
        preLoaders: [{
            test: /\.styl$/,
            loader: 'import-glob-loader'
        }],
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
                loader: 'style-loader?singleton!css-loader!autoprefixer-loader?browsers=last 2 version!stylus!import-glob-loader',
                test: /\.styl$/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                IS_BROWSER: JSON.stringify(true),
                DEBUG: JSON.stringify(DEBUG)
            }
        }),
        new HtmlWebpackPlugin()
    ]
}
