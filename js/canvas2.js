init()
function init() {
  let canvas = document.querySelector('#circle')
  let ctx = canvas.getContext('2d');
  draw(ctx);
}

function draw(ctx) {
  requestAnimationFrame(function step() {
    drawDial(ctx) //绘制表盘1
  })
}
function drawDial(ctx) {
    let pi = Math.PI
    ctx.clearRect(0, 0, 150, 150) //清除所有内容
    ctx.save()
    ctx.translate(75, 75) //一定坐标原点到原来的中心
    ctx.beginPath()
    ctx.stroke()
    ctx.closePath()
  for (let i = 0; i < 120; i++) {
    //绘制刻度。
    ctx.save()
    ctx.rotate(-pi / 2 + (i * pi) / 60) //旋转坐标轴。坐标轴x的正方形从 向上开始算起
    ctx.beginPath()
    ctx.moveTo(58, 0) //在内向外画，开始
    ctx.lineTo(72, 0) //画到结束 长度为130-100 ,这里设置画的长度
    ctx.lineWidth = 2 
    ctx.strokeStyle = 'rgba(55,216,224,.8)'
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }
  // ctx.font = '40px  黑体 ' //设置文字格式
  // ctx.fillStyle = '#224365' //设置文字颜色
  // ctx.fillText('2000', -35, -15)
  // ctx.font = '30px 黑体 '
  // ctx.fillStyle = '#577494'
  // ctx.fillText('r/min', -35, 30)
  // ctx.restore()
  
  // 画圆形
  
  for(let i = 0;i<36;i++){
    //绘制刻度。
    ctx.save()
    ctx.rotate(12 * Math.PI / 180) //旋转坐标轴。坐标轴x的正方形从 向上开始算起
    ctx.beginPath();
    ctx.moveTo(0, -55) //在内向外画，开始
    ctx.lineTo(-10, -30);
    ctx.lineTo(10,-30);
    ctx.fillStyle="rgb(55,216,224)";
    ctx.fill();
  }
  // 画外圆
  ctx.beginPath();
  ctx.arc(0,0, 63, 0, Math.PI * 2, true); // 绘制
  ctx.lineWidth = 4;
  ctx.strokeStyle="rgb(55,216,224)";
  ctx.stroke();
  // 画内圆
  ctx.beginPath();
  ctx.arc(0,0, 37, 0, Math.PI * 2, true); // 绘制
  ctx.lineWidth = 5;
  ctx.fillStyle="#08122d";
  ctx.fill();
  ctx.strokeStyle="rgb(55,216,224)";
  ctx.stroke();
}


