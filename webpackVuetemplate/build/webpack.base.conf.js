
// all require -> json

//  include path as module
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    // dist: path.join(__dirname, '../public'),
    assets: 'assets/'
    // assets: 'static/'
}

module.exports = {
    // export const (such as PATHS) to other conf
    externals: {
        paths:PATHS
    },
    entry :{
        app: PATHS.src
        // app: './src/index.js'
        // second: './src/index.js'
    },
    output: {
    // main.js -> [name].js -> app.js
        // filename: '[name].js',
        // path: path.resolve(__dirname, './dist'),
        // publicPath: '/dist'
            filename: `${PATHS.assets}js/[name].js`,
            path: PATHS.dist,
            publicPath: '/'

    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    
                    {
                        loader:'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader:'postcss-loader',
                        options: {sourceMap: true, config: {path:`${PATHS.src}/js/postcss.config.js`}}
                    },
                    {
                        loader:'sass-loader',
                        options: {sourceMap: true}
                    }

                ]
                
            
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    
                    {
                        loader:'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader:'postcss-loader',
                        options: {sourceMap: true, config: {path:`${PATHS.src}/js/postcss.config.js`}}
                    }
                  
                ]
                
            
            }
        ]
    },

    // devServer: {
    //                                 // warnings
    //     overlay: true
    // },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: '[name].css' // entry -> app.css will be
            filename: `${PATHS.assets}css/[name].css`,
          }),
          new HtmlWebpackPlugin({
              hash: false,
              template:`${PATHS.src}/index.html`,
              filename:'./index.html'
          }),
          new CopyWebpackPlugin([
              {from: `${PATHS.src}/img`, to: `${PATHS.assets}img`},
              {from: `${PATHS.src}/static`, to: ``}
          ])
    ]
}