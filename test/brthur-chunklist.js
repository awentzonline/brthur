'use strict';

define([
  'scribe',
  'jquery',
  'brthur-chunklist',
  'static-chunk',
  'jasmine-jquery'], function(Scribe, jquery, ChunkList, StaticChunk, jasmineJquery) {

  describe('ChunkList', function () {

    var chunkList;   

    beforeEach(function () {
      chunkList = new ChunkList({});
    });

    it('loads up a-ok', function () {

    });

    it('allows insertion of chunks', function () {
      var content = 'Hello!';
      var contentHtml = '<div>' + content + '</div>';
      var moreContent = 'Bye.';
      var moreContentHtml = '<div>' + moreContent + '</div>';
      var expectedHtml = '';
      for (var i = 0; i < 5; i++) {
        // create a chunk and add it
        var chunk = new StaticChunk({
          content: content
        });
        chunkList.appendChunk(chunk);
        expectedHtml += contentHtml;
      }
      expect(chunkList.getHtml()).toEqual(expectedHtml);
      var moreChunk = new StaticChunk({
        content: moreContent
      }); 
      chunkList.insertChunk(moreChunk, 0);
      expect(chunkList.getHtml()).toEqual(moreContentHtml + expectedHtml);
      expect(chunkList.chunkIndex(moreChunk)).toEqual(0);
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
        var onChunkInserted= jasmine.createSpy('chunkInserted' + i);
        chunkList.events.addListener('chunkInserted', onChunkInserted);
        // create a chunk and add it
        var chunk = new StaticChunk({
          content: content
        });
        chunks.push(chunk);
        chunkList.appendChunk(chunk);

        expectedHtml += contentHtml;
        expect(chunkList.getHtml()).toEqual(expectedHtml);
        expect(onChunkInserted).toHaveBeenCalled();
      }
      // remove em
      for (var i = numChunks - 1; i >= 0; i--) {
        // ensure events are fired
        var onChunkRemoved = jasmine.createSpy('chunkRemoved' + i);
        chunkList.events.addListener('chunkRemoved', onChunkRemoved);
        // create a chunk and add it
        chunk = chunks.pop();
        chunkList.removeChunk(chunk);

        expectedHtml = expectedHtml.substr(0, expectedHtml.length - contentHtml.length);
        expect(chunkList.getHtml()).toEqual(expectedHtml);
        expect(onChunkRemoved).toHaveBeenCalled();
      }
    });
  });
});