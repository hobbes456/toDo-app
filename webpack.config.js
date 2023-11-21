const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        },
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./src/index.html"
            }
        ),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./src/asset/favicon.png"),
                    to: path.resolve(__dirname, "dist"),
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: "asset/resource",
            },
        ],
    },
    devServer: {
        port: 3000
    }
}