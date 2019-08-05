
const path = require('path')
module.exports = {
    entry :{
        app: './src/index.js'
        // second: './src/index.js'
    },
    output: {
        // main.js -> [name].js -> app.js
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }

    devServer: {
        // warnings
        overlay: true
    }
}