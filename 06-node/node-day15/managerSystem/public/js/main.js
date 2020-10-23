$(function () {
  // 显示数据
  showData();
  // 删除数据

  // 添加数据

})

/**
 * 功能:当页面打开时,显示数据库中的数据
 */
function showData() {
  $.ajax({
    type: "get",
    url: "/api/list",
    data: null,
    success: function (res) {
      console.log(res);
      if (res.code == 200) {

        let htmlStr = template('list_templ', res)
        // console.log(htmlStr);
        $("tbody").html(htmlStr)
      }
    }
  });
}