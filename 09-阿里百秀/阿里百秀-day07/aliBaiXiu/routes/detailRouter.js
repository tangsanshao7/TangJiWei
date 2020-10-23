//详情

//引入express框架
const express = require('express');

//创建路由
const detailRouter = express.Router();

//引入具体路由
detailRouter.get('/detail',(req,res) => {
    res.render('detail');
});


//导出路由
module.exports = detailRouter;