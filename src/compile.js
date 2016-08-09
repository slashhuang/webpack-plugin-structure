/**
 * Created by slashhuang on 16/8/9.
 */
function HelloCompilationPlugin(options) {}

HelloCompilationPlugin.prototype.apply = function(compiler) {

    // Setup callback for accessing a compilation:
    compiler.plugin("compilation", function(compilation) {

        // Now setup callbacks for accessing compilation steps:
        compilation.plugin("optimize", function() {
            console.log("Assets are being optimized.");
        });
    });
};
module.exports = HelloCompilationPlugin;
