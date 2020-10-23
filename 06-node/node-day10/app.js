// 1.引入包
const express = require('express');
const path = require('path');
const data = require('./data');
// 2.设置包
// 2.1 使用express方法创建服务器
const app = express();
// 2.2 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))
// 3.处理请求并响应

// 3.1 获取所有数据
app.get('/api/getAll', (req, res) => {
  if (!data.get()) {
    return res.status(500).send({
      code: 500,
      msg: '服务器端错误',
      data: null
    })
  }

  return res.status(200).send({
    code: 200,
    msg: "数据获取成功",
    data: data.get()
  })

})

// 3.2 通过id查找某一条数据
app.get('/api/getDetail', (req, res) => {
  if (!req.query.id) {
    return res.status(404).send({
      code: 404,
      msg: "没有找到您找的数据",
      data: null
    })
  }
  let itemInfo = data.getById(parseInt(req.query.id));

  res.status(200).send({
    code: 200,
    msg: "数据查找成功",
    data: itemInfo
  })
})

// 4.指定端口并启动服务
app.listen(3000, () => {
  console.log("服务器已启动，请访问: http://localhost:3000");

})