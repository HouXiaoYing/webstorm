'use strict';
var is_exist_element = function(collection,element){
  var res = collection.filter(function (value, index) {
    return index % 2 == 0;//下标为偶数的元素
  });
  return res.indexOf(element) != -1;//不存在false,存在true.
};
module.exports = is_exist_element;
