$('.header-login').click(function () {
  let formdata = $('#login-form').serialize();

  $.ajax({
    type: 'post',
    url: '/api/login',
    data: formdata,
    success: function (result) {
      // 在那个页面登录成功 就保持在哪个页面
      console.log(result);
      // console.log(location.href);
      if (result.code == 200) {
        location.href = location.href
      }
    }
  })
})