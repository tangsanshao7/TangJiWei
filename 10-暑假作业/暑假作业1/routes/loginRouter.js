//引入express框架
const express = require('express');

//创建路由
const loginRouter = express.Router();

//引入控制器方法
const { loginPage , loginUser } = require('../controllers/loginCtrl');

//创建具体路由
loginRouter.get('/login', loginPage);

loginRouter.delete('/login', loginPage);

loginRouter.put('/login', loginPage);

loginRouter.post('/login' , loginUser);



//导出路由
module.exports = loginRouter;