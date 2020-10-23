// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminIndexRouter = express.Router();
// 3.引入控制器方法

// 4.创建具体路由
adminIndexRouter.get('/', (req, res) => {
  res.render('./admin/index', { title: "后台管理系统-首页" });
})
// 5.导出路由
module.exports = adminIndexRouter;