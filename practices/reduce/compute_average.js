'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum=0,i;
  for(i=0;i<collection.length;i++)
  {
   sum+=collection[i];
  }
  var average=parseFloat(sum/collection.length);
  return average;
}

module.exports = compute_average;

