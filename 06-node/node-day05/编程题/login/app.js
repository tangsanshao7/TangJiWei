
// 引入框架模块
const express = require('express')
const fs = require('fs')
// 使用框架模块创建服务
const app = express()

// 使用express中间件
app.use(express.urlencoded())
// 使用fs获取data.json文件
var result = JSON.parse(fs.readFileSync('./data.json'));
//使用post方法  body来获取用户输入的内容
app.use('/login', (req, res) => {
  // 使用body获取用户输入内容
  console.log(req.body.username);
  // 用body获取数据对比 data.json中的数据
  let dataObj = '';
  // 获取data.json
  fs.readFile(__dirname + "/data.json", "utf8", (err, data) => {
    // 将数值给dataobj
    dataObj += data;
  })
  if (req.body.username == dataObj.username && req.body.password == dataObj.password) {
    res.send('登录成功')
  }
  else {
    res.send('用户名或密码错误，请重新登录！')
  }
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
});