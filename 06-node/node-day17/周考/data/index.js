const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tangjiwe_user', {

  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch((err) => {
    console.log(err, '数据库连接失败')
  })


let User = new mongoose.model('User', new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String
  },
  hobbies: {
    type: [String],
    enum: {
      values: ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头']
    }
  }
}))


module.exports = {
  // 获取分页数据
  getPage: function (pageNum, pageSize, fn) {
    User.find().skip((pageNum - 1) * pageSize).limit(pageSize)
      .then(data => {
        User.countDocuments().then(total => {
          fn({
            pageNum: pageNum,
            pageSize: pageSize,
            dataTotal: total,
            data: data
          })
        })
      })
  },
  // 添加数据
  addOne: function (newUser, fn) {
    User.create(newUser)
      .then(data => {
        fn(data)
      })
  }
}
