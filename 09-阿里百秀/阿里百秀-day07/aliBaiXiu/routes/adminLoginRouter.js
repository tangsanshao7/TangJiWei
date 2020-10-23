// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminLoginRouter = express.Router();
// 3.引入控制器方法
const { loginPage , loginUser , logoutUser } = require('../controllers/adminLoginCtrl');


// 4.创建具体路由
//显示登录页面
adminLoginRouter.get('/login',loginPage);

//处理登录业务
adminLoginRouter.post('/login',loginUser);

//退出登录
adminLoginRouter.get('/logout',logoutUser);

// 5.导出路由
module.exports = adminLoginRouter;
