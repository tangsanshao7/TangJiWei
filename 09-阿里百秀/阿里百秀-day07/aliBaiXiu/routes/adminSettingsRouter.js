//设置

//引入express框架
const express = require('express');

//创建路由
const adminSettingsRouter = express.Router();
//引入控制器方法


//创建指定路由
adminSettingsRouter.get('/settings', (req,res) => {
    res.render('./admin/settings' , { title : '后台管理系统-设置' });
});

//导出路由
module.exports = adminSettingsRouter;
