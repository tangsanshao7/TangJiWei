//导入joi
const Joi = require('joi');

//导入model层
const {
    findHeros,
    addHero,
    findHerosByHname,
    removeHeroById,
    getHeroByName,
    getHeroById,
    updateHero
} = require('../models/heroModel');

//#region 显示主页
module.exports.indexPage = (req, res) => {

    //查询hero
    findHeros(function (results) {
        //使数据扁平化
        results = results.flat();
        res.render('./index', {
            heros: results
        });
    })
}
//#endregion


//#region 添加英雄页面
module.exports.addPage = (req, res) => {
    res.render('./add');
}
//#endregion

//#region 添加英雄
module.exports.createHero = (req, res) => {
    //获取浏览器传入的对象
    let {
        hname,
        nickname,
        skill
    } = req.body;

    //进行后端校验
    const schema = Joi.object().keys({
        hname: Joi.string().min(1).max(20).required().error(new Error('姓名格式错误')),
        nickname: Joi.string().min(3).max(20).required().error(new Error('外号格式错误')),
        skill: Joi.string().min(3).max(20).required().error(new Error('技能格式错误'))
    })
    let result = Joi.validate({
        hname: hname,
        nickname: nickname,
        skill: skill
    }, schema);
    // console.log(result.error); // 如果校验通过那么 error对象为null
    if (result.error) {
        res.send({
            code: 500,
            message: result.error.message
        })
        // 抛出错误
        throw result.error;
    }

    //创建hero对象
    let hero = {
        hname: hname,
        nickname: nickname,
        skill: skill
    }

    //查找数据库是否存在此对象
    findHerosByHname(hname, function (results) {
        //判断获取到的结果是否为空
        if (results.length == 0) {
            //添加hero
            addHero(hero, function () {
                res.send({
                    code: 200,
                    message: '英雄添加成功'
                })
            })
        } else {
            res.send({
                code: 500,
                message: '英雄已存在 请更换英雄'
            })
        }
    })
}
//#endregion

//#region 删除英雄
module.exports.delHero = (req, res) => {
    //获取id
    let { id } = req.params;

    //调用数据库
    removeHeroById(parseInt(id), function (results) {
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
//#endregion


//#region 模糊查询英雄
module.exports.searchHero = (req,res) => {
    //获取英雄名称
    let name = req.query.heroName;
    if(!name){
        res.send({
            code : 500,
            message : '英雄查询失败,请重新输入',
        })
    }

    //调用数据库连接池
    getHeroByName(name , function(results){
        res.send({
            code : 200,
            message : '英雄查询成功',
            data : results[0]
        })
    });
}


//#region 进入修改页面
module.exports.editPage = (req,res) => {
    let { id } = req.params;

    //调用数据库连接池
    getHeroById(id,function(results){
        res.render('./edit',{
            _hero : results[0]
        });
    })
}
//#endregion


//#region 修改英雄资料
module.exports.editHero = (req,res) => {
    //获取英雄资料
    let { id , hname , nickname , skill } = req.body;
    
    //进行后端校验
    const schema = Joi.object().keys({
        hname: Joi.string().min(1).max(20).required().error(new Error('姓名格式错误')),
        nickname: Joi.string().min(3).max(20).required().error(new Error('外号格式错误')),
        skill: Joi.string().min(3).max(20).required().error(new Error('技能格式错误'))
    })
    let result = Joi.validate({
        hname: hname,
        nickname: nickname,
        skill: skill
    }, schema);
    // console.log(result.error); // 如果校验通过那么 error对象为null
    if (result.error) {
        res.send({
            code: 500,
            message: result.error.message
        })
        // 抛出错误
        throw result.error;
    }

    //创建对象
    let hero = {
        hname : hname,
        nickname : nickname,
        skill : skill
    }
    //调用数据库连接池
    updateHero(id,hero,function(results){
        if (results.affectedRows == 1) {
            res.send({
              code: 200,
              message: "英雄更新成功"
            })
          } else {
            res.send({
              code: 500,
              message: "英雄更新失败"
            })
          }
    });
}
//#endregion