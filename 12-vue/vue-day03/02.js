
// 例: 新对象和旧对象的内存地址要不一样,一样的算不对
var obj = {
  id: 1,
  name: "andy",
  msg: {
    age: 18,
  },
  color: ["pink", "red"],
};

var obj2 = {};

function copy(newobj, oldobj) {

  for (const key in oldobj) {
    item = oldobj[key];


    if (Array.isArray(item)) {
      newobj[key] = [];
      copy(newobj[key], item)
    } else if (oldobj[key].constructor == Object) {
      newobj[key] = {};
      copy(newobj[key], item)
    } else {
      newobj[key] = item;
    }
  }
}

copy(obj2, obj);

obj2.id = 2;


console.log(obj);
console.log(obj2);