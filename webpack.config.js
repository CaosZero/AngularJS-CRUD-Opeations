const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        app: "./public/app.main.ts",
        vendor: ["angular", "@uirouter/angular-hybrid", "jquery", "reflect-metadata", "zone.js"]
    },
    output: {
        path: path.resolve(__dirname, "./public/dist"),
        publicPath: "public/dist/",
        filename: "[name]_.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.tsx?$/,
                loader: ["ts-loader"]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        removeComments: true,
                        minimize: true
                    }
                }],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        query: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: "65-90",
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
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether"
        })
    ]
}
