//导入joi 后台校验
const Joi = require('joi');
const { findUser } = require('../models/adminLoginModel');

//显示登录页面
module.exports.loginPage = (req,res) => {
    res.render('./admin/login' , { title : '后台管理系统-登录'} );
}

//处理登录业务
module.exports.loginUser = (req,res) => {
    //获取前端传入的数据
    let {email , password} = req.body;

    //后端数据校验
    const schema = Joi.object().keys({
        email : Joi.string().min(6).max(100).email().required().error(new Error('邮箱或密码错误')),
        password : Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required().error(new Error('邮箱或密码错误'))
    });

    let result = Joi.validate({ email : email , password : password},schema);


    //判断是否存在异常
    if(result.error){
        res.send({
            code : 500,
            message : result.error.message
        })

        //抛出异常
        throw result.error;
    }

    //数据库数据进行对比
    //调用model层导出的函数 findUser 判断邮箱和密码是否匹配
    findUser(email,function(result){
        //判断邮箱书写是否正确(判断返回的结果长度)
        if(result.length !== 0){
            //判断密码是否正确
            if(result[0].password === password){
                //将获取到的user对象存入session中
                req.session.user = result[0];

                //返回响应
                return res.send({
                    code : 200,
                    msg : '登录成功'
                });
            }else{
                return res.send({
                    code : 500,
                    msg : '邮箱或密码错误'
                });
            }
        }else{
            return res.send({
                code : 500,
                msg : '邮箱或密码错误'
            });
        }
    })
}

module.exports.logoutUser = (req,res) => {
    //销毁session
    req.session.destory(function(err){
        //清除cookie
        res.clearCookie('connect.id');
        //发送响应
        res.send({
            code : 200,
            msg : '用户已退出登录'
        })
    })
}