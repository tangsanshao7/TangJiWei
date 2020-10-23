const mongoose = require('mongoose');

// 创建评论集合
// 应用集合
const Comment = new mongoose.model('Comment', new mongoose.Schema({
  // 用户ID --> uid
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  // 文章ID --> articleId
  aid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
    required: true
  },
  // 时间
  time: {
    type: Date,
    required: true
  },
  // 内容
  content: {
    type: String,
    required: true
  }
}))
// 导出
module.exports = Comment;