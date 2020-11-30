const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    // entry: './src/index.js',
    entry: {
        app: './src/index.js',
    },
    //看manifast 和 webpackManifestPlugin
    output: {
        // filename: 'main.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: "/"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            // {
            //     test: /\.(png|svg|jpg|fig)$/,
            //     use: ['file-loader']
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: ['file-loader']
            // },{
            //     test: /\.(csv|tsv)$/,
            //     use: ['csv-loader']
            // },{
            //     test: /\.xml$/,
            //     use: ['xml-loader']
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),

    ]
};
