// 入口函数
$(function () {
  getListData();
})

/**
 * 功能: 分页获取数据
 * @param {Number} pagenum 第几页
 * @param {Number} pagesize 每页显示多少条数据
 */
function getListData(pagenum, pagesize) {
  $.ajax({
    type: 'GET',
    url: '/api/article',
    data: {
      pageNum: pagenum || 1,
      pageSize: pagesize || 6
    },
    success: function (result) {
      let listStr = template('list_templ', result.data);

      $('.list').html(listStr)
    }
  })
}