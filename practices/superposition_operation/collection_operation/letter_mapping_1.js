'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var str = '0abcdefghijklmnopqrstuvwxyz';
  return collection.filter(function (a) {
    return a % 2 == 0;
  })
    .map(function (a) {
      return str[a];
    });
}

module.exports = even_to_letter;
