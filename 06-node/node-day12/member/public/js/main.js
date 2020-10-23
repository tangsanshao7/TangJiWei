



$(document).ready(function () {
  // 功能一：刚进入页面 渲染数据
  getAll()

  // 功能二 点击删除按钮 删除某一条数据
  // 1给delete按钮添加点击事件
  $('#members').on('click', '.delete-btn', function (e) {
    e.preventDefault()
    // 询问是否真的要删除
    if (!confirm("请问您真的要删除该数据吗?")) {
      return false;
    }
    // 2.获取数据ID

    let id = $(this).data('id');
    // 3.发起ajax请求,让服务器端去处理数据
    deleteItem(id);
  })

})
function getAll() {
  // 发起ajax请求
  $.ajax({
    // 请求方式
    type: 'GET',
    // 请求地址
    url: '/api/getAll',
    // 请求数据
    data: null,
    // 请求成功时的回调函数
    success: function (result) {
      // 渲染页面
      // console.log(data);
      let htmlStr = template('list_templ', {
        list: result.data
      });

      $('#members').html(htmlStr);
    }
  })
}
// 发起ajax请求
function deleteItem(id) {
  $.ajax({
    type: 'get',
    url: '/api/delete',
    data: {
      id: id
    },
    success: function (data) {
      // console.log(data);
      if (data.code == 200) {
        getAll();
      }
    }
  })
}