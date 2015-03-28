'use strict';

define('brthur-core',[
  'jquery',
  'EventEmitter',
  'brthur-chunklist',
  'brthur-view'
], function (
  $, EventEmitter, ChunkList, BRthurView
) {

var defaults = {
  multiline: true,
};

function BRthur(element, options) {
  this.element = element = $(element);
  this.options = $.extend(defaults, options || {});
  this.chunkList = new ChunkList({});
  this.view = new BRthurView(element, {});
  this.events = new EventEmitter();
  this.events.defineEvents(['htmlChanged']);
  this.chunkList.events.addListener('chunkInserted', function (chunk, i) {
    this.view.insertChunk(chunk, i);
    this.events.emitEvent('htmlChanged', [this]);
  }.bind(this));
  this.chunkList.events.addListener('chunkChanged', function (chunk) {
    this.events.emitEvent('htmlChanged', [this]);
  }.bind(this));
  this.chunkList.events.addListener('chunkRemoved', function (chunk) {
    this.view.removeChunk(chunk);
    this.events.emitEvent('htmlChanged', [this]);
  }.bind(this));
}

BRthur.prototype.getHtml = function () {
  return this.chunkList.getHtml();
};

BRthur.prototype.appendChunk = function (chunk) {
  this.chunkList.appendChunk(chunk);
};

BRthur.prototype.insertChunk = function (chunk, index) {
  this.chunkList.insertChunk(chunk, index);
};

BRthur.prototype.removeChunk = function (chunk) {
  this.chunkList.removeChunk(chunk);
};

BRthur.prototype.chunkIndex = function (chunk) {
  return this.chunkList.chunkIndex(chunk);
};

return BRthur;

});
