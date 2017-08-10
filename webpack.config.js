const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');


module.exports = {
    entry: {
        app: './public/app.bootstrap.js',
        vendor: ['angular', 'angular-ui-router', 'jQuery']
    },
    output: {
        path: path.resolve(__dirname, './public/dist'),
        publicPath: 'public/dist/',
        filename: '[name]_.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        removeComments: true,
                        minimize: true
                    }
                }],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether'
        })
    ]
}
