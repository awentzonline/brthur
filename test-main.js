var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  var newPath =  path.replace(/^\/base\//, '../../').replace(/\.js$/, '');
  return newPath;
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/src/js/',

  paths: {
    'bower': '../../bower_components/',
    'jquery': '../../bower_components/jquery/dist/jquery',
    'EventEmitter': '../../bower_components/eventEmitter/EventEmitter',
    // scribe related
    'scribe': '../../bower_components/scribe/scribe',
    // endscribe
    'brthur': './brthur',
    'brthur-core': './brthur-core',
    'brthur-chunk': './brthur-chunk',
    'brthur-chunklist': './brthur-chunklist',
    'brthur-view': './brthur-view',
    'element-chunk': './chunks/element-chunk',
    'static-chunk': './chunks/static-chunk',
    'content-editable-chunk': './chunks/content-editable-chunk',

    // tests
    'jasmine-jquery': '../../bower_components/jasmine-jquery/lib/jasmine-jquery'
  },

  shim: {
    'jquery': {
      exports: '$'
    }
  },

  wrap: {
    startFile: 'src/js/wrap-start.frag',
    endFile: 'src/js/wrap-end.frag'
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
