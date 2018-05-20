'use strict';
var calculate_average = function(collection_a) {

    var res = collection_a.filter(function (a, index) {
      return index % 2 == 1;//第偶数个元素即下标为奇数的元素
    });
    var sum = res.reduce(function (a, b) {
      return a + b;
    });
    return sum / res.length;
  }

module.exports = calculate_average;
