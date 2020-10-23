const mongoose = require('mongoose');

// 数据库连接
// mongoose.connect('mongodb://localhost:27017/db_blog', {
//   useNewUrlParser: true, useUnifiedTopology: true
// }).then(() => {
//   console.log("数据库连接成功");
// }).catch((err) => {
//   console.log(err);
// })


let Article = new mongoose.model("Article", new mongoose.Schema({
  // 标题
  title: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 1
  },
  // 作者
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // 发布时间
  publishDate: {
    type: Date,
    default: Date.now
    // default: moment(Date.now).format("YYYY-MM-DD");
  },
  // 封面图片
  cover: {
    type: String,
    default: null
  },
  // 内容
  content: {
    type: String,
    required: true
  }
}));


module.exports = Article;