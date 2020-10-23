//当页面加载完毕后
$(function () {
    //创建别名的域改变事件
    $('#slug').on('change', function () {
        //获取文本框的文本
        let text = $('#slug').val();

        //将文本框的文本添加到strong中
        $('#slugChange').html(text);
    })

    //表单校验
    $('#addUserForm').bootstrapValidator({
        live: 'enabled',
        // 反馈图标
        feedbackIcons: {
            // 合法的
            valid: 'glyphicon glyphicon-ok',
            // 不合法的
            invalid: 'glyphicon glyphicon-remove',
            // 校验中
            validating: 'glyphicon glyphicon-refresh'
        },
        //提交按钮
        submitButtons: '#addUserBtn',
        fields: {
            email: {
                validators: {
                    // 不能为空
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                    // email的长度
                    stringLength: {
                        min: "6",
                        max: "100",
                        message: "最短为6,最长为100"
                    },
                    // 邮箱要符合
                    emailAddress: {
                        message: "邮箱格式不正确"
                    }
                }
            },
            slug : {
                // 不能为空
                notEmpty: {
                    message: '邮箱不能为空'
                },
                // 别名的长度
                stringLength: {
                    min: "2",
                    max: "40",
                    message: "最短为2,最长为40"
                }
            },
            password : {
                notEmpty: {
                    message: '密码不能为空！'
                  },
                  regexp: {
                    regexp: /^[a-zA-Z0-9_]{6,30}$/,
                    message: '只能为字母数字，最短6，最长30！'
                  }
            }
        }
    })
    //当校验成功后  发起ajax请求
    .on('success.form.bv', function(e) {
        //阻止默认提交
        e.preventDefault();
        //获取form表单
        var $form = $(e.target);

        //发起ajax请求
        $.ajax({
            type : 'POST',
            url : '/admin/users/add',
            data : $form.serialize(),
            success : function(result){
                //判断返回的状态码
                if(result.code == 500){
                    alert(result.message);
                    //重置表单数据
                    $('#addUserBtn').reset();
                }

                if(result.code == 200){
                    alert(results.message);
                    location.href = '/admin/users';
                }
            }
        })
    })

    //添加删除的点击事件
    $('#delBtn').on('click',function(){
        let id = $(this).attr('data-id');
        console.log(id);

        //发送ajax
        $.ajax({
            type : 'PUT',
            url : '/admin/users/delete',
            data : {
                id : id
            },
            success : function(results){
                //判断返回的状态码
                if(results.code == 200){
                    location.href = '/admin/users';
                }

                if(results.code == 500){
                    alert(result.message);
                }
            }    
        })
    })
})

