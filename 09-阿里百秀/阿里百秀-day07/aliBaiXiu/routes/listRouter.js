//列表

//引入express框架
const express = require('express');

//创建路由
const listRouter = express.Router();

//创建具体路由
listRouter.get('/list',(req,res) => {
    res.render('list');
});

//导出路由
module.exports = listRouter;