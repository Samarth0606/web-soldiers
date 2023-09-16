

// console.log("start");

// console.log("mid");

// console.log("end");


// ---------------------


// console.log("start");

// console.log("run after 4 seconds"); //run after 4 secs

// console.log("end");


// ----------------------

// setTimeout() -> delay provide

// console.log("first");

// setTimeout( function(){ //cb func , delay in ms
//     console.log("run after 4 seconds")
// } , 4000 ) 

// console.log("end");

// -----------------------


// console.log("start")

// setTimeout( function(){
//     console.log('run after 2 seconds')
// } , 2000 )


// setTimeout( function(){
//     console.log('run after 4 seconds')
// } , 4000 )

// console.log("end")


// -------------------------

// console.log("start")

// setTimeout( function(){
//     console.log('run after 4 seconds')
// } , 4000 )


// setTimeout( function(){
//     console.log('run after 2 seconds')
// } , 2000 )

// console.log("end")

// --------------------------


// console.log("start")

// setTimeout( function(){
//     console.log('run after 0 seconds')
// } , 0 )


// console.log("end")

// -----------------------

// function x(){
//     for(var i=0;i<6;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },1000*i)
//     }
// }
// x();

// --------------------

// function x(){
//     for(let i=0;i<6;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },1000*i)
//     }
// }
// x();

// -------------------

// function x(){
//     for(const i=0;i<6;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },1000*i)
//     }
// }
// x();


// ----------------------------------

// function fun(){
//     let i = 10;
//     while(i>10){
//         setInterval(()=>{
//             console.log("bas 1 baar aur")
//         }, 1000)
//     }
//     console.log("namaste")
// }
// fun()

// -----------------------------

// function x(){
//     for(var i=0;i<6;i++){
//         function close(i){
//                 setTimeout(function(){
//                     console.log(i);
//                 },1000*i)
//         }   
//         close(i);
//         console.log("interview");
//     }
// }
// x();




