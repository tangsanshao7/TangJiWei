//引入express框架
const express = require('express');
const database = require('../data/database');

//创建路由
const add = express.Router();

//添加
add.post('/add',(req,res) => {
    // console.log(req.body);
    
    //创建对象
    let manager = {
        name: req.body.name,
        password: req.body.password,
        age: req.body.age,
        email: req.body.email,
        hobbies: req.body.hobbies
    }
    //将数据添加到数据库中
    let finalData = database.add(manager);

    if (finalData == 'ok') {
        res.status(200).send({
            code: 200,
            msg: '数据添加成功',
            data: null
        })
    }
})

//导出
module.exports = add;