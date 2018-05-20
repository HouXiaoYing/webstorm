function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var c = new Array();
  var collection_b=object_b.value;
  for(var i = 0; i<collection_a.length ; i++)
  {
    for(var j = 0; j<collection_b.length ; j++)
    {
      if (collection_a[i] == collection_b[j])
      {
        c.push(collection_a[i]);
        break;
      }
    }
  }
  return c;
}
module.exports = collect_same_elements;
