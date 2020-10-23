//引入dbConfig
const pool = require('../config/dbconfig');

//查询所有用户
module.exports.findUsers = (callback) => {
    pool.query(`
    SELECT * FROM Users; 
    ` 
    , function(error , results){
        //如果存在异常 抛出
        if(error) throw error;

        //返回数据
        callback(results);
    })
}

//通过邮箱查询用户
module.exports.findUserByEmail = (email , slug , callback) => {
    // sql语句
    pool.query(`select * from users where email ='${email}' and slug = '${slug}'`, function (error, results) {
      if (error) throw error;
  
      callback(results);
    });
  }


//添加用户
module.exports.insertUser = (data,callback) => {
    
    var values = '';
    //拼接数据
    for(let k in data){
        values = values+"'"+data[k]+"',";
    };

    //删除末尾,
    values = values.slice(0,-1);

    pool.query(`
    INSERT INTO Users(email,password,nickname,avatar,slug,status,bio) VALUES (${values})
    ` 
    ,function(error,results){
        if(error) throw error;

        callback(results);
    })
}


//根据id查询用户
module.exports.removeUser = (id,callback) => {
    //书写sql语句
    pool.query(`
    UPDATE users SET status ="forbidden" WHERE id = ${id}
    ` 
    ,function(error,results){
        if(error) throw error;

        callback(results);
    })
}


//根据id查询用户
module.exports.findUserById = (id,callback) => {
    //书写sql语句
    pool.query(`
    SELECT * FROM users WHERE id = ${id}
    ` 
    ,function(error,results){
        if(error) throw error;

        callback(results);
    })
}


//修改用户数据
module.exports.updateUser = (id,user,callback) => {
    
    let sets = '';
    //遍历数据
    for(let k in user){
        sets += k+"='"+user[k]+"',";
    }

    //删除末尾,
    sets = sets.slice(0,-1);

    //书写sql语句
    pool.query(`
    UPDATE users SET ${sets} WHERE id=${id};
    `
    ,function(error,results){
        if(error) throw error;

        callback(results);
    })
}

