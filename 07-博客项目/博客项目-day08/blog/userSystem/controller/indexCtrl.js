const md5 = require('md5');
// mongoDB数据库的分页插件
const mongooseSexPage = require('mongoose-sex-page');
// 错误:  Schema hasn't been registered for model "User". 调用User约束
const User = require('../models/user')
// Article 文章集合
const Article = require('../models/article');
const Comment = require('../models/comment');
// 展示用户首页
module.exports.getIndex = (req, res) => {
  res.render('index', { aa: '你好' });
}

// 获取文章列表
module.exports.getArticle = async (req, res) => {
  // Article.find().then(data => {
  //   console.log(data);
  // })
  // console.log(req.query);
  let pageNum = parseInt(req.query.pageNum);
  let pageSize = parseInt(req.query.pageSize);
  // console.log(pageSize);
  // page 代表第几页
  // size 代表每页显示多少条数据
  // display 代表显示的页码数量 [1,2,3,4,5]
  // exec() 向数据库发出查询请求
  // 参考答案: https://www.npmjs.com/package/mongoose-sex-page
  let result = await mongooseSexPage(Article).page(pageNum).size(pageSize).display(3).find().populate("author").exec();
  // console.log(result);
  res.send({
    code: 200,
    msg: "数据获取成功",
    data: result
  })
}

// 获取文章详情和评论
module.exports.getDetail = async (req, res) => {
  // console.log(req.query)
  // await是一个异步方法 就意味着有回调（文章详情）
  let result = await Article.findOne({ _id: req.query.id }).populate("author");
  // 评论
  let commentList = await Comment.find({ aid: req.query.id }).populate('uid');
  // console.log(commentList);
  // console.log(result);
  let data = {
    id: result._id,
    title: result.title,
    author: result.author.username,
    content: result.content,
    publishDate: result.publishDate
  }
  // console.log(data);
  // console.log({ commentList, data });
  res.render('article', { commentList, data });


}

// 登录
module.exports.login = async (req, res) => {
  //  Cannot destructure property 'email' of 'req.body' as it is undefined.
  let { email, password } = req.body;

  // 做后端校验
  if (email.trim().length == 0 || password.trim().length == 0) {
    return res.status(400).send({
      code: 400,
      msg: "邮箱或密码错误"
    })
  }
  // 去数据库中查询数据
  // 通过email查询用户的所有信息
  let user = await User.findOne({ email: email })
  // 如果没有user 返回 null 如果有user 结果是对象
  if (user) {

    let isValid = ((md5(md5(md5(password)))) === user.password) && user.status;

    // console.log(isValid);
    if (isValid) {
      // email和密码完全正确res.status(200).send()
      // 用户名和密码存到session
      // req.session.username = user.username;
      // req.session.email = user.email;
      // req.session.id = user._id;
      // 如果我把userInfo存在app.locals中 那么可以直接在模板中使用
      // req.app.locals其实和app.locals的作用一样的
      req.app.locals.userInfo = user;
      res.status(200).send({
        code: 200,
        message: "登录成功"
      })
    } else {
      return res.status(400).send({ code: 400, msg: "邮箱或密码错误" })
    }
  } else {
    return res.status(400).send({ code: 400, msg: "邮箱或密码错误" })
  }
}

// 添加评论
module.exports.addComment = async (req, res) => {
  // console.log(req.query);
  // console.log(req.body);
  // console.log(new Date().toLocaleString());

  let newComment = {
    uid: req.body.uid,
    aid: req.body.aid,
    time: new Date().toLocaleString(),
    content: req.body.content
  }

  // console.log(newComment);
  let result = await Comment.create(newComment);
  // console.log(result);

  if (result) {
    res.redirect(`/article.html?id=${result.aid}`)
  }
}



