
// 引入模型
const { findByPaging } = require('../models/adminPostsModel');
// 引入日期格式化包
// const moment = require('moment');

//#region 1. 显示文章管理页面
module.exports.postsPage = (req, res) => {
  let pagenum = 1;
  let pagesize = 5;
  let offset = (pagenum - 1) * pagesize;
  let size = pagesize;
  findByPaging({
    offset,
    size,
    callback(results) {
      // console.log(Math.ceil((results[1][0].total / pagesize)))
      res.render('./admin/posts', {
        title: "后台管理系统-文章",
        // 分类数据
        category: results[0],
        // 分页数据
        pagenum: pagenum,
        pagecount: Math.ceil(parseInt(results[1][0].total) / pagesize),
        // 文章数据
        data: results[2]
      });
    }
  })

}
//#endregion

module.exports.postsByFilter = (req, res) => {
  let { pagenum, pagesize, category, status } = req.query;
  // let pagenum = 1;
  // let pagesize = 5;
  findByPaging({
    category,
    status,
    offset: (pagenum - 1) * pagesize,
    size: pagesize,
    callback(results) {
      res.send({
        code: 200,
        message: "查询数据成功",
        // 分页数据
        pagenum: pagenum,
        pagecount: Math.ceil(parseInt(results[1][0].total) / pagesize),
        // 文章数据
        data: results[2]
      });
    }
  })
}

//#region 3.显示文章添加页面
module.exports.postsAddPage = (req, res) => {
  res.render('./admin/post-add', { title: "后台管理系统-文章添加" });
}
//#endregion