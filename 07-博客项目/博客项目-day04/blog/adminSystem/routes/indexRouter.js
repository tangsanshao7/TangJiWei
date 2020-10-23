// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由

const indexRouter = express.Router();

// 引入控制器代码
let { login } = require('../controller/indexCtrl');

// 3.创建路由

// 显示后台系统首页
indexRouter.get('/', (req, res) => {
  // res.send("后台管理系统首页")
  res.render('login');
})

// 后台管理系统登录
indexRouter.post('/api/login', login)

// 4.导出
module.exports = indexRouter;