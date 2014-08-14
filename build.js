require.config({
  baseUrl: './src/js/',
  paths: {
    'bower': '../../bower_components/',
    'jquery': '../../bower_components/jquery/dist/jquery',
    'EventEmitter': '../../bower_components/eventEmitter/EventEmitter',
    // scribe related
    'scribe': '../../bower_components/scribe/scribe',
    // end scribe related
    'brthur-chunk': './brthur-chunk',
    'element-chunk': './chunks/element-chunk'
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
