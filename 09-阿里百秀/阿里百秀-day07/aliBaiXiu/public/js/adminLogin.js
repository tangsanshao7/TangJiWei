$(function(){
    $('#loginForm').bootstrapValidator({
        //什么时候校验
        live : 'enabled',
        //反馈图标
        feedbackIcons: {
            valid : 'glyphicon glyphicon-ok',
            invalid : 'glyphicon glyphicon-remove',
            validating : 'glyphicon glyphicon-refresh'
        },
        //提交按钮
        submitButtons : '#loginBtn',
        fields : {
            email : {
                //关于email的校验器
                validators : {
                    //不能为空
                    notEmpty : {
                        message : '用户名不能为空'
                    },
                    //email的长度
                    stringLength : {
                        min : '6',
                        max : '100',
                        message : '最短为6 最长为100'
                    },
                    //邮箱格式是否符合
                    emailAddress : {
                        message : '邮箱格式不正确'
                    },
                    //当服务器验证后再重新校验
                    callback : {
                        message : '用户不存在'
                    }
                }
            },
            password : {
                //关于password校验器
                validators : {
                    notEmpty : {
                        message : '密码不能为空! '
                    },
                    regexp : {
                        regexp : /^[a-zA-Z0-9_]{6,30}$/,
                        message : '只能输入数字和英文字母 最短不低于6 最高不超过30'
                    },
                    callback : {
                        message : '用户名或密码错误'
                    }
                }
            }
        }
    })
    // 当校验成功后 发起ajax请求
    .on('success.form.bv',function(e){
        //为了阻止默认提交
        e.preventDefault();
        //form 表单
        var $form = $(e.target);
        console.log($form.serialize());
        $.ajax({
            type : 'POST',
            url : '/admin/login',
            data : $form.serialize(),
            success : function(result){
                //回显错误信息
                if(result.code == 500){
                    $form.data("bootstrapValidator").updateStatus("email","INVALID",'callback');
                    $form.data("bootstrapValidator").updateStatus("password","INVALID",'callback');
                }

                //邮箱密码正确跳转页面
                if(result.code == 200){
                    location.href = '/admin/'
                }
            }
        })
    });

});

