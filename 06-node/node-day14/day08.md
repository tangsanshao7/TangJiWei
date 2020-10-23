## 简答题

1. 创建数据库 fullstack2019

```js
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/fullstack2019", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("数据创建成功");
  })
  .catch((err) => console.log(err, "数据创建失败"));
```

============================Student 集合==================

2. 创建集合 Student,集合的规则要求如下:
   > 姓名:字符出类型，长度最少 2 个字符，最大 6 个字符，必传
   > 年龄:数字类型，最大年龄不能超过 25 岁，必传，提示年龄不能大于 25 岁
   > 性别: 字符串类型，只能是男或者是女，枚举，必传，
   > 业务爱好:draw,computer,sing,football,running

```js
let studentSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: (v) => {
        return v && v.length >= 2 && v.length <= 6;
      },
      message: "您的名字不符合姓名规则",
    },
  },
  age: {
    type: Number,
    max: [25, "年龄不能大于25岁"],
  },
  gender: {
    type: String,
    required: [true, "请输入性别"],
    enum: {
      values: ["男", "女"],
      message: "您输入的性别不在范围内",
    },
  },
  hobbies: {
    type: [String],
    enum: {
      values: ["draw", "computer", "sing", "football", "running"],
      message: "您输入的爱好不在范围内",
    },
  },
});
let Student = new mongoose.model("Student", studentSchema);
```

=============================增加操作=============================

3. 在 Student 的集合中插入文档
   > 姓名:杨文林,年龄:19,性别:男,业务爱好：["draw","computer"]
   > 姓名:贾拉拉,年龄:18,性别:女,业务爱好：["sing","draw","football"]
   > 姓名:姚姚,年龄:24,性别:女,业务爱好：["football","computer","running"]
   > 姓名:王凯,年龄:25,性别:男,业务爱好：["sing","computer"]

```js
Student.create(
  {
    name: "杨文林",
    age: 19,
    sex: "男",
    hobbies: ["draw", "computer"],
  },
  {
    name: "贾拉拉",
    age: 18,
    sex: "女",
    hobbies: ["sing", "draw", "football"],
  },
  {
    name: "姚姚",
    age: 24,
    sex: "女",
    hobbies: ["football", "computer", "running"],
  },
  {
    name: "王凯",
    age: 25,
    sex: "男",
    hobbies: ["sing", "computer"],
  }
);
```

=============================Score 集合==============================

4. 创建集合 Score,集合的规则要求如下
   > 姓名:字符出类型，长度最少 2 个字符，最大 6 个字符，必传
   > 数学成绩: 数字类型,不能低于 0，不能多于 100，必传,添加提示信息
   > 英语成绩: 数字类型,不能低于 0，不能多于 100，必传,添加提示信息
   > 语文成绩: 数字类型,不能低于 0，不能多于 100，必传,添加提示信息

```js
let ScoreSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: (v) => {
        return v && v.length >= 6 && v.length <= 2;
      },
      message: "您的名字不符合",
    },
    required: [true, "请输入名字"],
  },
  math: {
    type: Number,
    validate: {
      validator: (v) => {
        return v && v <= 0 && v >= 100;
      },
      message: "您的数学不符合",
    },
    required: [true, "请输入数学成绩"],
  },
  english: {
    type: Number,
    validate: {
      validator: (v) => {
        return v && v <= 0 && v >= 100;
      },
      message: "您传入的英语成绩不合格",
    },
    required: [true, "请输入英语成绩"],
  },
  chinese: {
    type: Number,
    validate: {
      validator: (v) => {
        return v && v <= 0 && v >= 100;
      },
      message: "您传入的语文成绩不合格",
    },
    required: [true, "请输入语文成绩"],
  },
});
let Score = new mongoose.model("Score", ScoreSchema);
```

=============================增加操作===============================

5. 在 Score 的集合中插入文档

   > 姓名:杨文林,英语成绩：88，数学成绩：99，语文成绩：80，
   > 姓名:贾拉拉,英语成绩：79，数学成绩：88，语文成绩：90，
   > 姓名:姚姚,英语成绩：90，数学成绩：90，语文成绩：90，
   > 姓名:王凯,英语成绩：98，数学成绩：90，语文成绩：99

```js
Score.create(
  {
    name: "杨文林",
    math: 99,
    english: 88,
    chinese: 80,
  },
  {
    name: "贾拉拉",
    math: 88,
    english: 79,
    chinese: 90,
  },
  {
    name: "姚姚",
    math: 90,
    english: 90,
    chinese: 90,
  },
  {
    name: "王凯",
    math: 90,
    english: 98,
    chinese: 99,
  }
)
  .then((data) => console.log(data))
  .catch((err) => {
    for (var key in err.errors) {
      console.log(err.errors[key].properties.message);
    }
  });
```

6. 查询所有学生的信息

```js
Score.find()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

7. 查询年龄大于 18 岁小于 24 岁的学生的信息

```js
Score.find({
  age: {
    $gt: 18,
    $lt: 24,
  },
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

8. 查询年龄 19 岁并且喜欢计算机的男生的信息

```js
Score.find({
  age: {
    $in: 19,
  },
  hobbies: {
    $in: "computer",
  },
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

9. 查询班级中年龄最大的学生的信息

```js
Score.find()
  .sort("-age")
  .skip(0)
  .limit(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

10. 查询年龄是 18 岁的学生的姓名

```js
Score.find({
  age: 18,
})
  .select("name -_id")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

11. 查询总人数(提示 count)

```js
Score.find()
  .count()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

12. 查询显示第二页的数据，每页显示 2 条

```js
Score.find()
  .skip(2)
  .limit(2)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

13. 查询业余爱好里面包含 sing 的学生的信息

```js
Score.find({
  hobbies: {
    $in: "sing",
  },
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

14. 对数学成绩降序输出

```js
Score.find()
  .sort("-math")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

15. 查询姓名是王凯的各科成绩

```js
Score.find({ name: "王凯" })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

===============================更新操作===============================

16. 将姓名是姚姚的学生的年龄更改为 23

```js
Score.updateMany(
  {
    name: "姚姚",
  },
  {
    age: 23,
  }
)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

17. 将所有学生的年龄更改为 18

```js
Score.updateMany(
  {},
  {
    age: 18,
  }
)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

18. 将王凯的数学成绩更新为 100 分

```js
Score.updateMany(
  {
    name: "王凯",
  },
  {
    math: 100,
  }
)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

==================================删除操作=============================

19. 删除年龄小于 20 的学生的信息

```js
Score.deleteMany({
  age: {
    $lt: 20,
  },
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

20. 删除姓名是贾拉拉的这条数据

```js
Score.findOneAndDelete({
  name: "贾拉拉",
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```
