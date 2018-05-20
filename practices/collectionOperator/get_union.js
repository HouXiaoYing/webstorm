'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result = [].concat(collection_a);
  for(var j=0;j<collection_b.length;j++){
    for(var i=0;i<result.length;i++){
      if(result[i]==collection_b[j]) break;
      }
      if(i==result.length){
      result.push(collection_b[j]);
    }
  }
  return result;
}

module.exports = get_union;

