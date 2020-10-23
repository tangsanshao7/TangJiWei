## js 简答题

1. 简述三种循环？
for 循环
while 循环
do while 循环

2. 试着说说你会如何合适使用三种循环？
for：知道循环几次的时候使用
while：不知道循环几次的时候使用
do while：至少循环一次的时候使用

3. 什么是死循环？列举一个死循环？
无限循环下去，不会停止的
while(1){console.log(666);}

4. while 循环和 do...while 的区别是什么？
while 是先判断表达式后，执行循环体。
do while 是先执行循环体，然后判断循环条件是否成立。

## js 编程题

1.  使用一个 for 循环按顺序打印出：`10，8，6，4，2，0，-2`

```js
for (var i = 10; i >= -2; i -= 2) {
  console.log(i);
}
```

2.  使用一个 while 循环按顺序打印出：`2，0，-2，-4，-6，-8，-10`

```js
var i = 2;

while (i >= -10) {
  console.log(i);
  i -= 2;
}
```

3.  使用一个 do...while 循环打印出：`100`

```js
do {
  console.log(100);
} while (false);
```

4.  使用一个 for 循环实现：1-100 之间所有偶数的打印
    要求：使用两种方式实现（其中一个方式必须使用 `continue` 关键字）

```js
// 方式一：

for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// 方式二：（使用 continue）
for (var i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    continue;
  }
  console.log(i);
}
```
