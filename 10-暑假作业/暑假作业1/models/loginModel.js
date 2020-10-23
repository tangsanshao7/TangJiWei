    //连接数据库连接池
    const pool = require('../config/dbConfig');

    //导出方法
    //通过用户名 查询user对象
    module.exports.findUser = (username , callback) => {
        //书写sql语句
        pool.query(
            `SELECT * FROM users WHERE username = '${username}'`
        , function(error,results){
            if(error) throw error;

            callback(results);
        })
    }