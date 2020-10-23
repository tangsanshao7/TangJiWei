//当页面加载完毕后
$(function () {
    //创建别名的域改变事件
    $('#slug').on('change', function () {
        //获取文本框的文本
        let text = $('#slug').val();

        //将文本框的文本添加到strong中
        $('#slugChange').html(text);
    })

    //创建更新按钮的鼠标点击事件
    $('#updateBtn').on('click',function(e){
        //阻止默认提交
        e.preventDefault();

        //获取form表单的数据
        let form = $('#editUserForm').serialize();

        //发送ajax
        $.ajax({
            type : 'POST',
            url : '/admin/users/update',
            data : form,
            success : function(result){
                //判断后端传入的状态码
                if(result.code == 200){
                    alert(result.message);
                    location.href = '/admin/users';
                }

                if(result.code == 500){
                    alert(result.message);
                }
            }
        })
    })
})