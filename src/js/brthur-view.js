'use strict';

define('brthur-view', [
    'EventEmitter'
], function (EventEmitter) {

function BRthurView(element, options) {
  this.element = element;
  this.options = options;
  this.events = new EventEmitter();
}

BRthurView.prototype.insertChunk = function (chunk, i) {
    this.element.append(chunk.container);
};

BRthurView.prototype.removeChunk = function (chunk) {
    chunk.container.remove();
};

return BRthurView;

});
