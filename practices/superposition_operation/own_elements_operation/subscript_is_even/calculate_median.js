'use strict';
var calculate_median = function(collection){
  var res=collection.filter(function (a,index) {
    return index%2==1;//第偶数个元素即下标为奇数的元素
  });
//判断第偶数个元素的个数为偶数或偶数
  if(res.length%2 ==1)
  {
    return res[(res.length-1)/2];
  }
  else
  {
    return (res[res.length/2]+res[res.length/2-1])/2;
  }
};
module.exports = calculate_median;
