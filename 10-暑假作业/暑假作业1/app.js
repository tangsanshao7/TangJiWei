//引入express框架
const express = require('express');

//导入path模块
const path = require('path');

//导入express-session
const session = require('express-session');

//导入路由
const loginRouter = require('./routes/loginRouter');
const heroRouter = require('./routes/heroRouter');

//创建服务
const app = express();

//设置中间件
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
}))


//设置模板文件目录
app.set('views',path.join(__dirname,'views'));

//设置模板引擎
app.set('view engine' , 'ejs');


//登录拦截
app.use(function(req,res,next){
    //获取url
    let url = req.originalUrl;
    //判断 是否为登录页 或 是否存在session
    if(url != '/login' && !req.session.user){
        return res.redirect('/login');
    }
    next();
})


//设置
//挂载路由
app.use(loginRouter);

app.use('/heros',heroRouter);



//监听指定端口  开启服务
app.listen(80,() => {
    console.log('请打开 http://localhost');
})