$(function () {
  const obj = {
    num: Math.floor(window.screen.width / 61), //屏幕宽度除以字体宽度
    screenHeight: window.screen.height, //屏幕高度
    screenWidth: window.screen.width, //屏幕宽度
    dom: '',
    oneself:0,
  }
 
  //生成30个p标签
  const createDom = () => {
    for (let i = 0; i < obj.num; i++) {
      let p = document.createElement('p');
      p.innerHTML = 'SUPERVISION';
      document.querySelector('.letters').appendChild(p);
    }
  }
  createDom();

  obj.dom = document.querySelectorAll('.letters p');   //获取所有p标签
  obj.oneself = document.querySelector('.letters p').offsetHeight; //自身高度

  // 初始化
  const init = () => {
    for (let i = 0; i < obj.dom.length; i++) { 
      obj.dom[i].style.top = (i * Math.random()) * 50 + 80 >
      obj.screenHeight ? (i * Math.random()) * 50 + 80 - obj.screenHeight + 'px' : (i * Math.random()) * 50 + 80 + 'px';
      obj.dom[i].style.left = i * 60 + 45 + 'px';
    }
  }
  init();
  // 移动
  const move = (dom) => { 
    for (let i = 0; i < dom.length; i++) { 
      let top = dom[i].offsetTop + 1;
      dom[i].style.top = top + 'px';
      top  >= (obj.screenHeight - 300) ?  dom[i].style.top = 0 : dom[i].style.top = top + 'px';
    }
  }
  // 定时器
  let time = setInterval(() => move(obj.dom), 10);
  // 清除定时器
  if (!obj.dom) clearInterval(time);
})