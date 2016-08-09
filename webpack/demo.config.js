var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var extend = require('extend');
var HelloWorldPlugin = require('../src/index');

module.exports =extend({}, {
    devtool: "source-map",
    entry:[
        './example/index.js'
    ],
    output:{
        path:path.join(process.cwd(),'example/bundle'),
        filename:'bundle.js',
        publicPath:'/example/bundle',
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HelloWorldPlugin({options: true})
    ]
});