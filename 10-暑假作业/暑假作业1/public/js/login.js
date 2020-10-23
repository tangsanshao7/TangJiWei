  /*
    功能分析：
      点击登录按钮.login
        - 通过post请求方式将用户名#username密码#password发送给服务端
          - 检测失败，设置提示
          - 检测成功，跳转到index.html页面
  */

  // 获取元素
  var $username = $('#username');
  var $password = $('#password');
  
  $('.login').on('click', function (e) {
    // 阻止提交按钮的默认行为
    e.preventDefault();
    // 检测用户名或密码框是否为空
    if ($username.val() === '' || $password.val() === '') {
      alert('请完整填写表单');
      return;
    }
    // 通过ajax将用户名和密码发送给服务端处理
    $.ajax({
      type : 'post',
      url : '/login',
      data : {
        username : $username.val(),
        password : $password.val()
      },
      success : function (res) {
        // 响应的数据中都包含code和msg两个部分:
        //  - 可以通过判断code，检测是否可以登录
        //    - 200 表示成功，可以登录
        //    - 400 表示不成，不能登录
        if (res.code === 200) {
          // 登录成功，跳转到index.html
          location.href = '/heros';
        } else if (res.code === 500) {
          alert('用户名或密码错误！');

          // 用户名或密码错误后，可以将输入框内容清除，方便下次输入
          $username.val('');
          $password.val('');
        }

      }
    });

  });