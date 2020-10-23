// 引入框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 创建web服务器
const app = express();
// 静态访问资源功能
app.use(express.static(path.join(__dirname, 'public')))

app.post('https://autumnfish.cn/api/user/register', (req, res) => {
  res.send()
})
// 监听
app.listen(3000);
// 输出
console.log('服务器启动成功');

