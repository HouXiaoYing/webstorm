'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var i;
  var result=new Array();
  if((number*10)%2==0) {
    for (i = number; i > 0.2; i-=0.2){
      result.push(parseFloat(i.toFixed(1)));
    }
   result.push(0);
      }
      else{
    for (i = number; i >=-0.3; i-=0.3){
      result.push(parseFloat(i.toFixed(1)));
    }
  }
  return result;
}

module.exports = spilt_to_zero;
