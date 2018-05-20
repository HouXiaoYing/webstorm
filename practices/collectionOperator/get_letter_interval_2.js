'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = new Array();
  if (number_a == number_b) {
    if (number_a> 26) {
      if (number_a % 26) {
        result.push(String.fromCharCode(number_a / 26 + 96) + String.fromCharCode(number_a % 26 + 96));
      }
      else {
        result.push(String.fromCharCode(number_a / 26 + 95) + String.fromCharCode(122));
      }
    }
    else {
      result.push(String.fromCharCode(i + 96));
    }
  }
  else if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      if (i > 26) {
        if (i % 26) {
          result.push(String.fromCharCode(i / 26 + 96) + String.fromCharCode(i % 26 + 96));
        }
        else {
          result.push(String.fromCharCode(i / 26 + 95) + String.fromCharCode(122));
        }
      }
      else {
        result.push(String.fromCharCode(i + 96));
      }
    }
  }
  else if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
      if (i > 26) {
        if (i % 26) {
          result.push(String.fromCharCode(i / 26 + 96) + String.fromCharCode(i % 26 + 96));
        }
        else {
          result.push(String.fromCharCode(i / 26 + 95) + String.fromCharCode(122));
        }
      }
      else {
        result.push(String.fromCharCode(i + 96));
      }
    }
  }
    return result;

}

module.exports = get_letter_interval_2;

