## js 解答题

1. 如何通过字面量方式创建对象，对象都是有什么组成的？
   var 对象名 = {属性:属性值,属性:属性值、、}
   对象都是由键值对组成的

2. 如何使用 new 关键字创建对象?
   var 变量名 = new Object({属性:属性值,属性:属性值、、})

3. 说明对象的基本操作（读取，修改，添加，删除）
   `对象的基本操作`
   读取: console.log(对象名.属性)
   修改: 对象名.属性 = 属性值
   添加: 对象名.被添加的属性 = 属性值
   删除: delete 对象名.属性

4. 创建对象有几种方式，分别是什么？写语法
   1.'字面量'(详见上方); 2.'系统构造函数'(使用 new 关键字，详见上方);
   3.'工厂函数创建'
   var 函数名 = function (形参 1, 形参 2...) {
   var 对象名 = new Object();
   对象名.键 1 = 形参 1;
   对象名.键 2 = 形参 2;
   ...
   return 对象名
   };
   4.'自定义构造函数创建'
   var 函数名 = function (形参 1, 形参 2...) {
   this.键 1 = 形参 1;
   this.键 2 = 形参 2;
   ...
   return 对象名
   };
   var 对象名 = new 函数名(); // 函数名首字母大写

## js 编程题

1. 字面量创建一个对象：【姓名:可乐 年龄:18 性别:你猜 爱好:Rush B】

   ```js
   var obj = {
     name: "可乐",
     age: 18,
     sex: "你猜",
     hobby: "Rush B"
   };
   console.log(obj);
   ```

2. 使用 new 关键字创建一个对象：【姓名:雪碧 年龄:19 性别:未知 爱好:Rush A】

   ```js
   var obj = new Object({
     name: "雪碧",
     age: 19,
     sex: "未知",
     hobby: "Rush A"
   });
   console.log(obj);
   ```

3. 根据步骤操作对象

   ```js
   1) 定义一个对象：【姓名:柠檬 年龄:17】
   2) 输出该对象的姓名
   3) 修改该对象年龄为：未成年
   4) 添加对象属性：性别为女，爱好为画画，职业为学生
   5) 输出该对象
   6) 删除该对象的姓名
   7) 输出该对象

   `答案：`
   var obj = {
    name: '柠檬',
    age: 17,
   }
   console.log(obj.name);
   obj.age = '未成年';
   obj.sex = '女';
   obj.hobby = '画画';
   obj.job = '学生';
   console.log(obj);
   delete obj.name;
   console.log(obj);
   ```

4. 使用三种方式给对象 var obj = {name:"杨"}添加属性 age 为 30

   ```js
   1) obj.age = 30; 
   2) obj['age'] = 30; 
   3) var age = "age"; obj[age] = 30;
   ```
