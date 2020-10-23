$(function(){
    //退出登录
    $('#logoutButton').click(function(){
        //调用logout函数
        logout();
    })
})

//创建logout函数
function logout(){
    //发送ajax
    $.ajax({
        type : 'GET',
        url : '/admin/logout',
        data : null,
        success : function(result){
            if(result.code == 200){
                alert(result.msg);
                location.href = '/admin/login';
            }
        }
    })
}