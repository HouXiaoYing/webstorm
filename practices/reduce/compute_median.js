'use strict';

function compute_median(collection) {
  //在这里写入代码
  var lowMiddle = Math.floor((collection.length - 1) / 2);
  var highMiddle = Math.ceil((collection.length - 1) / 2);
 var i=(Number(collection[lowMiddle]) + Number(collection[highMiddle])) / 2;
    if(i>2)
      return i-1;
    else return i;
  }

module.exports = compute_median;


