// 

// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminPostsRouter = express.Router();
// 3.引入控制器方法
const { postsPage, postsAddPage, postsByFilter } = require('../controllers/adminPostsCtrl');
// 4.创建具体路由
// 4.1 显示文章管理页面
adminPostsRouter.get('/posts', postsPage);
// 4.2 显示文章添加页面
adminPostsRouter.get('/posts/add', postsAddPage);
// 4.3 通过筛选条件查询数据
adminPostsRouter.get('/posts/findsByFilter', postsByFilter);
// 4.4 通过分页查询数据
adminPostsRouter.get('/posts/findsByPaging', postsByFilter)
// 5.导出路由
module.exports = adminPostsRouter;