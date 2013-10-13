/*
 * grunt-roole
 * https://github.com/chrisenytc/grunt-roole
 *
 * Copyright (c) 2013 Christopher EnyTC, Lázaro Alvarenga
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  
  //External file
  var roole = require('roole');

  grunt.registerMultiTask('roole', 'Compile Roole files to CSS', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      indent: '\t',
      precision: 3,
      prefix: 'webkit moz ms o',
      skipPrefixed: false,
      separator: grunt.util.linefeed,
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        //Try compile the .roo file
        var compiled;
        
        roole.compile(grunt.file.read(filepath), options, function(error, css){
          if(error)
          {
            grunt.log.warn(error.message+' on line '+error.line);
            grunt.fail.warn(error);
          }
          compiled = css;
        });
        
        return compiled;
        
      }).join(grunt.util.normalizelf(options.separator));

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
