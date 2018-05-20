'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum=0;
  var str='0abcdefghijklmnopqrstuvwxyz';
  var data=[];
  for (let i = 0; i < str.length; i++) {
    data.push(str[i]);
  }

  for (let i = 0; i < collection.length; i++) {
    sum+=collection[i]
  }
 var avg=Math.ceil(sum/collection.length);
  return data[avg];

  }



module.exports = average_to_letter;

