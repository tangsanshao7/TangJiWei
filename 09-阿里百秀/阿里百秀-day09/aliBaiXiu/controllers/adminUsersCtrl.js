const { findUsers } = require('../models/adminUsersModel')

//#region 显示用户管理页面
module.exports.usersPage = (req, res) => {
  res.render('./admin/users', { title: "后台管理系统-用户" });
}
//#endregion

//#region 查询用户信息
module.exports.usersFind = (req, res) => {
  findUsers(function (results) {
    console.log(results);
    // res.send('ok');
    res.send({
      code: 200,
      message: "用户信息获取成功",
      data: results
    })
  })

}
//#endregion

//#region 显示用户编辑页面
module.exports.usersEdit = (req, res) => {
  res.render('./admin/profile', { title: "后台管理系统-编辑用户" });
}
//#endregion