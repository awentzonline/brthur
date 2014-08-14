'use strict';

define('element-chunk',[
  'jquery',
  'brthur-chunk'
], function (
  $, Chunk
) {

// Simple Chunk-subclass demo

function ElementChunk(options) {
  Chunk.call(this, options);
  this.element = this.createElement();
  this.container.append(this.element);
}

ElementChunk.prototype = Object.create(Chunk.prototype);
ElementChunk.prototype.constructor = ElementChunk;

ElementChunk.prototype.createElement = function () {
  return document.createElement('div');
};

return ElementChunk;

});
