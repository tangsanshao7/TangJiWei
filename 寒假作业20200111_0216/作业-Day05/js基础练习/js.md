## js 解答题

1. 如何判断一个变量是否是数字（需要通过输出 true 或 false 进行判断），输出的 true 或 false 分别代表着什么含义？
   isNaN(变量) true 代表不是数字 false 代表是数字

2. 100+100 结果是 200，那么 100+‘100’结果是什么，为什么？
   "100100" 当+号两边有一个是字符串时 +号是拼接的作用

3. 请说说 `+` 号有几层含义，分别是什么？
1. 当+号两边都是数字时 是数字的+号
2. 当+号两边有一边是字符串时  起字符串的拼接作用
3. 在字符串前面有+号时  是隐式转换的作用


4. 前--和后--的区别是什么？
   后++ 是先运算在赋值
   前++ 是先赋值在运算

## js 编程题

1. 如何能够判断一个数字是小数还是整数？

   ```js
   var num = 1.34;
   var num1 = parseInt(num);
   if (num == num1) {
     console.log(`${num} 是整数`);
   } else {
     console.log(`${num} 是小数`);
   }
   ```


2. 探究题：详见下面代码

```js
 isNaN('') // false
 isNaN('1A') // true
 isNaN(true) // false
 isNaN({}) // true
 isNaN([1,1]) // true
 // 探究：根据isNaN的作用你是否能说明出现上面现象的原因
 isNaN('') // false  是一个数字   因为isNaN会起到隐式转换的作用 ''转换之后为 0
 isNaN('1A') // true  不是一个数字 因为isNaN会起到隐式转换的作用  '1A' 转换之后为 NaN
 isNaN(true) // false   是一个数字   因为isNaN会起到隐式转换的作用  true转换之后为1 
 isNaN({}) // true   不是一个数字 因为isNaN会起到隐式转换的作用 {}转换之后为NaN
 isNaN([1,1]) // true   不是一个数字 因为isNaN会起到隐式转换的作用 [1,1]转换之后为NaN

```

3. 打印下面的输出结果

   ```js
   var num1 = 12,
     num2 = "12",
     num3 = "",
     num4;
   console.log(num1 + num2);// 1212
   console.log(num1 + +num3);// 12
   console.log(num1 + +num4);// NaN
   console.log(+num2 + !!num3);// 12
   console.log(!!num2 + !!num4);// 1
   ```

4. 打印下面的输出结果

   ```js
    1) var a = 10,
         b = ++a,
         c = a--,
         d = c++ + ++b + --a;
     console.log(a, b, c, d); // 9 12 12 32

    2) var a = 100,
         b = --a,
         c = a-- + b++,
         d = a - b-- + ++c;
     console.log(a, b, c, d); // 98 99 199 197
   ```
