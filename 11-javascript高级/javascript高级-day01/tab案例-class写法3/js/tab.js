var that;
class Tab {
  constructor(id) {
    that = this;
    this.main = document.querySelector(id);
    this.add = document.querySelector(".tabadd");
    this.ul = document.querySelector('.fisrstnav ul:first-child');
    this.fsection = document.querySelector('.tabscon');
    this.init();
  }
  init() {
    this.updataNode();
    this.add.onclick = this.addTab;
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.taggleNode;
      this.remove[i].onclick = this.removeTab;
      this.sections[i].ondblclick = this.editTab;
      this.spans[i].ondblclick = this.editTab;

    }
  }

  updataNode() {
    this.lis = this.main.querySelectorAll('li');
    this.sections = this.main.querySelectorAll('section');
    this.remove = this.main.querySelectorAll('.icon-guanbi');
    this.spans = this.main.querySelectorAll(".fisrstnav li span:first-child")


  }

  // 切换功能
  taggleNode() {
    that.clearClass();
    this.className = 'liactive';
    that.sections[this.index].className = 'conactive';
  }
  // 清除所有li和section
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {

      this.lis[i].className = ' ';
      this.sections[i].className = ' ';
    }
  }
  // 添加功能
  addTab() {
    that.clearClass();
    var random = Math.random();
    var li = `<li class="liactive"><span>测试</span><span class="iconfont icon-guanbi"></span></li>`;
    var section = ` <section class="conactive">测试${random}</section>`;
    that.ul.insertAdjacentHTML('beforeend', li);
    that.fsection.insertAdjacentHTML('beforeend', section);
    that.init();
  }
  // 删除功能
  removeTab(e) {
    e.stopPropagation();
    var index = this.parentNode.index;
    console.log(index);
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();
    if (document.querySelector('.liactive')) return;
    index--;
    that.lis[index] && that.lis[index].click();
  }
  // 修改功能
  editTab() {
    console.log(111);
    var str = this.innerHTML;
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    this.innerHTML = '<input type="text"/>';
    var input = this.children[0];
    input.value = str;
    input.select();
    input.onblur = function () {
      this.parentNode.innerHTML = this.value;
    }
    input.onkeyup = function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    }
  }
}



new Tab("#tab");