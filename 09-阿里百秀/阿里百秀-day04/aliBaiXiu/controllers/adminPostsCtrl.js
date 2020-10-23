
// 引入模型
const { findByPaging } = require('../models/adminPostsModel');
// 引入日期格式化包
// const moment = require('moment');
//#region 显示文章管理页面
module.exports.postsPage = (req, res) => {
  let pagesize = 5;
  let pagenum = 1;
  findByPaging(0, 5, function (results) {
    console.log(results);
    // 格式化日期
    // for (let i = 0; i < results[0].length; i++) {
    //   results[0][i].created = moment(results[0][i].created).format("YYYY-MM-DD");
    // }
    // console.log(results[0]); // 二维数组
    res.render('./admin/posts', {
      title: "后台管理系统-文章",
      data: results[0],
      total: results[1][0].total,
      // 第几页
      pagenum: pagenum,
      // 每页多少条数据
      pagesize: pagesize,
      // 总共有几页
      totalpage: Math.ceil(results[1][0].total / pagesize)
    });
  })
}
//#endregion

//#region 显示文章添加页面
module.exports.postsAddPage = (req, res) => {
  res.render('./admin/post-add', { title: "后台管理系统-文章添加" });
}
//#endregion