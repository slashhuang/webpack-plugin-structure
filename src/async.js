/**
 * Created by slashhuang on 16/8/9.
 */
function HelloAsyncPlugin(options) {}

HelloAsyncPlugin.prototype.apply = function(compiler) {
    compiler.plugin("emit", function(compilation, callback) {

        // Do something async...
        setTimeout(function() {
            console.log("Done with async work...");
            callback();
        }, 1000);

    });
};

module.exports = HelloAsyncPlugin;