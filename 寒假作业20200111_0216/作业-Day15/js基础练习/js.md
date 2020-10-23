## js 简答题

1. arguments 对象和数组的相同点和不同点有哪些？
   答: 相同点： 都可用下标访问每个元素 都有 length 属性

不同点： 数组对象的类型是 Array，类数组对象的类型是 Object； 类数组对象不能直接调用数组 API； 数组遍历可以用 for in 和 for 循环，类数组只能用 for 循环遍历；

2. rest 参数作为函数的形参只能是最后一个参数，谈谈你的理解
   答: 因为 rest 参数搭配的变量是一个数组 该变量会将多余的参数放入数组中 所以 rest 参数只能是最后一个

3. 什么是函数表达式？
   答: 函数表达式将函数定义为表达式语句的一部分 通过函数表达式定义的函数可以是命名的 也可以是匿名的

4. 谈谈你对自调用函数的理解，格式是什么？
   答:

自调用函数为函数定义完后会立即运行的函数

格式: (function 函数名(){})()

## js 编程题

1. 写一个函数，求出`3`在数组 var arr = {3,4,3,5,7,9};中出现的次数

```js
// 答:
var arr = [3, 4, 3, 5, 7, 9];

function getCount(num, arr) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      count++;
    }
  }

  return count;
}

console.log(getCount(3, arr));
```

2. 写一个函数，判断一个数是否是素数，并返回结果 true 或 false(又叫质数，只能被 1 和自身整数的数)

```js
// 答:
var num = 3;

function Snum(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(Snum(num));
```

3. 写一个函数，求任意一个数的阶乘

```js
// 答:
var num = Number(prompt("请输入一个数"));

function factorial(num) {
  var sum = 1;

  for (var i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

alert("阶乘为: " + factorial(num));
```

4. 写一个函数，该函数用于计算一个正数的因子和（比如 6 的因子和是 1+2+3+6=12）

```js
// 答:
function getSum(num) {
  var sum = 0;

  for (var i = 0; i <= num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(getSum(6));
```
