function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = new Array();
  collection_b=collection_b[0];
  for(var i = 0; i<collection_a.length ; i++)
  {
    for(var j = 0; j<collection_b.length ; j++)
    {
      if (collection_a[i] == collection_b[j])
      {
        result.push(collection_a[i]);
        break;
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
