let canvas = document.querySelector('canvas'); //sheet
let ctx =  canvas.getContext('2d'); //brush


// ctx.fillStyle = "green"
// ctx.fillRect(100 , 50 , 160 , 80)
// ctx.fillStyle = "green" --> wrong


// ctx.strokeStyle = "green"
// ctx.strokeRect(200 , 200 , 100 , 100);


// ctx.beginPath();
// ctx.moveTo(150 , 150);
// ctx.lineTo(150 , 300)
// ctx.lineTo(300 , 300)
// ctx.lineTo(300 , 100);
// ctx.closePath();

// ctx.stroke()
// ctx.fill()

ctx.font = '30px sans-serif'
ctx.fillStyle = 'red'
ctx.fillText('samarth' , 100 , 200)

