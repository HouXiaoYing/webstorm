function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection=[];
  var collection_b=object_b.value;

  for (var i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < collection_b.length; j++) {
      if (collection_a[i].key == collection_b[j])
        collection_a[i].count -=Math.floor(collection_a[i].count/3);
    }
  }
  return collection_a;

}

module.exports = create_updated_collection;
