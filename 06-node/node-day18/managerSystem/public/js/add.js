//创建页面加载事件
$(document).ready(function () {
  //校验表单
  $('#form').validate({

    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 10
      },
      password : {
        required : true,
        minlength : 2
      },
      age : {
        required : true,
        max : 100,
        min : 1
      },
      email : {
        required : true,
      }
    },


    messsages : {
       name : {
        required: '用户名不能为空',
        minlength : '用户名不能小于2个字符',
        maxlength : '用户名不能超过10个字符',
      },
      password : {
        required : '密码不能为空',
        minlength : '密码不能小于2个字符'
      },
      age : {
        required : '年龄不能为空',
        max : '年龄不能超过100岁',
        min : '你太小了'
      },
      email : {
        required : '邮箱不能为空',
      }
    }
  })
})

//创建添加用户的点击事件
$('.btn-primary').on('click', function () {
  //获取表单提交的内容
  let formData = $('#form').serialize();

  //发送ajax请求
  $.ajax({
    type : 'POST',
    url : '/setmanager/add',
    data : formData,
    success : function(result){
       if(result.code == 200){
         location.href = '/';
       }
    }
  })
})