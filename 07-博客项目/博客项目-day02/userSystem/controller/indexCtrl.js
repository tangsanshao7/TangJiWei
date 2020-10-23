const Article = require('../models/article');
const mongooseSexPage = require('mongoose-sex-page');
// Schema hasn't been registered for model "User". 调用User约束
require('../models/user')

module.exports.getArticle = async (req, res) => {
  // Article.find().then(data => {
  //   console.log(data);
  // })

  // page 代表第几页
  // size 代表每页显示多少条数据
  // display 代表显示的页码数量
  // exec() 向数据库发出查询请求
  // 参考答案: https://www.npmjs.com/package/mongoose-sex-page
  let result = await mongooseSexPage(Article).page(1).size(6).display().find().populate("author").exec();
  // console.log(result);
  res.send({
    code: 200,
    msg: "数据获取成功",
    data: result
  })
}