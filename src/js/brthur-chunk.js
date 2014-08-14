'use strict';

define('brthur-chunk', function () {

// Here's the base class for the chunks which make up a brthur document.

function Chunk(options) {
  this.options = options;
  this.brthur = null;
  this.container = this.createContainer();
}

Chunk.prototype.createContainer = function () {
  return $('<div></div>');
};

Chunk.prototype.added = function (brthur) {
  this.brthur = brthur;
};

Chunk.prototype.removed = function (brthur) {
  this.brthur = null;
}

Chunk.prototype.getHTML = function () {
  return this.container.html();
};

return Chunk;

});
