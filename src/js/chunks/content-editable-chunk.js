'use strict';

define('content-editable-chunk',[
  'jquery',
  'element-chunk'
], function (
  $, ElementChunk
) {

// Simple contentEditable chunk-subclass

function ContentEditableChunk(options) {
  ElementChunk.call(this, options);
}

ContentEditableChunk.prototype = Object.create(ElementChunk.prototype);
ContentEditableChunk.prototype.constructor = ContentEditableChunk;

ContentEditableChunk.prototype.createElement = function () {
  var content = this.options.initialHtml || ''; 
  var element = $('<div contenteditable="true" style="white-space: pre-wrap">' + content + '</div>');
  return element;
};

ContentEditableChunk.prototype.added = function (chunkList) {
  ElementChunk.prototype.added.call(this, chunkList);
  this.observer = new MutationObserver(this.onMutated.bind(this));
  this.observer.observe(this.element[0], {
    characterData: true, subtree: true
  });
};

ContentEditableChunk.prototype.onMutated = function (mutations) {
  this.chunkList.events.trigger('chunkChanged', [this]);
};

ContentEditableChunk.prototype.getHtml = function () {
  return this.element.html();
};

return ContentEditableChunk;

});