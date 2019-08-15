const webpack = require('webpack')

const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')


const devWebpackConfig = merge(baseWebpackConfig, {
    mode:'development',
    contentBase: baseWebpackConfig.externals.paths.dist,
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        // warnings
           port:8081,
           overlay: {
               warnings: true,
               errors: true
           }
       },
       plugins:[
           // for import all modules
           new webpack.SourceMapDevToolPlugin({
               filename:'[file].map'
           })
       ]
})


module.exports = new Promise((resolve, reject)=> {
    resolve(devWebpackConfig)
})



