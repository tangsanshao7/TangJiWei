## js 简答题

1. 常量的命名规则和变量是否一样？常量命名中的字母一般采用什么形式的？  
   一样 常量中字母一般全部大写

2. 常量和变量的区别是什么
   常量的值不能更改 变量的值可以更改

3) 说出你目前学过的数据类型有哪些（中英文）
   数字 (number) , 字符串 (string) , 空(null) , 未定义(undefined) , 对象(object) , 布尔 (boolean)

4. 反斜杠 `\` 和反引号 ` 的作用分别是什么，有什么共同点？
   反斜杠的主要作用是转义符 反引号的作用是在操作字符串 可以让字符串换行 在字符串中增加变量

## js 编程题

1. 请将变量 a 与变量 b 的变量值互换位置

   ```js
   var a = 10,
     b = 20; // 互换使得b=10，a=20

   var c = a;
   a = b;
   b = c;
   console.log(a);
   console.log(b);
   ```

2. 根据要求完成下面填空

   ```js
    1) var yinhao = `'""`;
       console.log(yinhao); // 输出结果为【'""】
    2) var yinhao ="'"+'""';;
      console.log(yinhao); // 输出结果为【'""】
    3) var num = 99;
      console.log(`就差${100-a}分我就满分了`)； // 利用num变量完完成填空
   ```

3. 分别使用反斜杠和反引号使下面结果成功输出且三行显示

   ```js
   //使用反斜杠：
   console.log(
     "古体诗是诗歌体裁。\n 从诗句的字数看，有所谓四言诗、五言诗和七言诗等。\n 四言是四个字一句，五言是五个字一句，七言是七个字一句。"
   );
   //使用反引号：
   console.log(`古体诗是诗歌体裁。
   从诗句的字数看，有所谓四言诗、五言诗和七言诗等。
   四言是四个字一句，五言是五个字一句，七言是七个字一句。`);
   ```

4. 请利用代码证明你所说的遇到 undefined 的情况

   ```js
   // 1、变量只声明没有赋值，会返回undefined；
   var a;
   console.log(a);

   // 2、当下标超过数组或字符串的范围 ，会返回undefined；
   var arr = [1, 2, 3, 4, 5];
   console.log(arr[5]);

   // 3、当对象调用不存在的属性时，会返回undefined；
   var obj = {
     name: "zs",
     age: 18
   };
   console.log(obj.six);

   // 4、当return没有返回值，会返回undefined；
   function fun() {}
   console.log(fun());
   ```
