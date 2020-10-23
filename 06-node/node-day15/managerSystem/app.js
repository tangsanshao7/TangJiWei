// 导入包
const express = require('express');
const path = require('path');
const data = require('./data');
// 包设置
const app = express();
// 开发静态资源
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
// 查找数据
/**
 * /api/list  路由
 * req 代表请求
 * res 代表响应 
 */
app.get('/api/list', (req, res) => {
  // console.log(111);
  // console.log(data);
  data.findAll(function (data) {
    res.status(200).send({
      code: 200,
      msg: "数据查询成功",
      data: data
    })
  })
})
// 添加数据
app.post('/api/add', (req, res) => {
  // req.file 是 `avatar` 文件的信息
  console.log(req.body)
  let newUser = {
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
    email: req.body.email,
    hobbies: req.body.hobbies,
  }
  data.addOne(newUser, function () {
    // console.log(data);
    if (data) {
      res.send({
        code: 200,
        message: "用户添加成功",
        data: data
      })

    }
  })
})
// 服务器启动
app.listen(3000, () => {
  console.log('请打开 http://localhost:3000')
})