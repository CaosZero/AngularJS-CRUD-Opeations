const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        app: "./public/app.main.ts",
        vendor: ["@uirouter/angular-hybrid", "jquery", "reflect-metadata", "zone.js"]
    },
    output: {
        path: path.resolve(__dirname, "./public/dist"),
        publicPath: "public/dist/",
        filename: "[name]_.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
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
