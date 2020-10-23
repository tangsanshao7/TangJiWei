## js 简答题

1. 说一说你知道的 Math 对象（至少 5 个，不包括随机数）

```js
   1.Math.max() 取最大值
   2.Math.min() 取最小值
   3.Math.PI() 圆周率
   4.Math.ceil() 向上取整
   5.Math.sqrt() 求平方根
```

2. 随机数的默认输出范围是多少？

```js
   [ 0 ~ 1 )
```

3. 根据所学，写两个公式分别表示【两个数之间的随机数，不含最大值】【两个数之间的随机数，含最大值】

```js
   // 【两个数之间的随机数，不含最大值】
   var num = Math.random() \* 4 + 1; // [1,5)
   console.log(num);

// 【两个数之间的随机数，含最大值】
var num = Math.ceil(Math.random() \* 4 + 1); // [1,5]
console.log(num);
```

4. 根据所学，写两个不同的公式都表示【两个数之间的随机整数，包括最大值】

```js
   // 一【两个数之间的随机整数，包括最大值】
   var num = Math.ceil(Math.random() \* 4 + 1); // [1,5]
   console.log(num);

// 二【两个数之间的随机整数，包括最大值】
var num = parseInt(Math.random() \* 5 + 1); // [1,5]
console.log(num);
```

## js 编程题

1. 求 30 到 50 之间的随机整数 [包括 30 和 50]

```js
var num = Math.ceil(Math.random() * 20 + 29); // [30,50]
console.log(num);
```

2. 随机产生一个十六进制的颜色值 ,格式：#9ab353

```js
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
var sixteen = "#";
for (var i = 0; i < 6; i++) {
  var random = Math.ceil(Math.random() * 15);
  sixteen += arr[random];
}
console.log(sixteen);
```

3. 产生 5 个 20 到 30 之间的随机整数[包括 20 和 30]，并且通过 Math 方法，求出这 5 个数中的最大值和最小值

```js
var arr = [];
for (var i = 0; i < 5; i++) {
  var num = Math.ceil(Math.random() * 10 + 19); // [20,30]
  arr.push(num);
}
var max = arr[0];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(`${arr}中最大值是${max} 最小值是${min}`);
```

4. 判断任意三个数组成的是否是直角三角形，(组成直角三角形的条件是，最大边的平方 = 其他 2 个边的平方的和),要求使用 Math.pow()求出某个数的平方

```js
function fn(a, b, c) {
  var a2 = Math.pow(a, 2);
  var b2 = Math.pow(b, 2);
  var c2 = Math.pow(c, 2);
  if (a2 == b2 + c2) {
    return `${a},${b}和${c}可以组成直角三角形`;
  } else if (b2 == a2 + c2) {
    return `${a},${b}和${c}可以组成直角三角形`;
  } else if (c2 == a2 + b2) {
    return `${a},${b}和${c}可以组成直角三角形`;
  } else {
    return `${a},${b}和${c}不能组成直角三角形`;
  }
}
var result = fn(4, 3, 5);
console.log(result);
```
