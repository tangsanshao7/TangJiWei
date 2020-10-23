//引入数据库连接池
const pool = require('../config/dbconfig');

//导出方法
//查询登录对象
module.exports.findUser = (email,callback) => {
    //书写sql语句
    pool.query(`select * from users where email = '${email}'`,function(error,results){
        //抛出异常
        if(error) throw error;
        //回调函数 返回操作的结果
        callback(results);
    })
}

