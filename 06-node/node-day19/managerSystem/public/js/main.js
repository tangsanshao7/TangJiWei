//创建页面加载完毕事件
$(document).ready(function () {
  //调用getAll函数
  // getAll();

  //显示分页数据
  //刚进入页面  显示第一页数据
  showPage();

  //点击分页按钮  前进 或 后退一页
  $('.pager').on('click','li',function(){
    //判断点击的按钮是否为disabled
    if(!$(this).hasClass('disabled')){      
      //获取 点击的这个按钮的 页数
      let pageNum = $(this).data('pagenum')
      //调用函数
      showPage(pageNum);
    }
  })
})

//创建删除按钮的点击事件
$('tbody').on('click', '.btn-danger', function () {
  //获取该数据的id
  let id = $(this).data('id');
  
  //调用删除方法  将id传入
    delData(id);
})

//创建修改按钮的点击事件
$('tbody').on('click', '.btn-success', function () {
  //获取该数据的id
  let id = $(this).data('id');
  
  //发送ajax 将id对应的对象数据拼接到模态框中
  //发送ajax请求
  $.ajax({
    //请求方式
    type : 'POST',
    //请求地址
    url : '/editmanager/show',
    //请求参数
    data : {
      id : id
    },
    //请求成功后的回调函数
    success : function(result){
      
      //将数据拼接到模态框中
      $('input[name="name"]').val(result.data.name);
      $('input[name="password"]').val(result.data.password);
      $('input[name="age"]').val(result.data.age);
      $('input[name="email"]').val(result.data.email);
      $('input[name="hobbies"]').val(result.data.hobbies);
      $('input[name="id"]').val(result.data._id);

      ///模态框显示
      $('#myModal').modal('show');
    }
  })
})


//创建模态框的点击事件
$('.edit-data').on('click',function(){
  //获取form表单数据
  let formData = $('#form').serialize();
  
  // console.log(formData);
  //发送ajax请求
  $.ajax({
    type : 'POST',
    url : '/editmanager/edit',
    data : formData,
    success : function(result){
      if(result.code == 200){
        //关闭模态框
        $('#myModal').modal('hide');

        //调用getpage函数
        showPage($('html').data('pagenum'));
      }
    }
  })
  
})


//创建函数 showPage()
/**
 * 
 * @param {Number} pageNum   页数
 * @param {Mumber} pageSize  一页中几条数据
 */
function showPage(pageNum, pageSize) {
  //发送ajax请求
  $.ajax({
    //请求方式
    type: 'GET',
    //请求地址
    url: '/getlist/getPage',
    //请求数据
    data: {
      pageNum: pageNum || 1,
      pageSize: pageSize || 5,
    },
    //请求成功后的回调函数
    success: function (result) {
      //判断响应的状态码是否为200
      if(result.code == 200){
        
        //拼接字符串
        let pageStr = template('pagenation-templ',{
          //
          pageNum : result.data.pageNum,
          pageSize : result.data.pageSize,
          pageTotal : Math.ceil(result.data.dataTotal / result.data.pageSize),
        })

        //覆盖到页面中
        $('.pager').html(pageStr);

        //拼接数据字符串
        let listStr = template('list-templ',{
          target : result.data.data
        });
        $('tbody').html(listStr);
      }
    }
  })
}



//创建函数getAll  获取数据库中的数据
function getAll() {
  //发送ajax请求
  $.ajax({
    //请求方式
    type: 'GET',
    //请求地址
    url: '/getlist/list',
    //请求参数
    data: null,
    //成功后的回调函数
    success: function (result) {
      //拼接字符串
      let htmlstr = template('list-templ', {
        target: result.data
      })

      //覆盖到文档中
      $('tbody').html(htmlstr);
    }
  })
}


//创建删除方法 
function delData(id) {
  //发送ajax请求
  $.ajax({
    type: 'POST',
    url: '/getlist/delete',
    data: {
      id: id
    },
    //发送请求时
    beforeSend : function(){
        //return fasle 能阻止请求发送
        if(!confirm('确定删除吗?')){
          return false;
        }
    },
    success: function (result) {
      if (result.code == 200) {
        //调用showpage函数
        showPage($('html').attr('data-pagenum'));
      }
    },
    error: function (result) {
      console.log(result.msg);
    }
  })
}
