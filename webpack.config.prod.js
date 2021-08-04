const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new RemovePlugin({
            before: {
                root: './dist',
                test: [
                    {
                        folder: './',
                        method: () => true,
                    }
                ],
                exclude: [
                    './.git',
                ]
            }
        }),
        new HtmlWebpackPlugin({
            title: "three.js project",
            template: './src/static/index.html',
            filename: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
              { from: "./src/assets", to: "./assets" }
            ],
        })
    ],
};