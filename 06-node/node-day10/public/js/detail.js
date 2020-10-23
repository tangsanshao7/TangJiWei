$(document).ready(function () {

  let id = new URLSearchParams(location.search).get('id');
  $.ajax({
    type: 'get',
    url: '/api/getDetail',
    data: {
      id: id
    },
    success: function (result) {
      // console.log(data);
      let htmlStr = template('detail_templ', result.data);

      $('.jumbotron').html(htmlStr);
    }
  })
})