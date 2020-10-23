$(function () {
    //创建删除按钮的点击事件
    $('.delBtn').on('click', function () {
        //获取id 删除用户
        let id = $(this).data('id');
        //发送ajax
        $.ajax({
            type: 'DELETE',
            url: `/heros/del/${id}`,
            data: null,
            success: function (result) {
                if (result.code == 200) {
                    alert(result.message);
                    location.href = '/heros'
                }

                if (result.code == 500) {
                    alert(result.message);
                }
            }
        })
    })

    //创建查询按钮的点击事件
    $('#searchBtn').on('click', function (e) {
        //拦截请求
        e.preventDefault();

        //获取表单内容
        let heroName = $('#search-hero').val();

        //发送ajax
        $.ajax({
            type: 'GET',
            url: '/heros/search',
            data: {
                heroName: heroName
            },
            success: function (result) {
                if (result.code == 500) {
                    alert(result.message);
                }


                if (result.code == 200) {

                    let heroStr = template('heros_templ', result.data);
                    $('#hero-tbody').html(heroStr);
                }
            }
        })
    })
})