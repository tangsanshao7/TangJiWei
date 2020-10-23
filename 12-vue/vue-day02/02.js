// 2.深拷贝拷贝多层, 每一级别的数据都会拷贝.
var obj = {
  id: 1,
  name: "andy",
  msg: {
    age: 18,
  },
  color: ["pink", "red"],
};
// 声明一个新数组

var obj2 = {};

// 创建一个函数 
function copy(newobj, oldobj) {
  // 遍历对象
  for (const key in oldobj) {
    // 保存对象
    var item = oldobj[key];
    console.log(Array.isArray(oldobj[key]));
    //判断是不是数组
    if (Array.isArray(oldobj[key])) {
      // 把老数组的值给新数组
      newobj[key] = [];

      copy(newobj[key], item);

      //判断是不是对象
    } else if (oldobj[key].constructor == Object) {
      // 把老对象的值给新对象
      newobj[key] = {};
      copy(newobj[key], item);
    } else {
      newobj[key] = item;
    }
  }
  return newobj;
}
// 调用函数
copy(obj2, obj)


obj2.msg.age = 20;
console.log("新", obj2);
console.log("旧", obj);

// false ? "对" : "错"
console.log(obj2.color == obj.color);
console.log(obj2.msg == obj.msg);