/*
* @Author: Administrator
* @Date:   2017-11-02 12:26:29
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-02 20:07:21
*/  
var path = require('path');
var webpack = require('webpack');


module.exports = {
    context : __dirname + '/src',
    entry: './js/index.js',
    module : {
        loaders: [{
            test: /\.js?$/,
            exclude : /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    output: {
        path:__dirname + "/src/",
        filename : "bundle.js"
    },
    devServer: {
        inline: true,
        port: 8081
    }


};