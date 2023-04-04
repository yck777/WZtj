init2('#circle2','rgba(0,247,238,.5)','rgb(55,216,224)','rgb(0,176,186)', 'rgb(0,247,238)')
init2('#circle3','rgba(241,127,32,.5)','rgb(253,172,105)','rgb(241,127,32)','rgb(253,172,105)')
init2('#circle4','rgba(23,90,253,.5)','rgb(121,160,252)','rgb(23,90,253)','rgb(121,160,252)')
init2('#circle5','rgba(233,78,155,.5)','rgb(248,146,198)','rgb(233,78,155)','rgb(248,146,198)')
function init2(canvas,color1,color2,LinearGradient1,LinearGradient2) {
  let canvas2 = document.querySelector(canvas)
  let ctx2 = canvas2.getContext('2d');
  draw2(ctx2,color1,color2,LinearGradient1,LinearGradient2);
}

function draw2(ctx,color1,color2,LinearGradient1,LinearGradient2) {
  requestAnimationFrame(function step() {
    drawDial2(ctx,color1,color2,LinearGradient1,LinearGradient2) //绘制表盘1
  })
}

function drawDial2(ctx,color1,color2,LinearGradient1,LinearGradient2) {
      let pi = Math.PI
      ctx.clearRect(0, 0, 100, 100) //清除所有内容
      ctx.save()
      ctx.translate(50, 50) //一定坐标原点到原来的中心
      ctx.beginPath()
      ctx.stroke()
      ctx.closePath()
    for (let i = 0; i < 80; i++) {
        //绘制刻度。
        ctx.save()
        ctx.rotate(-pi / 2 + (i * pi) / 30) //旋转坐标轴。坐标轴x的正方形从 向上开始算起
        ctx.beginPath()
        ctx.moveTo(44, 0) //在内向外画，开始
        ctx.lineTo(50, 0) //画到结束 长度为130-100 ,这里设置画的长度
        ctx.lineWidth = 1 
        ctx.strokeStyle = color1
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
    }
    // 内圆
      ctx.beginPath();
      ctx.arc(0,0, 35, 0, Math.PI * 2, true); // 绘制
      ctx.lineWidth = 3;
      ctx.strokeStyle = color2;
      ctx.stroke();
    
      ctx.beginPath();
      ctx.arc( 0, 0, 35, 1.5 * Math.PI ,Math.PI * 0.5, true); // 绘制
      const g = ctx.createLinearGradient(0,0,0,50);  
      g.addColorStop(0, LinearGradient1); 
      g.addColorStop(1, LinearGradient2); 
      ctx.lineWidth = 7;
      ctx.strokeStyle = g;
      ctx.stroke();
 }
