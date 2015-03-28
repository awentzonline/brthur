'use strict';

define('brthur-chunklist',[
  'jquery',
  'EventEmitter'
], function (
  $, EventEmitter
) {

var defaults = {
  multiline: true
};

function ChunkList(options) {
  this.options = $.extend(defaults, options || {});
  this.chunks = [];
  this.observers = [];
  this.events = new EventEmitter();
  this.events.defineEvents(['chunkInserted', 'chunkChanged', 'chunkRemoved']);
}

ChunkList.prototype.getHtml = function () {
  var html = '';
  for (var i = 0; i < this.chunks.length; i++) {
    var chunk = this.chunks[i];
    html += chunk.getHtml();
  }
  return html;
};

ChunkList.prototype.appendChunk = function (chunk) {
  this.insertChunk(chunk, this.chunks.length);
};

ChunkList.prototype.insertChunk = function (chunk, index) {
  if (this.chunkIndex(chunk) === -1) {
    index = Math.max(0, Math.min(index, this.chunks.length));
    this.chunks.splice(index, 0, chunk);
    chunk.added(this);
    this.events.emitEvent('chunkInserted', [chunk, index]);
  }
};

ChunkList.prototype.removeChunk = function (chunk) {
  var index = this.chunkIndex(chunk) 
  if (index !== -1) {
    this.chunks.splice(index, 1);
    chunk.removed();
    this.events.emitEvent('chunkRemoved', [chunk]);
  }
};

ChunkList.prototype.chunkIndex = function (chunk) {
  return this.chunks.indexOf(chunk);
};

return ChunkList;

});
