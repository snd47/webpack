
const path = require('path')
module.exports = {
    entry :{
        app: './src/index.js'
    },
    output: {
        // main.js -> [name].js -> app.js
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath:'./dist'
    },

    devServer: {
        // warnings
        overlay: true
    }
}