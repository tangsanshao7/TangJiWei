//当页面加载完成
$(function () {
    $('.editBtn').on('click', function () {
        //获取表单数据
        let formData = $('#editForm').serialize();

        //发送ajax请求
        $.ajax({
            type: 'PUT',
            url: '/heros/edit',
            data: formData,
            success: function (result) {
                if (result.code == 200) {
                    alert(result.message);
                    location.href = '/heros/';
                }

                if (result.code == 500) {
                    alert(result.message);
                }
            }
        })
    })
})