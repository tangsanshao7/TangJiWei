$(function () {
  // 获取分页数据
  showPage()
  // 点击分页按钮 获取分页数据
  $('.pager').on('click', 'li', function () {
    if (!$(this).hasClass('disabled')) {
      let pagenum = $(this).attr('data-pagenum')
      showPage(pagenum)
    }
  })

})

function showPage(pageNum, pageSize) {
  $.ajax({
    type: 'get',
    url: '/api/getPage',
    data: {
      pageNum: pageNum || 1,
      pageSize: pageSize || 3
    },
    success: function (result) {
      console.log(result)
      if (result.code == 200) {
        let htmlStr = template('templ_list', result.data)
        $('tbody').html(htmlStr)
        console.log(htmlStr);
        let fenStr = template('templ_fen', {
          pageNum: result.data.pageNum,
          pageSize: result.data.pageSize,
          pageTotal: Math.ceil(result.data.dataTotal / result.data.pageSize)
        })
        $('.pager').html(fenStr)
      }
    }
  })

}