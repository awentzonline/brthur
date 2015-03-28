'use strict';

define([
  'element-chunk',
  'jasmine-jquery'], function(ElementChunk, jasmineJquery) {

  describe('ElementChunk', function () {
    var chunk;  

    beforeEach(function () {
      chunk = new ElementChunk({});
    });

    it('loads up a-ok', function () {

    });

    it('creates an element. Just trying for 100% test coverage.', function () {
      expect(chunk.getHtml()).toEqual('<div></div>');
    });

  });
});
