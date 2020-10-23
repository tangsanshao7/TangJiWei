//引入数据库连接池
const pool = require('../config/dbconfig');

//查询各数据的数量
module.exports.findCount = (callback) => {
    //在数据库连接池中设置多条sql查询语句  multopleStatements : true
    pool.query(`
    SELECT COUNT(*) pcount FROM posts;  -- pcount为文章总数
    SELECT COUNT(*) dcount FROM posts WHERE STATUS = 'drafted';  -- dcount为草稿数
    SELECT COUNT(*) cacount FROM categories; -- cacount为分类数
    SELECT COUNT(*) cocount FROM comments; -- cocount为评论数
    SELECT COUNT(*) hcount FROM comments WHERE STATUS = 'held'; -- hcount为待审核评论数
    ` 
     , function(error,results){
        if(error) throw error;
        callback(results);
    });
}