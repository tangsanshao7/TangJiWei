//引入模块
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/manager_system', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch((err) => {
        console.log(err);
    })


//应用约束
const User = new mongoose.model('User', mongoose.Schema({
    //用户名
    name: {
        type: String,
        required: [true, '用户名不能为空'],
        //长度最少2个字符
        minlength: [2, '姓名长度不能少于2个字符'],
        //长度最大6个字符
        maxlength: [6, '姓名长度不能大于6个字符'],
    },

    //密码
    password: {
        type: String,
        required: [true, '密码不能为空']
    },

    //年龄
    age: {
        type: Number,
        required: [true, '年龄不能为空'],
        min: [0, '年龄不能低于0'],
        max: [100, '年龄不能多余100'],
    },
    //邮箱
    email: {
        type: String,
        required: [true, '邮箱不能为空'],
    },
    //爱好
    hobbies: {
        type: [String],
        enum: ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头'],
    }
}))


//导出方法
module.exports = {
    getAll: function (fn) {
        User.find()
            .then((data) => {
                fn(data);
            })
            .catch((err) => {
                console.log(err);
            })
    },

    del: function (id) {
        User.deleteOne({
            _id: id
        })
          .catch((err) => {console.log(err);});

        return 'ok';
    },

    add: function (manager) {
        User.create(manager)
        .catch((err) => {console.log(err);});

        return 'ok';
    },

    page : function(pageNum,pageSize,fn){
        User.find().skip((pageNum-1) * pageSize).limit(pageSize)
        .then(data => {
            //获取到分页查询到的数据后 
            //将 pageNum pageSize 总数据量 数据 返回
            User.countDocuments().then(total => {
                fn({
                    pageSize : pageSize,
                    pageNum : pageNum,
                    dataTotal : total,
                    data : data
                })
            })
        })
    },
    show : function(userid,fn){
        User.findOne({_id : userid})
            .then(data => {fn(data);})
            .catch(err => {console.log(err);})
    },

    edit : function(userid,userobj,fn){
        User.updateOne({
            _id : userid
        },userobj).then(data => {fn(data)});
    }
};