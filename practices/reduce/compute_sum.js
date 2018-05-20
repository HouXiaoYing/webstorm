'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var sum=0,i;
  for(i=0;i<collection.length;i++)
  {
    sum+=collection[i];
  }
  return sum;
}

module.exports = calculate_elements_sum;

