const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
            template: "src/index.html",
            filename: "index.html",
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};