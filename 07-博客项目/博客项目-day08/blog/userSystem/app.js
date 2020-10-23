// 1.导入包
// 1.1 导入express框架
const express = require('express');
// 1.2 导入path模块
const path = require('path');
// 1.3 导入路由模块
const router = require('./routes/indexRouter')

const session = require('express-session');
// 2.设置包
// 2.1 使用express方法创建Web服务
const app = express();

// 2.5 用的模板引擎是art-template
app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// 2.2 设置静态资源目录
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }))
app.use(session({
  // keyboard cat就是一个普通字符串
  // 密钥 secret 在这里表示的是签名(必须的)
  secret: 'keyboard cat',
  // resave: false,
  // saveUninitialized: true,
  // maxAge就是cookie在浏览器中存在的时间，单位是毫秒
  cookie: { maxAge: 60000 * 30 }

}))

// 2.4 连接数据库
require("./models/dbContent");

// 3.处理请求
// 3.1 挂载路由
app.use(router);



// 4.指定端口启动服务
app.listen(80, () => {
  console.log("服务器已启动,请打开 http://localhost");
})