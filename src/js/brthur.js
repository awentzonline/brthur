'use strict';

define('brthur',[
  'brthur-core',
  'brthur-chunk',
  'element-chunk',
  'static-chunk',
  'content-editable-chunk'
], function (
  BRthur, Chunk, ElementChunk, StaticChunk, ContentEditableChunk
) {

return {
    BRthur: BRthur,
    Chunk: Chunk,
    ElementChunk: ElementChunk,
    StaticChunk: StaticChunk,
    ContentEditableChunk: ContentEditableChunk
};

});
