## 简答题

1. 创建数据库 quanzhan12

```js
// 引入mongoose这个包
const mongoose = require("mongoose");
// 使用mongoose的包的connect方法连接数据库
mongoose
  .connect("mongodb://localhost/quanzhan12", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("数据添加成功");
  })
  .catch((err) => {
    console.log(err, "数据连接失败");
  });
```

============================================class 集合==============================

2. 创建集合 class,集合的规则要求如下
   > 姓名:字符串类型
   > 年龄:数字类型
   > 性别: 数字类型
   > 业务爱好:数组类型

```js
// 创建集合规则
let classSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: Number,
  hobbies: Array,
});

// 应用规则
let Class = new mongoose.model("Class", classSchema);
```

============================================增加操作===============================

3. 在 class 的集合中插入文档
   > 姓名:zhangsan,年龄:22,性别:0,业务爱好：["draw","computer"]
   > 姓名:jialala,年龄:18,性别:1,业务爱好：["sing","draw","football"]
   > 姓名:yaoyao,年龄:24,性别:1,业务爱好：["football","computer","running"]
   > 姓名:yangwenlin,年龄:19,性别:0,业务爱好：["sing","computer"]

```js
Class.create({
  name: "zhangsan",
  age: 22,
  sex: 0,
  hobbies: ["draw", "computer"],
});
Class.create({
  name: "jialala",
  age: 18,
  sex: 1,
  hobbies: ["sing", "draw", "football"],
});
Class.create({
  name: "yaoyao",
  age: 24,
  sex: 1,
  hobbies: ["football", "computer", "running"],
});
Class.create({
  name: "yangwenlin",
  age: 19,
  sex: 0,
  hobbies: ["sing", "computer"],
})
  .then(() => {
    console.log("数据添加成功");
  })
  .catch((err) => {
    console.log(err);
  });
```

============================================查询操作===============================

4. 查询所有人的信息

```js
Class.find()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

============================================score 集合==============================

5. 创建集合 score,集合的规则要求如下
   > 姓名:字符串类型
   > 数学成绩: 数字类型
   > 英语成绩: 数字类型
   > 语文成绩: 数字类型

```js
// 创建集合规则
let scoreSchema = new mongoose.Schema({
  name: String,
  math: Number,
  eng: Number,
  china: Number,
});
```

============================================增加操作===============================

6. 在 class 的集合中插入文档
   > 姓名:zhangsan,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
   > 姓名:jialala,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
   > 姓名:yaoyao,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
   > 姓名:yangwenlin,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，

```js
Score.create(
  {
    name: "zhangsan",
    math: 80,
    eng: 88,
    china: 76,
  },
  {
    name: "jialala",
    math: 75,
    eng: 86,
    china: 80,
  },
  {
    name: "yaoyao",
    math: 76,
    eng: 84,
    china: 78,
  },
  {
    name: "yangwenlin",
    math: 85,
    eng: 90,
    china: 80,
  }
);
```

============================================查询操作===============================

7. 查询所有成绩

```js
Score.find()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

============================================老师集合==============================

8. 创建集合 teacher,集合的规则要求如下
   > 姓名:字符串类型
   > 性别: 数字类型
   > 年龄: 数字类型
   > 新资: 数字类型

```js
// 创建集合规则
let teacherSchema = new mongoose.Schema({
  name: String,
  sex: Number,
  age: Number,
  xin: Number,
});
// 应用规则

let Teacher = new mongoose.model("Teacher", teacherSchema);
```

============================================增加操作===============================

9. 在 class 的集合中插入文档
   这个你自己定义，插入 3 条文档就可以

```js
Teacher.create(
  {
    name: "zhangsan",
    sex: 0,
    age: 18,
    xin: 3200,
  },
  {
    name: "jack",
    sex: 0,
    age: 18,
    xin: 3200,
  },
  {
    name: "rose",
    sex: 0,
    age: 18,
    xin: 3200,
  }
);
```

============================================查询操作===============================

10. 查询所有老师的信息

```js
Teacher.find()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```
