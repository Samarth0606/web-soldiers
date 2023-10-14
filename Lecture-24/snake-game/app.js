// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1500;

// let snakeCells = [[0,0]];

// function draw(){

// }

// function update(){
    
// }

// setInterval(() => {
//     update();
//     draw();
// }, 200);

// -----------------------------------------------------------

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1500;

// let snakeCells = [ [0,0] , [50,0] ];

// function draw(){
//     ctx.clearRect(0,0 ,1500,600); //rub the canvas before drawing new

//     for(let item of snakeCells){
//         ctx.fillStyle = 'red'
//         ctx.fillRect(item[0] , item[1] , cellSize ,cellSize )
//     }

// }

// function update(){
//     let headX = snakeCells[snakeCells.length-1][0];
//     let headY = snakeCells[snakeCells.length-1][1]; 

//     let newHeadX = headX + cellSize;
//     let newHeadY = headY;

//     snakeCells.push([newHeadX,newHeadY]);
//     snakeCells.shift();

// }

// setInterval(() => {
//     update();
//     draw();
// }, 200);

// ------------------------------------------------------------

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1500;

// let snakeCells = [ [0,0] , [50,0] ];

// let direction = 'right';

// document.addEventListener('keydown' , function(event){
//     // console.log(event)
//     if(event.key === 'ArrowUp'){ direction='up' }
//     else if(event.key === 'ArrowDown'){ direction='down' }
//     else if(event.key === 'ArrowLeft'){ direction='left' }
//     else{ direction='right' }
// })

// function draw(){
//     ctx.clearRect(0,0 ,1500,600); //rub the canvas before drawing new
//     for(let item of snakeCells){
//         ctx.fillStyle = 'red'
//         ctx.fillRect(item[0] , item[1] , cellSize ,cellSize )
//     }
// }

// function update(){
//     let headX = snakeCells[snakeCells.length-1][0];
//     let headY = snakeCells[snakeCells.length-1][1]; 

//     let newHeadX;
//     let newHeadY;

//     if(direction === 'up'){
//         newHeadX = headX;  newHeadY = headY - cellSize;
//     }
//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + cellSize;
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - cellSize;
//         newHeadY = headY;
//     }
//     else{
//         newHeadX = headX + cellSize;
//         newHeadY = headY;
//     }

//     snakeCells.push([newHeadX,newHeadY]);
//     snakeCells.shift();

// }

// setInterval(() => {
//     update();
//     draw();
// }, 200);

// ------------------------------------------------------------

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1500;

// let snakeCells = [ [0,0] , [50,0] ];

// let direction = 'right';
// let gameOver = false;

// document.addEventListener('keydown' , function(event){
//     // console.log(event)
//     if(event.key === 'ArrowUp'){ direction='up' }
//     else if(event.key === 'ArrowDown'){ direction='down' }
//     else if(event.key === 'ArrowLeft'){ direction='left' }
//     else{ direction='right' }
// })

// function draw(){
//     if(gameOver === true){
//         clearInterval(Id);
//         return;
//     }
//     ctx.clearRect(0,0 ,1500,600); //rub the canvas before drawing new
//     for(let item of snakeCells){
//         ctx.fillStyle = 'red'
//         ctx.fillRect(item[0] , item[1] , cellSize ,cellSize )
//     }
// }

// function update(){
//     let headX = snakeCells[snakeCells.length-1][0];
//     let headY = snakeCells[snakeCells.length-1][1]; 

//     let newHeadX;
//     let newHeadY;

//     if(direction === 'up'){
//         newHeadX = headX;  newHeadY = headY - cellSize;
//     }
//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + cellSize;
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - cellSize;
//         newHeadY = headY;
//     }
//     else{
//         newHeadX = headX + cellSize;
//         newHeadY = headY;
//     }

//     snakeCells.push([newHeadX,newHeadY]);
//     snakeCells.shift();

//     // condition to stop the snake at walls
//     if(newHeadY>= 0 && newHeadY<boardHeight && newHeadX>=0 && newHeadX < boardWidth){
//         gameOver = false;
//     }
//     else{
//         gameOver = true;
//     }


// }

// let Id = setInterval(() => {
//     update();
//     draw();
// }, 200);

// ------------------------------------------------------------

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50;
let boardHeight = 600;
let boardWidth = 1500;

let snakeCells = [ [0,0] , [50,0] ];

let direction = 'right';
let gameOver = false;

let score = 0;

let foodCell = generateRandomFood(); 

document.addEventListener('keydown' , function(event){
    // console.log(event)
    if(event.key === 'ArrowUp'){ direction='up' }
    else if(event.key === 'ArrowDown'){ direction='down' }
    else if(event.key === 'ArrowLeft'){ direction='left' }
    else{ direction='right' }
})

function draw(){
    if(gameOver === true){
        clearInterval(Id);
        ctx.fillStyle = "red";
        ctx.font = '40px sans-serif'
        ctx.fillText('GAME OVER !!' , 600,300);
        return;
    }
    ctx.clearRect(0,0 ,1500,600); //rub the canvas before drawing new
    for(let item of snakeCells){
        ctx.fillStyle = 'red'
        ctx.fillRect(item[0] , item[1] , cellSize ,cellSize );
        ctx.strokeStyle = 'golden'
        ctx.strokeRect(item[0] , item[1] , cellSize ,cellSize );
    }
    // draw food
    ctx.fillStyle = "orange"
    ctx.fillRect(foodCell[0] , foodCell[1] , cellSize,cellSize)

    // draw score
    ctx.font = '25px sans-serif'
    ctx.fillStyle = 'yellow'
    ctx.fillText(`Score: ${score}` , 30, 30)
}

function update(){
    let headX = snakeCells[snakeCells.length-1][0];
    let headY = snakeCells[snakeCells.length-1][1]; 

    let newHeadX;
    let newHeadY;

    if(direction === 'up'){
        newHeadX = headX;  newHeadY = headY - cellSize;
    }
    else if(direction === 'down'){
        newHeadX = headX;
        newHeadY = headY + cellSize;
    }
    else if(direction === 'left'){
        newHeadX = headX - cellSize;
        newHeadY = headY;
    }
    else{
        newHeadX = headX + cellSize;
        newHeadY = headY;
    }
    
    // khud ko kaatne vaala case
    gameOver = suicide(newHeadX,newHeadY);
    if(gameOver === true){
        clearInterval(Id);
        ctx.fillStyle = "red";
        ctx.font = '40px sans-serif'
        ctx.fillText('GAME OVER !!' , 600,300);
        return;
    }

    snakeCells.push([newHeadX,newHeadY]);
    if(newHeadX === foodCell[0] && newHeadY === foodCell[1]){
        foodCell = generateRandomFood();
        score++;
    }else{
        snakeCells.shift();
    }

    // condition to stop the snake at walls
    if(newHeadY>= 0 && newHeadY<boardHeight && newHeadX>=0 && newHeadX < boardWidth ){
        gameOver = false;
    }
    else{
        gameOver = true;
    }

}

function generateRandomFood(){
    return [
        ( Math.floor( (Math.random() * boardWidth) / cellSize ) ) * cellSize ,
        ( Math.floor( (Math.random() * boardHeight) / cellSize ) ) * cellSize 
    ]
}

function suicide(newHeadX , newHeadY){
    for(let item of snakeCells){
        if(item[0]=== newHeadX && item[1] === newHeadY){
            return true
        } 
    }
    return false
}

let Id = setInterval(() => {
    update();
    draw();
}, 200);


