## js 解答题

1. 算数运算符都有哪些？

- - - / += -= \*= /=

2. NaN 和任何值比较的结果都是什么？包括和自身比较吗？
   NaN 不等于任何数，包括本身

3. == 和 === 的区别在哪？
   ==是值相等就可以 不需要比较类型

===值相等还要数据类型一样

4. 逻辑运算符有哪些, 逻辑运算的规则有哪些
   ！取反

&&并且的意思两边都要正确才正确

||或者的意思两边一个正确就可以

## js 编程题

1. `typeof` 无法显示出的数据类型名称有什么？为什么？
   ```js
   数组，因为数组属于对象
   null是一个只有一个值的特殊类型。表示一个空对象引用。用typeof检测返回是object
   ```
2. 判断下面结果的布尔值

   ```js
    333 == '333' true
   666 == [666]  true
   '999' == [999] true
   NaN == NaN  false
   NaN === NaN  false
   undefined == null true
   undefined === null  false
   [] == []  false
   [] === [] false
   [] == 0  true
   ![] == 0  true
   [] == ![]  true
   ```

3. 打印输出下面的结果

   ```js
    1) true && !true  false
    2)  false || !false true
    3)  false || !true && !false false
    4)  true && !false || false true
    5)  undefined && true undefined
    6)  2+2 > 5 || 3-3 <=0 && !undefined true

   ```


4. 打印输出下面的结果

```js
var a = 10;
var b = a++;
console.log(b>=a);false //a为11 b为10
var c = b + 'a';
console.log(c);  10a
console.log(c == ('a' + b))  10a！=a10
```
