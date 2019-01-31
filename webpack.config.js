const webpack = require("webpack");
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:3003',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    
    devtool: 'inline-source-map',

    output: {
        path: path.join(__dirname, 'public/build'),
        filename: 'build.js',
        publicPath: '/build/'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [ /node_modules/ ],
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true
                        }
                    }
                ]
            },
            {
                test: /\.scss?$/,
                exclude: [ /node_modules/ ],
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            indent: 'postcss',
                            plugins: [
                                require('autoprefixer')()
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(otf|eot|ttf|ttc|woff|jpe?g|png|gif|svg)$/,
                exclude: [ /node_modules/ ],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 24000
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        //     }
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
