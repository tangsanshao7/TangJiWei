// 

// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminPostsRouter = express.Router();
// 3.引入控制器方法
const { postsPage, postsAddPage } = require('../controllers/adminPostsCtrl');
// 4.创建具体路由
// 4.1 显示文章管理页面
adminPostsRouter.get('/posts', postsPage)
// 4.2 显示文章添加页面
adminPostsRouter.get('/posts/add', postsAddPage)
// 5.导出路由
module.exports = adminPostsRouter;