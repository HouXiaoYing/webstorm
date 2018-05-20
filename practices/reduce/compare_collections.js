'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  if (collection_a.length != collection_b.length) return false;
  else {
    for (var i = 0, l = collection_a.length; i < l; i++) {
      if (!collection_a[i]==(collection_b[i]))
        return false;
      else if (collection_a[i] != collection_b[i]) {
        return false;
      }
    }
    return true;
  }
}
module.exports = compare_collections;


