$(function () {
  //#region 1.当打开分类管理页面的时候 显示分类
  getCategoryList();
  //#endregion


  //#region 2.

  //#region 3.添加分类
  $("#cateBtn").click(function (e) {
    e.preventDefault();
    // console.log(1111)
    console.log($("#cateForm").serialize())
    $.ajax({
      type: 'POST',
      url: "/admin/posts/addCategory",
      data: $("#cateForm").serialize(),
      success: function (results) {
        // console.log(results);
        if (results.code == 200) {
          getCategoryList();
        }
      }
    })
  })
  //#endregion
})

function getCategoryList() {
  $.ajax({
    type: "GET",
    url: '/admin/posts/findCategory',
    data: null,
    success: function (results) {
      if (results.code == 200) {
        console.log(results);
        let listStr = template("category_templ", results)

        // console.log(listStr);
        $('tbody').html(listStr);
      }
    }
  })
}