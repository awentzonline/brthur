'use strict';

define([
  'static-chunk',
  'jasmine-jquery'], function(HelloChunk, jasmineJquery) {

  describe('StaticChunk', function () {
    var chunk;  
    var content = 'Hey buddy!'; 

    beforeEach(function () {
      chunk = new HelloChunk({
        content: content
      });
    });

    it('loads up a-ok', function () {

    });

    it('politely greets', function () {
      expect(chunk.getHTML()).toEqual('<div>' + content + '</div>');
    });

  });
});
