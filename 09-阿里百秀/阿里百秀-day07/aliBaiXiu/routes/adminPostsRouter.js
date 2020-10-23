//文章

//引入express框架
const express = require('express');

//创建路由
const adminPostsRouter = express.Router();
//引入控制器方法


//创建具体路由
adminPostsRouter.get('/posts',(req,res) => {
    res.render('./admin/posts' , { title : '后台管理系统-文章' });
});

adminPostsRouter.get('/posts/add',(req,res) => {
    res.render('./admin/post-add' , {title : '后台管理系统-文章添加'} );
})


//导出路由
module.exports = adminPostsRouter;