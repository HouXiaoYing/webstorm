'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var i=1;
  for(var k=0;k<collection.length;k++)
  {
    if(collection[k]%2)
    {
      collection.splice(k,1);
    }
  }
return collection;
}

module.exports = collect_all_even;
