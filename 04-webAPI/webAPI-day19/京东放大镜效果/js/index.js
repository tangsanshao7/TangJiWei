//1
// let preview_img = document.querySelector('.preview_img') //小图片
// let mask = document.querySelector('.mask')
// var big = document.querySelector('.big');
// console.log(preview_img)
// preview_img.addEventListener('mouseenter', function () {
//   mask.style.display = 'block'
//   big.style.display = 'block';
// })
// preview_img.addEventListener('mouseleave', function () {
//   mask.style.display = 'none'
//   big.style.display = 'none';
// })
// //2.鼠标移动的时候 让黄色的盒子跟着鼠标来走
// preview_img.addEventListener('mousemove', function (e) {
//   // 先计算出鼠标在盒子内的坐标
//   //减去盒子高度 宽度 一半 就是mask 
//   let x = e.pageX - this.offsetLeft
//   let y = e.pageY - this.offsetTop
//   // console.log(x,y)
//   maskX = x - mask.offsetWidth / 2
//   maskY = y - mask.offsetHeight / 2
//   //如果x 坐标小于0了 就让他停在0的位置
//   // 遮挡层的最大移动距离
//   var maskMax = preview_img.offsetWidth - mask.offsetWidth
//   if (maskX <= 0) {
//     maskX = 0
//   } else if (maskX >= maskMax) {
//     maskX = maskMax
//   }
//   if (maskY <= 0) {
//     maskY = 0
//   } else if (maskY >= maskMax) {
//     maskY = maskMax
//   }
//   mask.style.left = maskX + 'px'
//   mask.style.top = maskY + 'px'
//   //大图片的移动距离=遮罩层的移动距离*大图的最大移动距离/遮罩层的最大移动距离
//   var bigIMg = document.querySelector('.bigImg');
//   var bigMax = bigIMg.offsetWidth - big.offsetWidth;
//   var bigX = maskX * bigMax / maskMax;
//   var bigY = maskY * bigMax / maskMax;
//   bigIMg.style.left = -bigX + 'px';
//   bigIMg.style.top = -bigY + 'px';
// })

// let preview_img = document.querySelector('.preview_img') //小图片
// let mask = document.querySelector('.mask')
// var big = document.querySelector('.big');
// console.log(preview_img)
// preview_img.addEventListener('mouseenter', function () {
//   mask.style.display = 'block'
//   big.style.display = 'block';
// })
// preview_img.addEventListener('mouseleave', function () {
//   mask.style.display = 'none'
//   big.style.display = 'none';
// })
// //2.鼠标移动的时候 让黄色的盒子跟着鼠标来走
// preview_img.addEventListener('mousemove', function (e) {
//   // 先计算出鼠标在盒子内的坐标
//   //减去盒子高度 宽度 一半 就是mask 
//   let x = e.pageX - this.offsetLeft
//   let y = e.pageY - this.offsetTop
//   // console.log(x,y)
//   maskX = x - mask.offsetWidth / 2
//   maskY = y - mask.offsetHeight / 2
//   //如果x 坐标小于0了 就让他停在0的位置
//   // 遮挡层的最大移动距离
//   var maskMax = preview_img.offsetWidth - mask.offsetWidth
//   if (maskX <= 0) {
//     maskX = 0
//   } else if (maskX >= maskMax) {
//     maskX = maskMax
//   }
//   if (maskY <= 0) {
//     maskY = 0
//   } else if (maskY >= maskMax) {
//     maskY = maskMax
//   }
//   mask.style.left = maskX + 'px'
//   mask.style.top = maskY + 'px'
//   //大图片的移动距离=遮罩层的移动距离*大图的最大移动距离/遮罩层的最大移动距离
//   var bigIMg = document.querySelector('.bigImg');
//   var bigMax = bigIMg.offsetWidth - big.offsetWidth;
//   var bigX = maskX * bigMax / maskMax;
//   var bigY = maskY * bigMax / maskMax;
//   bigIMg.style.left = -bigX + 'px';
//   bigIMg.style.top = -bigY + 'px';
// })




let preview_img = document.querySelector('.preview_img') //小图片
let mask = document.querySelector('.mask')
var big = document.querySelector('.big');
console.log(preview_img)
preview_img.addEventListener('mouseenter', function () {
  mask.style.display = 'block'
  big.style.display = 'block';
})
preview_img.addEventListener('mouseleave', function () {
  mask.style.display = 'none'
  big.style.display = 'none';
})
//2.鼠标移动的时候 让黄色的盒子跟着鼠标来走
preview_img.addEventListener('mousemove', function (e) {
  // 先计算出鼠标在盒子内的坐标
  //减去盒子高度 宽度 一半 就是mask 
  let x = e.pageX - this.offsetLeft
  let y = e.pageY - this.offsetTop
  // console.log(x,y)
  maskX = x - mask.offsetWidth / 2
  maskY = y - mask.offsetHeight / 2
  //如果x 坐标小于0了 就让他停在0的位置
  // 遮挡层的最大移动距离
  var maskMax = preview_img.offsetWidth - mask.offsetWidth
  if (maskX <= 0) {
    maskX = 0
  } else if (maskX >= maskMax) {
    maskX = maskMax
  }
  if (maskY <= 0) {
    maskY = 0
  } else if (maskY >= maskMax) {
    maskY = maskMax
  }
  mask.style.left = maskX + 'px'
  mask.style.top = maskY + 'px'
  //大图片的移动距离=遮罩层的移动距离*大图的最大移动距离/遮罩层的最大移动距离
  var bigIMg = document.querySelector('.bigImg');
  var bigMax = bigIMg.offsetWidth - big.offsetWidth;
  var bigX = maskX * bigMax / maskMax;
  var bigY = maskY * bigMax / maskMax;
  bigIMg.style.left = -bigX + 'px';
  bigIMg.style.top = -bigY + 'px';
})