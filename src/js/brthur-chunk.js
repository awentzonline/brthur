'use strict';

define('brthur-chunk', function () {

// Here's the base class for the chunks which make up a brthur document.

function Chunk(options) {
  this.options = options;
  this.chunkList = null;
  this.container = this.createContainer();
}

Chunk.prototype.createContainer = function () {
  return $('<div></div>');
};

Chunk.prototype.added = function (chunkList) {
  this.chunkList = chunkList;
};

Chunk.prototype.removed = function (chunkList) {
  this.chunkList = null;
}

Chunk.prototype.getHtml = function () {
  return this.container.html();
};

return Chunk;

});
