const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const app = require('./app')
module.exports = {
    mode: "development",
    entry: Object.fromEntries(
        Object.entries(app).map(e => [e[0], e[1].js])
    ),
    output: {
        filename: "[name]_[hash].js",
        path: __dirname + '/dist'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [...Object.keys(app).map(key => new HtmlWebpackPlugin({
        filename: `${key}.html`,
        inject: "body",
        chunks: [key],
        template: app[key].html
    })),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist'), noErrorOnMissing: true}
            ]
        }),
        new CleanWebpackPlugin(),
    ]
}