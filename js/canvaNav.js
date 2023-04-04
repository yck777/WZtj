function canvasInit(circle,currentIndex) {
  init(circle,currentIndex)
  function init() {
    let canvas = document.querySelector(circle)
    let ctx = canvas.getContext('2d');
    draw(ctx,currentIndex);
  }

  function draw(ctx,currentIndex) {
    requestAnimationFrame(function step() {
      drawDial(ctx,currentIndex) //绘制表盘1
    })
  }
  function drawDial(ctx,currentIndex) {
    let pi = Math.PI
    ctx.clearRect(0, 0, 110, 110) //清除所有内容
    ctx.save()
    ctx.translate(55, 55) //一定坐标原点到原来的中心
    ctx.beginPath() // 开始绘画
    ctx.stroke()
    ctx.closePath() 


    let j = 0;
    let time = '';
    const highlight = () => {
      ctx.clearRect(-55, -55, 110, 110) //清除所有内容
      ctx.beginPath()
      for (let i = 0; i < 40; i++) {
        ctx.save()
        ctx.rotate(-pi / currentIndex + (i * pi) / 20) //旋转坐标轴。坐标轴x的正方形从 向上开始算起
        ctx.beginPath()
        ctx.moveTo(38, 0) //在内向外画，开始
        ctx.lineTo(48, 0) //画到结束 长度为130-100 ,这里设置画的长度
        ctx.lineWidth = 5 // 宽度
        ctx.strokeStyle = 'rgba(60,127,255,.3)'
        ctx.stroke()
        if (i == j) {
          ctx.strokeStyle = 'rgba(33,107,248,1)'
          ctx.stroke()
        }
        ctx.closePath()
        ctx.restore()
      }

      // 外圆
      ctx.beginPath() 
      ctx.arc(0,0,56,0,Math.PI * 2,true) // 绘制
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#1e3870";
      ctx.stroke();

      // 内圆
      ctx.beginPath() 
      ctx.arc(0,0,52,0,Math.PI * 2,true) // 绘制
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#3a68c6";
      ctx.stroke();
      
      for (let i = 0; i < 8; i++){
            //绘制刻度。
            ctx.save()
            ctx.rotate(2 * (i * pi) / 5) //旋转坐标轴。坐标轴x的正方形从 向上开始算起
            ctx.beginPath()
            ctx.moveTo(50, 0) //在内向外画，开始
            ctx.lineTo(53, 0)  //画到结束 长度为130-100 ,这里设置画的长度
            ctx.lineWidth = 15 
            ctx.strokeStyle = '#5487f0'
            ctx.stroke()
            ctx.closePath()
            ctx.restore()
      }

      j++;
      if (j >= 40) j = 0;
      return highlight;
    }

    if (time) clearInterval(time);
    time = setInterval(highlight(), 1000); 
  }
}
canvasInit('#canvasCircle1',2);
canvasInit('#canvasCircle2',-5);
canvasInit('#canvasCircle3',15);
canvasInit('#canvasCircle4',-2);
