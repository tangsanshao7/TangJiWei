//当页面加载完成后
$(function(){ 
    //表单校验
    $('#addHeroForm').bootstrapValidator({
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
        submitButtons: '#heroAddBtn',
        fields: {
            hname: {
                validators: {
                    // 不能为空
                    notEmpty: {
                        message: '姓名不能为空'
                    },
                    // email的长度
                    stringLength: {
                        min: "1",
                        max: "20",
                        message: "最短为1,最长为20"
                    }
                }
            },
            nickname : {
                // 不能为空
                notEmpty: {
                    message: '外号不能为空'
                },
                // 别名的长度
                stringLength: {
                    min: "3",
                    max: "20",
                    message: "最短为3,最长为20"
                }
            },
            skill : {
                // 不能为空
                notEmpty: {
                    message: '技能不能为空'
                },
                // 别名的长度
                stringLength: {
                    min: "3",
                    max: "20",
                    message: "最短为3,最长为20"
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
            url : '/heros/add',
            data : $form.serialize(),
            success : function(result){
                //判断返回的状态码
                if(result.code == 500){
                    alert(result.message);
                    //重置表单数据
                    $('#addHeroForm').reset();
                }

                if(result.code == 200){
                    alert(result.message);
                    location.href = '/heros/';
                }
            }
        })
    })

})