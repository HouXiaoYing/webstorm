function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_b = [];
  var m = {};
  for (let i = 0; i < collection_a.length; i++) {
    if (collection_a[i].length == 1) {
      var k=collection_a[i];
      var v=1;
      if (k in m) {
        m[k] = m[k] + v;
      }
      else {
        m[k] = v;
      }
    }
    else {
      var k = collection_a[i][0];
      var v = parseInt(collection_a[i].slice(2));
      if (k in m) {
        m[k] = m[k] + v;
      }
      else {
        m[k] = v;
      }
    }
  }
  for (var key in m) {
    var temp = {};
    temp.key = key;
    temp.count = m[key];
    collection_b.push(temp);
  }
  return collection_b.map((function (a) {
    if (object_b.value.indexOf(a.key) != -1) {
      a.count-=Math.floor(a.count/3);
    }
    return a;
  }));

}

module.exports = create_updated_collection;
