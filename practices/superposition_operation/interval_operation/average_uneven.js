'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var j=0,sum=0
  for(var i=0;i<collection.length;i++){
    if(collection[i]!=0){
      sum+=collection[i];
      j++
    }
  }
  var avg=Math.floor(sum/j);
  return avg;
}

module.exports = average_uneven;
