$(function () {
  //#region 1.筛选显示数据
  window.category = "";
  window.status = "";
  $('#filterBtn').on('click', function (e) {
    e.preventDefault();
    // 为了以后点击分页渲染数据的时候 获取查询条件
    let category = window.category = $('select[name="category"]').val();
    let status = window.status = $('select[name="status"]').val();
    // 表单序列化
    // console.log($("#filterForm").serialize());
    // 通过条件去查询数据
    $.ajax({
      type: 'GET',
      url: "/admin/posts/findsByFilter",
      data: {
        category: category,
        status: status,
        pagenum: 1,
        pagesize: 5
      },
      success: function (results) {
        console.log(results)
        if (results.code == 200) {
          // 渲染列表
          let listStr = template('list_templ', results);
          // console.log(listStr);
          $('tbody').html(listStr);
          // 渲染分页
        }
      }
    })
  })
  //#endregion

  //#region 2.分页显示数据
  $('.pagination').on('click', 'a', function () {
    // 筛选条件
    let category = window.category;
    let status = window.status;
    console.log(category, status);
    // 分页数据
    let pagenum = $(this).data('page');
    console.log(pagenum);
    let pagesize = 5;
    $.ajax({
      type: 'GET',
      url: "/admin/posts/findsByPaging",
      data: {
        category,
        status,
        pagenum,
        pagesize
      },
      success: function (results) {
        console.log(results);
      }
    })
  })
  //#endregion
})