const mongoose = require('mongoose');

// 数据库连接
mongoose.connect('  ', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log("数据库连接成功");
}).catch((err) => {
  console.log(err);
})


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
    ref: 'username',
    required: true
  },
  // 发布时间
  publishDate: {
    type: Date,
    default: Date.now
  },
  // 封面图片
  cover: {
    type: String,
    dafault: null
  },
  // 内容
  content: {
    type: String,
    required: true
  }
}));