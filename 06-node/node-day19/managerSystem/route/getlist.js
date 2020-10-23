//引入express框架
const express = require('express');
const database = require('../data/database');

const list = express.Router();


//接收get请求
//获取所有
list.get('/list', (req, res) => {
    //后台获取数据库的数据
    database.getAll(function (result) {
        res.status(200).send({
            code: 200,
            msg: '数据获取成功',
            data: result
        })
    })
})

//分页查询
list.get('/getPage', (req, res) => {
    //获取到前端传递的  页数  和  每页显示的条数
    database.page(parseInt(req.query.pageNum), parseInt(req.query.pageSize), function (data) {
        //判断是否获取到数据
        if (data) {
            //将请求响应回去
            res.status(200).send({
                code: 200,
                msg: '数据获取成功',
                data: data
            })
        }
    });
});


//删除
list.post('/delete', (req, res) => {
    // console.log(req.body.id);
    //删除数据库中相同id的数据
    let finalData = database.del(req.body.id);

    //判断是否为ok
    if (finalData == 'ok') {
        res.status(200).send({
            code: 200,
            msg: '数据删除成功',
            data: null
        })
    }
})



module.exports = list;