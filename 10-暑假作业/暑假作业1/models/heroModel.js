//导入数据库连接池
const pool = require('../config/dbConfig');

//书写sql查询语句
//#region 查询所有hero对象
module.exports.findHeros = (callback) => {
    pool.query(
        `SELECT * FROM hero`
    , function(error,results){
        if(error) throw error;

        callback(results);
    })
}
//#endregion


//#region 查询hero对象 通过姓名
module.exports.findHerosByHname = (hname , callback) => {
    pool.query(
        `SELECT * FROM hero WHERE hname = '${hname}'`
    , function(error , results){
        if(error) throw error;

        callback(results);
    })
}
//#endregion



//#region 添加hero对象
module.exports.addHero = (hero,callback) => {
    
    let values = '';
    //遍历对象
    for(let h in hero){
        values += "'"+hero[h]+"',";
    }

    values = values.slice(0,-1); 

    console.log(values);

    pool.query(
        `INSERT INTO hero(hname,nickname,skill) VALUES (${values})`
    , function(error , results){
        if(error) throw error;

        callback(results);
    })
}
//#endregion


//#region 删除hero对象
module.exports.removeHeroById = (id , callback) => {
    pool.query(
        `DELETE FROM hero WHERE id = ${id}`
    , function(error , results){
        if(error) throw error;

        callback(results);
    })
}
//#endregion


//#region 通过名称来查询英雄
module.exports.getHeroByName = (name , callback) => {
    pool.query(
        `SELECT * FROM hero WHERE hname like '%${name}%'`
    ,function(error,results){
        if(error) throw error;

        callback(results);
    })
}
//#endregion



//#region 通过id查询英雄
module.exports.getHeroById = (id , callback) => {
    pool.query(
        `SELECT * FROM hero WHERE id = '${id}'`
    ,function(error , results){
        if(error) throw error;

        callback(results);
    })
}
//#endregion


//#region 修改数据库数据
module.exports.updateHero = (id , hero , callback) => {
    //创建变量
    let sets = '';
    //遍历hero
    for(let i in hero){
        sets += i+"='"+hero[i]+"',";
    }

    //删除最后一个字符
    sets = sets.slice(0,-1);

    //书写sql语句
    pool.query(
        `UPDATE hero SET ${sets} WHERE id = '${id}'`
    ,function(error , results){
        if(error) throw error;

        callback(results);
    })
}
//#endregion