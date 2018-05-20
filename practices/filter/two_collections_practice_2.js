'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result=[].concat(collection_a);
  for(var i=0;i<collection_b.length;i++){
    if (result.indexOf(collection_b[i]) == -1) result.push(collection_b[i]);
    else if(result.indexOf(collection_b[i]) != -1) result.splice(result.indexOf(collection_b[i]),1);
  }
  return result;
}

module.exports = choose_no_common_elements;
