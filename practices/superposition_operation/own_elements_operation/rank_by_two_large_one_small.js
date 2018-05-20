'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  for(var i=0;i<collection.length-1;i++){
    for(var j=0;j<collection.length-i-1;j++){
      if(collection[j]>collection[j+1]){
        collection[j]+=collection[j+1];
        collection[j+1]=collection[j]-collection[j+1];
        collection[j]-=collection[j+1];
      }
    }
  }
  for(var i=0;i<collection.length-3;i+=3){
      var t=collection[i];
      collection[i]= collection[i+1];
      collection[i+1]=collection[i+2];
      collection[i+2]=t;
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
