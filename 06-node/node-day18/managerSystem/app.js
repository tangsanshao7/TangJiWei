//引入express模块
const express = require('express');
//引入静态目录
const path = require('path');
const setmanager = require('./route/setmanager');
const getlist = require('./route/getlist');
const editmanager = require('./route/editmanager');


//创建服务
const app = express();

//引入静态目录
app.use(express.static(path.join(__dirname,'public')));

//设置中间价
app.use(express.urlencoded({ extended : false }))

//接收请求
app.use('/setmanager',setmanager);
app.use('/getlist',getlist);
app.use('/editmanager',editmanager);


//监听3000端口  开启服务
app.listen(3000, () => {
  console.log("服务已经启动，请打开: http://localhost:3000");
}) 