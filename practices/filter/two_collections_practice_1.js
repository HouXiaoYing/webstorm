'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = new Array();
  for(var t=0;t<collection_a.length;t++){
    for(var i=0;i<collection_b.length;i++){
      if (collection_b[i] == collection_a[t])
        result.push(collection_b[i]);
    }
  }
  return result;
}

module.exports = choose_common_elements;
