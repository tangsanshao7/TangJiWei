// // 1.引入框架模块
// const express = require('express');
// // 2.使用框架模块创建服务
// const app = express();
// app.get('/', (req, res) => {
//   res.send("这是首页")
// })

// app.get('/index', (req, res) => {
//   res.send("这是首页")
// })

// app.get('/list', (req, res) => {
//   res.send("这是列表页")
// })

// app.get('/article', (req, res) => {
//   res.send("这是文章")
// })

// app.get('/login', (req, res) => {
//   res.send("这是登录")
// })



// // 4.指定服务端口号 并启动服务
// app.listen(3000, () => {
//   console.log("服务启动: http://localhost:3000")
// })



// // 1.引入框架模块
// const express = require('express');
// // 2.使用框架模块创建服务
// const app = express();
// app.get('/', (req, res) => {
//   res.send("这是首页")
// })

// app.get('/index', (req, res) => {
//   res.send("这是首页")
// })

// app.get('/list', (req, res) => {
//   res.send("这是列表页")
// })

// app.get('/article', (req, res) => {
//   res.send("这是文章")
// })

// app.get('/login', (req, res) => {
//   res.send("这是登录")
// })



// // 4.指定服务端口号 并启动服务
// app.listen(3000, () => {
//   console.log("服务启动: http://localhost:3000")
// })



// 1.引入框架模块
const express = require('express');
// 2.使用框架模块创建服务
const app = express();
app.get('/', (req, res) => {
  res.send("这是首页")
})

app.get('/index', (req, res) => {
  res.send("这是首页")
})

app.get('/list', (req, res) => {
  res.send("这是列表页")
})

app.get('/article', (req, res) => {
  res.send("这是文章")
})

app.get('/login', (req, res) => {
  res.send("这是登录")
})



// 4.指定服务端口号 并启动服务
app.listen(3000, () => {
  console.log("服务启动: http://localhost:3000")
})
