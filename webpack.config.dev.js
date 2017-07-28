var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
    ],
    module: {
        loaders: [  {test: /\.js$/ , 
                        loaders:['babel-loader'],
                        exclude: '/node_modules/'},
                    {test: /\.jsx$/ , 
                        loaders:['babel-loader'], 
                        exclude: '/node_modules/'}]
    }
}