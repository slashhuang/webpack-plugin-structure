function HelloWorldPlugin(options) {
    // Setup the plugin instance with options...
}

HelloWorldPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        console.log('Hello World!');
    });
};

module.exports = HelloWorldPlugin;