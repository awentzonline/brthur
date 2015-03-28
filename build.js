require.config({
  baseUrl: './src/js/',
  paths: {
    'bower': '../../bower_components/',
    'jquery': '../../bower_components/jquery/dist/jquery',
    'EventEmitter': '../../bower_components/eventEmitter/EventEmitter',
    // scribe related
    'scribe': '../../bower_components/scribe/scribe',
    // end scribe related
    'brthur-core': './brthur-core',
    'brthur-chunk': './brthur-chunk',
    'brthur-chunklist': './brthur-chunklist',
    'brthur-view': './brthur-view',
    'element-chunk': './chunks/element-chunk',
    'static-chunk': './chunks/static-chunk',
    'content-editable-chunk': './chunks/content-editable-chunk'
  },
  name: '../../bower_components/almond/almond',
  wrap: {
    startFile: 'src/js/wrap-start.frag',
    endFile: 'src/js/wrap-end.frag'
  },
  include: ['brthur'],
  optimize: 'none',
  out: './build/brthur.js'
});
