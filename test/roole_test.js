'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.roole = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  compile: function(test) {
    test.expect(2);

    test.equal(grunt.file.read('tmp/roole.css'), grunt.file.read('test/expected/roole.css'), 'Should compile roole to css.');
    
    test.equal(grunt.file.read('tmp/concat.css'), grunt.file.read('test/expected/concat.css'), 'Should compile and concat roole to css.');

    test.done();
  }
};
