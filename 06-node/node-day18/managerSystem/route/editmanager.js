//引入express框架
const express = require('express');
const database = require('../data/database');

//创建路由
const edit = express.Router();

//回显
edit.post('/show', function (req, res) {
    //获取前端传入的id
    let userid = req.body.id;
    //从数据库中查找该数据
    database.show(userid, function (manager) {
        if (manager) {
            res.status(200).send({
                code: 200,
                msg: '数据获取成功',
                data: manager
            })
        }
    });
})

//修改
edit.post('/edit',function(req,res){
    
    //将前端获取到的id 和 对象
    database.edit(req.body.id,req.body,function(data){
        if(data){
            res.status(200).send({
                code : 200,
                msg : '数据修改成功',
                data : data
            })
        }
    });
    
})


module.exports = edit;