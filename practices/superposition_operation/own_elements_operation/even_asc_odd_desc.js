'use strict';
var even_asc_odd_desc = function(collection){
  var collection_a= [].concat(collection);
  var res_a = collection.filter(function (value, index) {
    return value % 2 == 0;//下标为偶数的元素
  });
    var res_b = collection_a.filter(function (value, index) {
      return value % 2 != 0;//下标为奇数的元素
       });
  for(var i=0;i<res_a.length-1;i++){
    for(var j=0;j<res_a.length-i-1;j++){
      if(res_a[j]>res_a[j+1]){
        res_a[j]+=res_a[j+1];
        res_a[j+1]=res_a[j]-res_a[j+1];
        res_a[j]-=res_a[j+1];
      }
    }
  }
    for(var i=0;i<res_b.length-1;i++){
      for(var j=0;j<res_b.length-i-1;j++){
        if(res_b[j]<res_b[j+1]){
          res_b[j]+=res_b[j+1];
          res_b[j+1]=res_b[j]-res_b[j+1];
          res_b[j]-=res_b[j+1];
        }
      }
    }

    return res_a.concat(res_b);
  }


module.exports = even_asc_odd_desc;
