$(function () {
  $('.btn-primary').on('click', function () {
    let formData = $('form').serialize()
    // console.log(111)
    // console.log(formData)
    $.ajax({
      type: 'post',
      url: '/api/add',
      data: formData,
      success: function (result) {
        // console.log(result)
        if (result.code == 200) {
          alert(`${result.data.username}添加成功`)
          location.href = "/"
        }
      }
    })
  })
})