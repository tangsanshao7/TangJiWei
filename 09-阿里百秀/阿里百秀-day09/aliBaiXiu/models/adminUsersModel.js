// 引入数据库连接池
const pool = require('../config/dbconfig');
// 代表创建(Create)、更新(Update)、读取(find)和删除(Delete) 


//#region 1.查询用户信息
module.exports.findUsers = (callback) => {
  let sql = 'SELECT id,avatar,email,slug,nickname,status FROM users;'

  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

