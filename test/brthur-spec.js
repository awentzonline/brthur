'use strict';

define([
  'scribe',
  'jquery',
  'brthur',
  'static-chunk',
  'jasmine-jquery'], function(Scribe, jquery, BRthur, StaticChunk, jasmineJquery) {

  describe('scribe brthur', function () {

    var brthur;   

    beforeEach(function () {
      jasmine.getFixtures().fixturesPath = '/base/test/fixtures';
      loadFixtures('brthur.html');
      brthur = new BRthur(document.getElementById('brthur'), {});
    });

    it('loads up a-ok', function () {

    });
  
    it('handles appending/removal of some StaticChunks', function () {
      var content = 'Hello!';
      var contentHtml = '<div>' + content + '</div>';
      var expectedHtml = '';  // gets added below
      var numChunks = 50;
      var chunks = [];
      // append em
      for (var i = 0; i < numChunks; i++) {
        // ensure events are fired
        var onChunkAdded = jasmine.createSpy('chunkAdded' + i);
        brthur.events.addListener('chunkAdded', onChunkAdded);
        // create a chunk and add it
        var chunk = new StaticChunk({
          content: content
        });
        chunks.push(chunk);
        brthur.appendChunk(chunk);

        expectedHtml += contentHtml;
        expect(brthur.getHTML()).toEqual(expectedHtml);
        expect(onChunkAdded).toHaveBeenCalled();
      }
      // remove em
      for (var i = numChunks - 1; i <= 0; i--) {
        // ensure events are fired
        var onChunkAdded = jasmine.createSpy('chunkRemoved' + i);
        brthur.events.addListener('chunkRemoved', onChunkRemoved);
        // create a chunk and add it
        chunk = chunks.unshift();
        brthur.removeChunk(chunk);

        expectedHtml = expectedHtml.substr(0, expectedHtml.length - contentHtml.length);
        expect(brthur.getHTML()).toEqual(expectedHtml);
        expect(chunkRemoved).toHaveBeenCalled();
      }
    });
  });
});
