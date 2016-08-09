# webpack-plugin-structure
## system for webpack-plugin 
|- webpack + webpack.config
|- compilation  
|-----|-- chunks[Array]  
|-----|-- modules[Array] 


  
### compilation top-level key/value  
- chunks[Array]     
> An array of chunks (build outputs) in the compilation.  
> Each chunk manages the composition of a final rendered assets   

 
- modules[Array]  
> An array of modules (built inputs) in the compilation.   
> Each module manages the build of a raw file from your source library.
 
### compilation.modules
- fileDependencies
> An array of source file paths included into a module.   
> This includes the source JavaScript file itself (ex: index.js)  
> and all dependency asset files (stylesheets, images, etc) that it has required.  
> Reviewing dependencies is useful for seeing what source files belong to a module
 
 

