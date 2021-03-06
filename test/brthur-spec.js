'use strict';

define([
  'scribe',
  'jquery',
  'brthur-core',
  'static-chunk',
  'jasmine-jquery'], function(Scribe, jquery, BRthur, StaticChunk, jasmineJquery) {

  describe('brthur', function () {

    var brthur;   

    beforeEach(function () {
      jasmine.getFixtures().fixturesPath = '/base/test/fixtures';
      loadFixtures('brthur.html');
      brthur = new BRthur(document.getElementById('brthur'), {});
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
        brthur.appendChunk(chunk);
        expectedHtml += contentHtml;
      }
      expect(brthur.getHtml()).toEqual(expectedHtml);
      var moreChunk = new StaticChunk({
        content: moreContent
      }); 
      brthur.insertChunk(moreChunk, 0);
      expect(brthur.getHtml()).toEqual(moreContentHtml + expectedHtml);
      expect(brthur.chunkIndex(moreChunk)).toEqual(0);
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
        var onHtmlChanged = jasmine.createSpy('htmlChanged' + i);
        brthur.events.addListener('htmlChanged', onHtmlChanged);
        // create a chunk and add it
        var chunk = new StaticChunk({
          content: content
        });
        chunks.push(chunk);
        brthur.appendChunk(chunk);

        expectedHtml += contentHtml;
        expect(brthur.getHtml()).toEqual(expectedHtml);
        expect(onHtmlChanged).toHaveBeenCalled();
      }
      // remove em
      for (var i = numChunks - 1; i >= 0; i--) {
        // ensure events are fired
        var onHtmlChanged = jasmine.createSpy('htmlChanged' + i);
        brthur.events.addListener('htmlChanged', onHtmlChanged);
        // create a chunk and add it
        chunk = chunks.pop();
        brthur.removeChunk(chunk);

        expectedHtml = expectedHtml.substr(0, expectedHtml.length - contentHtml.length);
        expect(brthur.getHtml()).toEqual(expectedHtml);
        expect(onHtmlChanged).toHaveBeenCalled();
      }
    });
  });
});
