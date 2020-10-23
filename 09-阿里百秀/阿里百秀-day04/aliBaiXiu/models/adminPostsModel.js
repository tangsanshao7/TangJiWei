// 引入数据库连接池
const pool = require('../config/dbconfig');

//#region  分页查询所有文章
module.exports.findByPaging = (pagenum, pagesize, callback) => {
  // SELECT * FROM posts LIMIT 0,5
  // 普通写法
  // pool.query(`SELECT * FROM posts LIMIT ${pagenum},${pagesize}`, function (error, results) {
  //   if (error) throw error;
  //   callback(results);
  // });

  // 占位符写法
  pool.query(`SELECT p.*,u.nickname,c.name FROM posts p
  INNER JOIN users u
  ON p.user_id = u.id
  INNER JOIN categories c
  ON p.category_id = c.id LIMIT ?,?; SELECT COUNT(*) AS total FROM posts;`, [pagenum, pagesize], function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion