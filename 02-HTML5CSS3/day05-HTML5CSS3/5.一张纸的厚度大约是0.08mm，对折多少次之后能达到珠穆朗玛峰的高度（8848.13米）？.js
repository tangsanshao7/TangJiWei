// 5.一张纸的厚度大约是0.08mm，对折多少次之后能达到珠穆朗玛峰的高度（8848.13米）？
var width = 0.08;
var num = 0;
while (true) {
  width *= 2;
  num++;
  if (width > 8848130) {
    console.log(num);
    break;
  }
}