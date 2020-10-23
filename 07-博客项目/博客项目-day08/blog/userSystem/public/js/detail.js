// $(function () {
//   $("#comment-form").validate({
//     rules: {
//       content: {
//         required: true,
//         minlength: 1
//       },
//     },
//     messages: {
//       content: {
//         required: "内容必须填写",
//         minlength: "内容至少1个字符以上",
//       },

//     },
//     // 提交处理
//     submitHandler: function (form) {
//       let formdata = new FormData(form) // uid cotent
//       console.log(form)
//       formdata.append('aid', new URLSearchParams(location.search).get('id'))
//       // formdata.append('time',)
//       // console.log(new Date().now())

//       // console.log(formdata.get('title'));
//       // let aid = new URLSearchParams(location.search).get('id');
//       // let result = $(form).serialize();

//       $.ajax({
//         type: 'post',
//         url: '/api/comment',
//         data: formdata,
//         success: function (data) {
//           console.log(data);
//         }
//       })

//     }
//   });
// })