//引入 model 层文件
const { findUsers , findUserByEmail , insertUser , removeUser , findUserById , updateUser} = require('../models/adminUsersModel');

const Joi = require('joi');

//导出方法
//查询所有user
module.exports.showUsers = (req,res) => {
    findUsers(function(results){
        
        //使数据扁平化
        results = results.flat();
        // 发送数据
        res.render('./admin/users',{
            title : '后台管理系统-用户',
            user : results
        })
    })
}

//显示修改用户界面
module.exports.showUsersEdit = (req,res) => {
    res.render('./admin/profile' , {title : '后台管理系统-用户修改'});
}

//添加用户
module.exports.addUser = (req,res) => {
    //获取前端传入的数据
    let { email , slug , nickname , password } = req.body;
    console.log(slug);
    // console.log(email);

    //进行后端校验
    const schema = Joi.object().keys({
        email: Joi.string().min(6).max(100).email().required().error(new Error('邮箱格式错误')),
        slug : Joi.string().min(2).max(40).error(new Error('别名格式错误')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required().error(new Error('密码格式错误'))
      })
      let result = Joi.validate({ email: email, password: password }, schema);
      // console.log(result.error); // 如果校验通过那么 error对象为null
      if (result.error) {
        res.send({
          code: 500,
          message: result.error.message
        })
        // 抛出错误
        throw result.error;
      }

      //判断邮箱是否存在
      findUserByEmail(email , slug , function(results){
        //判断是否找到数据
        if(results.length != 0){
            //找到则返回错误
            res.send({
                code: 500,
                message: '邮箱已存在 , 请更换邮箱'
              })
        }
      });

      //创建user对象
      let user = {
          email : email,
          password : password,
          slug : slug,
          avatar : '/img/default.png',
          nickname : nickname,
          status : 'activated',
          bio : null
      }

      //添加用户到数据库
      insertUser(user,function(){
        res.send({
            code: 200,
            message: '用户添加成功'
          })
      })
}



//删除用户
module.exports.delUser = (req,res) => {
    //获取id
    let { id } = req.body;

    //删除用户
    removeUser(id , function(results){
        if (results.affectedRows == 1) {
            res.send({
              code: 200,
              message: "用户删除成功"
            })
          } else {
            res.send({
              code: 500,
              message: "用户删除失败"
            })
          }
    })
}

//回显用户
module.exports.showEditUser = (req,res) => {
    //获取id
    let { id } = req.params;

    findUserById(parseInt(id),function(results){
        console.log(results);
        res.render('./admin/profile' , {
            title : '用户管理系统-用户添加',
            echoUser : results[0]
        });
    })
}


//修改用户
module.exports.editUser = (req,res) => {
    //获取前端数据
    console.log(req.body);

    let id = req.body.id;

    //创建user对象
    let user = {
        slug : req.body.slug,
        nickname : req.body.nickname,
        bio : req.body.bio
    }

    //更新数据库
    updateUser(parseInt(id),user,function(results){
        if (results.affectedRows == 1) {
            res.send({
              code: 200,
              message: "用户更新成功"
            })
          } else {
            res.send({
              code: 500,
              message: "用户更新失败"
            })
          }
    })
}