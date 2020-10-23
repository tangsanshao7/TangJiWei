## js简答题

1. 定义Map字典的语法格式是什么？

   ```
   // 语法一：
   var map = new Map([
       ['键',值],
       ['键',值],
       ['键',值]
       ...
   ])
   // 语法二：
   var map = new Map();
   ```

2. 定义Set集合的语法格式是什么？

   ```
   var set = new Set();
   ```

3. Set集合的特点有哪些？

   ```
   1. set集合内不会出现重复的元素
   ```

4. Set集合的打印结果和Array的打印结果有什么不同？

   ```
   详见参考:
   var arr = [1, 2, 3]
   var set = new Set([1, 2, 3]);
   console.log(arr); // [ 1, 2, 3 ]
   console.log(set); // Set { 1, 2, 3 }
   ```

5. 什么是 `json` ？作用是什么？优点有什么？

   ```
   'json': 是一种轻量级的数据交换格式
   '作用': 储存数据 传输数据
   ```

'优点': 轻量级 易于阅读 自我描述

```
## js编程题

1. 使用Set集合对下面数组去重

 1) [1,1,2,2,3,3,4,4,5,5]
 2) [true,'66',null,true,66,null,88,'set',88]
 3) [1,[0],1,[0],1,[0]]

​```js
// 1)[1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
var set = new Set(arr)
console.log(set);

// 2)[true, '66', null, true, 66, null, 88, 'set', 88]
var arr = [true, '66', null, true, 66, null, 88, 'set', 88];
var set = new Set(arr)
console.log(set);

// 3)[1, [0], 1, [0], 1, [0]]
var arr = [1, [0], 1, [0], 1, [0]];
var set = new Set(arr);
// 【一】
for (var key of set.keys()) {
 if (key == 0) {
     set.delete(key);
 }
}
// 【二】
for (var value of set.values()) {
 if (value == 0) {
     set.delete(value);
 }
}
// 【三】
set.forEach(function (key, value, key) {
 // 【三·一】
 if (key == 0) {
     set.delete(key);
 }
 // 【三·二】
 if (value == 0) {
     set.delete(value);
 }
})
console.log(set);
```

1. 定义2个数组，let arrA = [1,2,3,3]; let arrB = [2,4,5,6]求2个数组的并集，交集

```
let arrA = [1, 2, 3, 3];
let arrB = [2, 4, 5, 6];
// 并集
var arrbj = [].concat(arrA, arrB);
console.log(arrbj);
// 交集
var arrjj = [];
for (var i = 0; i < arrA.length; i++) {
    if (arrB.indexOf(arrA[i]) != -1) {
        arrjj.push(arrA[i])
    }
}
console.log(arrjj);
```

1. 操作字符串 let str = 'AaBbCcDdEe'
   1. 输出str字符串中所有的大写字母
   2. 查看字符串是否有'Ff'，有返回对应下标(索引)，没有返回false
   3. 使用两种方式截取字符串'bCcD'

```
let str = 'AaBbCcDdEe';
// 1) 输出str字符串中所有的大写字母
for (var i = 0; i < str.length; i += 2) {
    console.log(str[i]);
}
// 2) 查看字符串是否有'Ff'，有返回对应下标(索引)，没有返回false
if (str.indexOf('Ff') != -1) {
    console.log(str.indexOf('Ff'));
} else {
    console.log(false);
}
// 3) 使用两种方式截取字符串'bCcD'
console.log(str.substr(3, 4));
console.log(str.substring(3, 7));
```

1. 操作字符串 let str = 'hello-word'
   1. 将str字符串中的h和w替换成对应的大写字母
   2. 在 1)的基础上使该字符串变成数组['Hello','Word']
   3. 再将 2)中的数组转成字符串'Hello_Word'

```
let str = 'hello-word'
// 1) 将str字符串中的h和w替换成对应的大写字母
str = str.replace('h', 'H');
str = str.replace('w', 'W');
console.log(str);
// 2) 在 1) 的基础上使该字符串变成数组['Hello', 'Word']
var arr = str.split('-')
console.log(arr);
// 3) 再将 2) 中的数组转成字符串'Hello_Word'
var strNew = arr.join('_')
console.log(strNew);
```