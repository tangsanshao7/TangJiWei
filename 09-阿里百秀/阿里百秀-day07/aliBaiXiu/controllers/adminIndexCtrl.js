//引入数据库查询
const { findCount } = require('../models/adminIndexModel');

//导出方法
module.exports.indexPage = (req,res) => {
    findCount(function (results){
        //使数据扁平化
        results = results.flat();

        //发送数据
        res.render('./admin/index',{
            title : '后台管理系统-首页',
            pcount : results[0].pcount,
            dcount: results[1].dcount,
            cacount: results[2].cacount,
            cocount: results[3].cocount,
            hcount: results[4].hcount
        });
    })
}