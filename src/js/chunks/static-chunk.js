'use strict';

define('static-chunk',[
  'jquery',
  'element-chunk'
], function (
  $, ElementChunk
) {

// Simple chunk-subclass demo

function StaticChunk(options) {
  ElementChunk.call(this, options);
}

StaticChunk.prototype = Object.create(ElementChunk.prototype);
StaticChunk.prototype.constructor = StaticChunk;

StaticChunk.prototype.createElement = function () {
  var content = this.options.content || 'Hello, Chunk!';
  return $('<div>' + content + '</div>');
};

return StaticChunk;

});
