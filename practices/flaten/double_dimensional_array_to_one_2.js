'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result1=new Array();
  var result = [];
  result1=[].concat.apply([],collection);
    for(var i = 0; i < result1.length; i++){
      if (result.indexOf(result1[i]) == -1) result.push(result1[i]);
    }
  return result;
}

module.exports = double_to_one;
