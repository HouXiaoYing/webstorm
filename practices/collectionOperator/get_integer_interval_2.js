'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var results = new Array();
  if (number_a > number_b) {
    for (var i =number_a ; i >= number_b ; i--) {
      if (i % 2 == 0) {
        results.push(i);
      }
    }
  }
  else if (number_a <number_b) {
    for (var i = number_a ; i <= number_b; i++) {
      if (i % 2 == 0) {
        results.push(i);
      }
    }
  }
  else if(number_a ==number_b){
    if(number_a%2==0){
      results.push(number_a );
    }
  }
  return results;
}

module.exports = get_integer_interval_2;
