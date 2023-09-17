// this - type-1
// function invokation
// function sam(){
//     console.log(this);
// }
// sam();


// -------------------------
// this - type-2
// object invokation
// let obj = {
//     a:10,
//     fn: function(){
//         console.log(this);
//     }
// }

// obj.fn();


// ------------------

// let obj = {
//     a:10,
//     fn:function(){
//         // console.log(this);
//         function nested(){
//             console.log(this);
//         }
//         nested();
//     }
// }

// obj.fn();


// -------------------------
// contructor invokation
// this - type-3

// function Sam(kuldeep){
//     this.a = kuldeep;
// }

// let obj1 = new Sam(20);
// let obj2 = new Sam(40);

// console.log(obj1);
// console.log(obj2);


// ------------------------

// indirect invokation
// call , apply ,bind


// let obj = {
//     a:100,
//     fn:function(a,b,c){
//         console.log(this , a , b, c)
//     }
// }

// let obj2 = {
//     b:20
// }

// obj.fn();//right
// obj2.fn(); //wrong

// obj.fn.call()
// obj.fn.call(obj2)
// obj.fn.call(obj2 , 10 , 20 , 30)

// obj.fn.apply(obj2 , [10 , 20 ,30])

// bind

// let obj = {
//     a:100,
//     fn:function(a,b,c){
//         console.log(this , a , b, c)
//     }
// }

// let obj2 = {
//     b:20
// }

// let ans = obj.fn.bind(obj2 , 10 , 20 , 30);
// let ans = obj.fn.bind(100 , 10 , 20 , 30);
// console.log(ans)

// ans();


// --------------------------------


// let obj = {
//     a:100,
//     fn:function(){
//         console.log(this);
//     }
// }
// let final = obj.fn;
// final();

// -----------------------------


// arrow function calling

// let ans = ()=>{
//     console.log(this);
// }

// ans();
// ---------------

// let obj = {
//     a:100,
//     fn: ()=>{
//         console.log(this)
//     }
// }

// obj.fn();

// ------------

// let obj = {
//     a:100,
//     fn: ()=>{
//         // console.log(this);
//         let fun = ()=>{
//             console.log(this);
//         }
//         fun();
//     }
// }

// obj.fn();


// --------------------------------

// let obj = {
//     a:100,
//     fn: function(){
//         // console.log(this);
//         let fun = ()=>{
//             console.log(this);
//         }
//         fun();
//     }
// }

// obj.fn();

