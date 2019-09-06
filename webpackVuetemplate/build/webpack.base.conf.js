
// all require -> json

//  include path as module
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {VueLoaderPlugin} = require('vue-loader')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    // dist: path.join(__dirname, '../public'),
    assets: 'assets/'
    // assets: 'static/'
}

// const PAGES_DIR = PATHS.src
// const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'))

module.exports = {
    // export const (such as PATHS) to other conf
    externals: {
        paths:PATHS
    },
    entry :{
        app: PATHS.src,
        // app: './src/index.js'
        // second: './src/index.js'
        lk: `${PATHS.src}/lk.js`
    },
    output: {
    // main.js -> [name].js -> app.js
        // filename: '[name].js',
        // path: path.resolve(__dirname, './dist'),
        // publicPath: '/dist'
            filename: `${PATHS.assets}js/[name].[hash].js`,
            path: PATHS.dist,
            publicPath: '/'

    },
    optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        //not local
                        name: 'vendors',
                        test: /node_modules/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                // for scss usage
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
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
                        options: {sourceMap: true, config: {path:`./postcss.config.js`}}
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
                        options: {sourceMap: true, config: {path:`./postcss.config.js`}}
                    }
                  
                ]
                
            
            }
        ]
    },

    // devServer: {
    //                                 // warnings
    //     overlay: true
    // },
    resolve: {
        alias: {
            '@': PATHS.src,
            '~': 'src',
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: '[name].css' // entry -> app.css will be
            filename: `${PATHS.assets}css/[name].[hash].css`,
          }),
          new HtmlWebpackPlugin({
              hash: false,
              template:`${PATHS.src}/index.html`,
              filename:'./index.html',
            //   inject: false
          }),
          new CopyWebpackPlugin([
              {from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img`},
              {from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts`},
              {from: `${PATHS.src}/static`, to: ``}
          ]),
        //   ...PAGES.map(page => new HtmlWebpackPlugin({
        //     template: `${PAGES_DIR}/${page}`,
        //     filename: `./${page}`
        //   }))
    ]
}