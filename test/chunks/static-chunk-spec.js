'use strict';

define([
  'static-chunk',
  'jasmine-jquery'], function(StaticChunk, jasmineJquery) {

  describe('StaticChunk', function () {
    var chunk;  
    var content = 'Hey buddy!'; 

    beforeEach(function () {
      chunk = new StaticChunk({
        content: content
      });
    });

    it('loads up a-ok', function () {

    });

    it('politely greets', function () {
      expect(chunk.getHtml()).toEqual('<div>' + content + '</div>');
    });

  });
});
