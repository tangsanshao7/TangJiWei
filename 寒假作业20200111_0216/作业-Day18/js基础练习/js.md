## js 解答题

1.  系统构造函数创建对象的格式
    语法格式：
    var  变量名  = new Object();
    变量名.键=值；
    变量名.键=值；

2.  工厂函数创建对象的格式
    function 函数名 (形参,形参,形参,形参){
    var 对象名= {};

    对象名.属性名=形参;
    对象名.属性名=形参;
    对象名.属性名=形参;
    return 函数名;
    }
    传值
    var 变量名 = 函数名(实参,实参,实参,实参)

3)  自定义构造函数创建对象的格式

var 函数名 = function (形参, ...) {
this.键 = 值;
this.键 = 值;
}

4.  构造函数创建对象有什么好处？
    构造函数的首字母必须大写，用来区分于普通函数
    内部使用的 this 对象，来指向即将要生成的实例对象
    使用 New 来生成实例对象

## js 编程题

1. 定义一个人的对象, 属性有姓名，年龄，性别，身高，方法有：能吃饭，能跑步，

- 要求分别使用 `4` 种方式创建下面要求的对象
- 遍历对象，将对象的属性和值输出来，并且调用其中的一个方法，将结果在控制台输出
- 将对象得 `年龄` 这个属性删除
- 将对象的 `身高` 的值题换成"180cm"
- 给对象添加属性 `学号` ，通过两种方式

```js
```

2. 编写一个程序，让用户输入一个 5 位数，判断该 五位数是否为 `回文数`。（判断第一位和第五位是否一样，第二位和第四位是否一样）如果用户输入的不是 5 位数提示错误并继续输入直到用户输入一个 5 位数

   ```js
   do {
     var num = +prompt("请输入一个 5 位数");
     if (num > 9999 && num < 99999) {
       var ge = num % 10;
       var shi = parseInt((num / 10) % 10);
       var bai = parseInt((num / 100) % 10);
       var qian = parseInt((num / 1000) % 10);
       var wan = parseInt(num / 10000);
       if (ge == wan && shi == qian) {
         alert(num + "是为回文数");
       } else {
         alert(num + "不是回文数");
       }
       break;
     } else {
       alert("输入错误,请重新输入");
     }
   } while (true);
   ```

3. 求 10! 的结果（提示：10! = 1x2x3x4x5x6x7x8x9x10）

   ```js
   var sum = 1;
   for (var i = 1; i <= 10; i++) {
     sum *= i;
   }
   console.log(sum);
   ```

4) 操作数组 var arr = [2,3,4,5,6]

```js
1) 将1放到数组中2的前面
arr.unshift(1);

2) 删除数组中的6
arr.pop();

3) 将数组的所有剩余元素求和
arr.pop();
var sun = 0;
var num = 0;
for (var i = 0; i < arr.length; i++) {
sun += arr[i];
}
console.log(sun);
4) 在 3) 的基础上通过length求出数组元素和的平均值
num = sun / arr.length;
console.log(num);
5) 用方法判断数组中是否有6这个元素，有返回索引，无则返回false
 if(arr.indexOf(6)){
console.log(arr.indexOf(6));
}{
console.log(false);
}
```
