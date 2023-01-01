

let b =  10;
var c = 100;

console.log(b);

function fn(){
    console.log(b);
    console.log(c);

    var c = 200
}

fn();
console.log(b)

// ----------------------

// let b =  10;
// var c = 100;

// console.log(b);

// function fn(){
//     console.log(b);
//     console.log(c);

//     var c = 200
//     return c;
// }

// fn();
// console.log(b)


// -------------------------


// let a = 10;

// // first class function
// var b = function sam(){

//     let c = function(){
//         return 20;
//     }
    
//     let d = c();
//     console.log(d);
// };

// b();
// console.log(a);

// ------------------------
//a-10 , b-20 , b = 100 , 

// let a = 10;
// var b = 20;

// let d = masti() // b-100

// function masti(){
//     console.log(b)
//     var b = 100;
//     console.log(b)

//     return b;
// }

// console.log(b)
// console.log(d)

// -------------------------

// let a = 10;
// var b = 20;


// {
//     console.log(b)
//     var b = 100;
//     console.log(b)

// }

// console.log(b)

// ---------------------

// let a = 10;
// let b = 20;


// {
//     console.log(b)
//     let b = 100;
//     console.log(b)

// }

// console.log(b)

