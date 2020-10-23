// 引入express框架
const express = require('express');
//导入path模块
const path = require('path');
//导出express-session
const session = require('express-session');
//引入路由
const index = require('./routes/indexRouter');
const detail = require('./routes/detailRouter');
const list = require('./routes/listRouter');
const adminLogin = require('./routes/adminLoginRouter');
const adminIndex = require('./routes/adminIndexRouter');
const adminPosts = require('./routes/adminPostsRouter');
const adminComments = require('./routes/adminCommentsRouter');
const adminUsers = require('./routes/adminUsersRouter');
const adminSettings = require('./routes/adminSettingsRouter');




//创建服务
const app = express();

//设置中间键
app.use(express.urlencoded({ extend : false }));

//设置静态资源
app.use(express.static(path.join(__dirname,'public')));

//配置session
app.use(session({
    secret : 'keyboard cat',
    resave : false,
    saveUninitialized : true,
    cookie : {
        maxAge : 60000 * 10
    }
}));

//设置模板文件目录
app.set('views',path.join(__dirname,'views'));

//设置模板引擎 ejs
app.set('view engine','ejs');

//登录拦截
app.use(function(req,res,next){
    //获取url
    let url = req.originalUrl;
    //判断 是否为登录页 或 是否存在session 
    if(url != '/admin/login' && !req.session.user){
        return res.redirect('/admin/login');
    }
    next();
})


//设置
//挂载路由

//挂载首页路由
app.use(index);
//挂载详情路由
app.use(detail);
//挂载列表路由
app.use(list);

// 挂载登录路由
app.use('/admin', adminLogin);
// 挂载首页路由
app.use('/admin', adminIndex);
// 挂载文章路由
app.use('/admin', adminPosts);
// 挂载评论路由
app.use('/admin', adminComments);
// 挂载用户路由
app.use('/admin', adminUsers);
// 挂载设置路由
app.use('/admin', adminSettings);


//监听指定端口 开启服务
app.listen(3000,() => {
    console.log('请打开 http://localhost:3000');
})