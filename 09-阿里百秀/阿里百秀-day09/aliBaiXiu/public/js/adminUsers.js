$(function () {
  //#region 1.获取用户信息
  getUsersList();
  //#endregion
})


function getUsersList() {
  $.ajax({
    type: 'GET',
    url: '/admin/users/find',
    data: null,
    success: function (results) {
      // console.log(results);
      let usersStr = template("users_templ", results);
      $('tbody').html(usersStr);
    }
  })
}