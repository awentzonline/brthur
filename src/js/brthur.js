'use strict';

define('brthur',[
  'jquery',
  'EventEmitter'
], function (
  $, EventEmitter
) {

var defaults = {
  multiline: true,
};

function BRthur(element, options) {
  this.element = element;
  this.options = $.extend(defaults, options || {});
  this.chunks = [];
  this.events = new EventEmitter();
  this.events.defineEvents(['chunkAdded', 'chunkChanged', 'chunkRemoved']);
  this.events.addListener('chunkAdded', function (brthur) {
    brthur.events.emitEvent('htmlChanged', [brthur]);
  });
}

BRthur.prototype.getHTML = function () {
  var html = '';
  for (var i = 0; i < this.chunks.length; i++) {
    var chunk = this.chunks[i];
    html += chunk.getHTML();
  }
  return html;
};

BRthur.prototype.appendChunk = function (chunk) {
  this.chunks.push(chunk);
  chunk.added(this);
  this.events.emitEvent('chunkAdded', [this, chunk]);
};

BRthur.prototype.removeChunk = function (chunk) {
  var index = this.chunks.indexOf(chunk);
  if (index !== -1) {
    this.chunks.splice(index, 1);
    chunk.removed();
    this.events.emitEvent('chunkRemoved', [this, chunk]);
  }
};

return BRthur;

});
