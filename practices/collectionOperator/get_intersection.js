'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = new Array();
  for(var i=0;i<collection_b.length;i++){
    for(var t=0;t<collection_a.length;t++){
      if (collection_b[i] == collection_a[t])
        result.push(collection_a[t]);
        }
  }
 return result;
}



module.exports = get_intersection;
