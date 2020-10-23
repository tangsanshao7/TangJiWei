//引入joi
const Joi = require('joi');

const { findUser } = require('../models/loginModel');


//显示登录页面
module.exports.loginPage = (req,res) => {
    res.render('./login');
}

//用户登录验证
module.exports.loginUser = (req,res) => {
    //获取前端传入的数据
    let { username , password } = req.body;

    //后端校验
    const schema = Joi.object().keys({
        username : Joi.string().min(2).required().error(new Error('用户名或密码错误')),
        password : Joi.string().min(2).required().error(new Error('用户名或密码错误'))
    });

    let result = Joi.validate({ username : username , password : password } , schema);

    //判断是否存在异常
    if(result.error){
        res.send({
            code : 500,
            message : result.error.message
        })
    }

    //查询数据库进行对比
    findUser(username,function(result){
        //判断是否存在此用户
        if(result.length != 0){
            //判断密码是否正确
            if(password === result[0].password){
                //如果密码正确 将用户存入session中
                req.session.user = result[0];

                //返回响应
                res.send({
                    code : 200,
                    message : '登录成功'
                });
            }else{
                return res.send({
                    code : 500,
                    msg : '用户名或密码错误'
                });
            }
        }else{
            return res.send({
                code : 500,
                msg : '用户名或密码错误'
            });
        }
    });
}