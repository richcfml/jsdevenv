// This file isn't transpile. so must use CommonJS and ES5

// Register babel to transpile before running our test
require('babel-register')();

// Disable webpack freatures that Mocha doesn't understand
require.extensions['.css'] = function () {};
