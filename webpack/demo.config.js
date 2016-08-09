var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var extend = require('extend');
var runtimeName = require('yargs').argv.name;
var PluginName = require('../src/'+runtimeName)

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
        new PluginName({options: true})
    ]
});