'use strict';
var single_element = function(collection_b) {
  var  result=[];
  var res = collection_b.filter(function (value, index) {
    return index % 2 != 0;//下标为偶数的元素
  });
  for (let i = 0; i<res.length; i++) {
    var j=res.pop();
    var t=res.indexOf(j);
if (t == -1)
{
   result.push(j);
    }
    else res.splice(t,1);
    var t=res.indexOf(j);
    if(t!=-1){
      res.splice(t,1);
    }
 }
 result.reverse();
  return result;
};
module.exports = single_element;
