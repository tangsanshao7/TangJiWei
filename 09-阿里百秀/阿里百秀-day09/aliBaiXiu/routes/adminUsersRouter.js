// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminUsersRouter = express.Router();
// 3.引入控制器方法
const { usersPage, usersFind, usersEdit } = require("../controllers/adminUsersCtrl");
// 4.创建具体路由
// 4.1 显示用户管理页面
adminUsersRouter.get('/users', usersPage)
// 4.2 查询用户信息
adminUsersRouter.get('/users/find', usersFind)

// 4.3 显示用户编辑页面
adminUsersRouter.get('/users/edit', usersEdit)

// 5.导出路由
module.exports = adminUsersRouter;