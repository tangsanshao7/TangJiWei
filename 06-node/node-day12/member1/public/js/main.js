// 载入事件
$(document).ready(function () {
  // 功能1: 刚进入页面 渲染页面数据
  // getAll();

  // 刚进入页面 这一组数据的id不传
  getPage(null, 6);


  $(document).scroll(function () {
    // if (loadData) return;
    // 1.获取文档的高度
    let docHeight = $(document).height();
    // 2.获取卷曲的高度
    let winHeight = $(window).height();
    // 3.获取可视区的高度
    let scrollTop = $(document).scrollTop();

    if (docHeight - winHeight - scrollTop < 50) {
      // alert("您该请求数据了")
      let last = $('html').attr('last');
      getPage(last, 6)
      // console.log(loadData);
    }

  })



  // TODO: 点击删除按钮 删除某一条数据
  // 1.给delete按钮添加点击事件
  $('#members').on('click', '.delete-btn', function (e) {
    e.preventDefault();
    // 询问是否真的要删除
    // let result = confirm("请问您真的要删除该数据吗?");
    // console.log(result);
    if (!confirm("请问您真的要删除该数据吗?")) {
      return false;
    }
    // console.log(111111);
    // 2.获取数据ID
    // let id = $(this).attr('data-id');

    let id = $(this).data('id');
    // console.log(id);
    // 3.发起ajax请求,让服务器端去处理数据
    deleteItem(id);
  })
})

// 获取所有数据
// function getAll() {
//   // 发起ajax请求
//   $.ajax({
//     // 请求方式
//     type: 'GET',
//     // 请求地址
//     url: '/api/getAll',
//     // 请求数据
//     data: null,
//     // 请求成功时的回调函数
//     success: function (result) {
//       // 渲染页面
//       // console.log(data);
//       let htmlStr = template('list_templ', {
//         list: result.data
//       });
//       $('#members').html(htmlStr);
//     }
//   })
// }

// 分页获取数据
/**
 * 
 * @param {String} last 取过来的数据数组的最后一个元素的id
 * @param {Number} limit 每次取多少条数据
 */
function getPage(last, limit) {
  $.ajax({
    type: 'get',
    url: '/api/pagetion',
    data: {

      last: last,
      limit: limit
    },
    success: function (result) {
      // 文件渲染
      // console.log(result);

      let last = result.data[result.data.length - 1].id;
      $('html').attr('last', last);

      let htmlStr = template('list_templ', {
        list: result.data
      });

      $('#members').append(htmlStr);

      // loadData = true;

    }
  })
}


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