'use strict';

define([
  'content-editable-chunk',
  'jasmine-jquery'
], function(ContentEditableChunk, jasmineJquery) {

  describe('ContentEditableChunk', function () {
    var chunk;  
    var content = '<i>Hey</i> <b>buddy</b>!'; 

    beforeEach(function () {
      chunk = new ContentEditableChunk({
        initialHtml: content
      });
    });

    it('loads up a-ok', function () {

    });

    it('politely greets', function () {
      expect(chunk.getHtml()).toEqual(content);
    });

  });
});
